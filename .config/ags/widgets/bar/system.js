// This is for the right pill of the bar. 
// For the cool memory indicator on the sidebar, see sysinfo.js
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
const { Box, Label, Button, Overlay, Revealer, Scrollable, Stack, EventBox } = Widget;
const { exec, execAsync } = Utils;
const { GLib } = imports.gi;
import Battery from 'resource:///com/github/Aylur/ags/service/battery.js';
import { MaterialIcon } from '../../lib/materialicon.js';
import { AnimatedCircProg } from "../../lib/animatedcircularprogress.js";

const BATTERY_LOW = 20;

const BatBatteryProgress = () => {
    const _updateProgress = (circprog) => { // Set circular progress value
        circprog.css = `font-size: ${Math.abs(Battery.percent)}px;`

        circprog.toggleClassName('bar-batt-circprog-low', Battery.percent <= BATTERY_LOW);
        circprog.toggleClassName('bar-batt-circprog-full', Battery.charged);
    }
    return AnimatedCircProg({
        className: 'bar-batt-circprog',
        vpack: 'center', hpack: 'center',
        extraSetup: (self) => self
            .hook(Battery, _updateProgress)
        ,
    })
}

const BarClock = () => Widget.Box({
    vpack: 'center',
    className: 'spacing-h-5 txt-onSurfaceVariant bar-clock-box',
    children: [
        Widget.Label({
            className: 'bar-clock',
            label: GLib.DateTime.new_now_local().format("%H:%M"),
            setup: (self) => self.poll(5000, label => {
                label.label = GLib.DateTime.new_now_local().format("%H:%M");
            }),
        }),
        Widget.Label({
            className: 'txt-norm',
            label: '•',
        }),
        Widget.Label({
            className: 'txt-smallie',
            label: GLib.DateTime.new_now_local().format("%A, %d/%m"),
            setup: (self) => self.poll(5000, label => {
                label.label = GLib.DateTime.new_now_local().format("%A, %d/%m");
            }),
        }),
    ],
});

const UtilButton = ({ name, icon, onClicked }) => Button({
    vpack: 'center',
    tooltipText: name,
    onClicked: onClicked,
    className: 'bar-util-btn icon-material txt-norm',
    label: `${icon}`,
})

const Utilities = () => Box({
    hpack: 'center',
    className: 'spacing-h-5 txt-onSurfaceVariant',
    children: [
        UtilButton({
            name: 'Screen snip', icon: 'screenshot_region', onClicked: () => {
                Utils.execAsync(['bash', '-c', `grim -g "$(slurp -d -c e2e2e2BB -b 31313122 -s 00000000)" - | wl-copy &`])
                    .catch(print)
            }
        }),
        UtilButton({
            name: 'Color picker', icon: 'colorize', onClicked: () => {
                Utils.execAsync(['hyprpicker', '-a']).catch(print)
            }
        }),
        UtilButton({
            name: 'Toggle on-screen keyboard', icon: 'keyboard', onClicked: () => {
                App.toggleWindow('osk');
            }
        }),
    ]
})

const BarBattery = () => Box({
    className: 'spacing-h-4 txt-onSurfaceVariant',
    children: [
        Revealer({
            transitionDuration: 150,
            revealChild: false,
            transition: 'slide_right',
            child: MaterialIcon('bolt', 'norm', {tooltipText: "Charging"}),
            setup: (self) => self.hook(Battery, revealer => {
                self.revealChild = Battery.charging;
            }),
        }),
        Label({
            className: 'txt-smallie txt-onSurfaceVariant',
            setup: (self) => self.hook(Battery, label => {
                label.label = `${Battery.percent}%`;
            }),
        }),
        Overlay({
            child: Widget.Box({
                vpack: 'center',
                className: 'bar-batt',
                homogeneous: true,
                children: [
                    MaterialIcon('settings_heart', 'small'),
                ],
                setup: (self) => self.hook(Battery, box => {
                    box.toggleClassName('bar-batt-low', Battery.percent <= BATTERY_LOW);
                    box.toggleClassName('bar-batt-full', Battery.charged);
                }),
            }),
            overlays: [
                BatBatteryProgress(),
            ]
        }),
    ]
});

const BarGroup = ({ child }) => Widget.Box({
    className: 'bar-group-margin bar-sides',
    children: [
        Widget.Box({
            className: 'bar-group bar-group-standalone bar-group-pad-system',
            children: [child],
        }),
    ]
});

const switchToRelativeWorkspace = async (self, num) => {
    try {
        const Hyprland = (await import('resource:///com/github/Aylur/ags/service/hyprland.js')).default;
        Hyprland.sendMessage(`dispatch workspace ${num > 0 ? '+' : ''}${num}`);
    } catch {
        execAsync([`${App.configDir}/scripts/sway/swayToRelativeWs.sh`, `${num}`]).catch(print);
    }
}

export default () => Widget.EventBox({
    onScrollUp: (self) => switchToRelativeWorkspace(self, -1),
    onScrollDown: (self) => switchToRelativeWorkspace(self, +1),
    onPrimaryClick: () => App.toggleWindow('sideright'),
    child: Widget.Box({
        className: 'spacing-h-5',
        children: [
            BarGroup({ child: BarClock() }),
            Stack({
                transition: 'slide_up_down',
                transitionDuration: 150,
                items: [
                    ['laptop', Box({
                        className: 'spacing-h-5', children: [
                            BarGroup({ child: Utilities() }),
                            BarGroup({ child: BarBattery() }),
                        ]
                    })],
                    ['desktop', Box({
                        className: 'spacing-h-5',
                        children: [
                            Label({
                                label: 'Weather',
                            })
                        ]
                    })],
                ],
                setup: (stack) => Utils.timeout(10, () => {
                    if (!Battery.available) stack.shown = 'desktop';
                    else stack.shown = 'laptop';
                })
            })
        ]
    })
});
