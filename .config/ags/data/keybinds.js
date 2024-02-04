export const keybindList = [[
    {
        "icon": "pin_drop",
        "name": "Workspaces: navigation",
        "binds": [
            { "keys": ["", "+", "#"], "action": "Go to workspace" },
            { "keys": ["", "+", "S"], "action": "Toggle special workspace" },
            { "keys": ["", "+", "(Scroll ↑↓)"], "action": "Change Workspace" },
            { "keys": ["Ctrl", "", "+", "←→"], "action": "Change Workspace" },
            // { "keys": ["Ctrl", "", "+", "→"], "action": "Go to workspace on the right" },
            { "keys": ["", "+", "PageUp"], "action": "Go to workspace on the left" },
            { "keys": ["", "+", "PageDown"], "action": "Go to workspace on the right" }
        ],
        "appeartick": 1
    },
    {
        "icon": "overview_key",
        "name": "Workspaces: management",
        "binds": [
            { "keys": ["", "Alt", "+", "#"], "action": "Move window to workspace #" },
            { "keys": ["", "Alt", "+", "S"], "action": "Move window to special workspace" },
            { "keys": ["", "Alt", "+", "PageUp"], "action": "Move window to workspace on the left" },
            { "keys": ["", "Alt", "+", "PageDown"], "action": "Move window to workspace on the right" }
        ],
        "appeartick": 1
    },
    {
        "icon": "move_group",
        "name": "Windows",
        "binds": [
            { "keys": ["", "+", "←↑→↓"], "action": "Change Window Focus" },
            { "keys": ["", "Shift", "+", "←↑→↓"], "action": "Swap window in direction" },
            { "keys": ["", "+", ";"], "action": "Split ratio -" },
            { "keys": ["", "+", "'"], "action": "Split ratio +" },
            { "keys": ["", "+", "Lmb"], "action": "Move window" },
            { "keys": ["", "+", "Mmb"], "action": "Move window" },
            { "keys": ["", "+", "Rmb"], "action": "Resize window" },
            { "keys": ["", "+", "F"], "action": "Fullscreen" },
            { "keys": ["", "Alt", "+", "F"], "action": "Fake fullscreen" }
        ],
        "appeartick": 1
    }
],
[
    {
        "icon": "widgets",
        "name": "Widgets (AGS)",
        "binds": [
            { "keys": ["", "OR", "", "+", "Tab"], "action": "Toggle overview/launcher" },
            { "keys": ["Ctrl", "", "+", "R"], "action": "Restart AGS" },
            { "keys": ["", "+", "H"], "action": "Toggle Help" },
            { "keys": ["", "+", "P"], "action": "Chat GPT Bar" },
            { "keys": ["", "+", "X", "OR", "", "+", "O"], "action": "Tasks and Settings Bar" },
            { "keys": ["", "+", "K"], "action": "Toggle virtual keyboard" },
            { "keys": ["Ctrl", "Alt", "+", "Del"], "action": "Logout/Shutdown" },

            { "keys": ["Esc"], "action": "Exit a window" },
            // { "keys": ["rightCtrl"], "action": "Dismiss/close sidebar" },

            { "keys": ["Ctrl", "", "+", "T"], "action": "Change wallpaper+colorscheme" },

            // { "keys": ["", "+", "X"], "action": "Chat GPT Bar" },
            // { "keys": ["", "+", "P"], "action": "Tasks and Settings Bar" },
            // { "keys": ["", "+", "G"], "action": "Toggle volume mixer" },
            // { "keys": ["", "+", "M"], "action": "Toggle useless audio visualizer" },
            // { "keys": ["(right)Ctrl"], "action": "Dismiss notification & close menus" }
        ],
        "appeartick": 2
    },
    {
        "icon": "construction",
        "name": "Utilities",
        "binds": [
            { "keys": ["PrtSc"], "action": "Screenshot  >>  clipboard" },
            { "keys": ["", "Shift", "+", "S"], "action": "Screen snip  >>  clipboard" },
            { "keys": ["", "Shift", "+", "T"], "action": "Image to text  >>  clipboard" },
            { "keys": ["", "Shift", "+", "C"], "action": "Color picker" },
            { "keys": ["", "Alt", "+", "R"], "action": "Record region" },
            { "keys": ["Ctrl", "Alt", "+", "R"], "action": "Record region with sound" },
            { "keys": ["", "Shift", "Alt", "+", "R"], "action": "Record screen with sound" }
        ],
        "appeartick": 2
    },
    // {
    //     "icon": "edit",
    //     "name": "Edit mode",
    //     "binds": [
    //         { "keys": ["Esc"], "action": "Exit Edit mode" },
    //         { "keys": ["#"], "action": "Go to to workspace #" },
    //         { "keys": ["Alt", "+", "#"], "action": "Dump windows to workspace #" },
    //         { "keys": ["Shift", "+", "#"], "action": "Swap windows with workspace #" },
    //         { "keys": ["Lmb"], "action": "Move window" },
    //         { "keys": ["Mmb"], "action": "Move window" },
    //         { "keys": ["Rmb"], "action": "Resize window" }
    //     ],
    //     "appeartick": 2
    // }
],
[
    {
        "icon": "apps",
        "name": "Apps",
        "binds": [
            { "keys": ["", "+", "A"], "action": "Launch Kitty" },
            { "keys": ["", "+", "W"], "action": "Launch Floorp" },
            { "keys": ["", "+", "N"], "action": "Launch NeoVim" },
            // { "keys": ["", "+", "X"], "action": "Launch editor: GNOME Text Editor" },
            { "keys": ["", "+", "I"], "action": "Launch Settings" }
        ],
        "appeartick": 3
    },
    {
        "icon": "keyboard",
        "name": "Typing",
        "binds": [
            { "keys": ["", "+", "V"], "action": "Clipboard history  >>  clipboard" },
            { "keys": ["", "+", "."], "action": "Emoji picker  >>  clipboard" },
        ],
        "appeartick": 3
    },
    {
        "icon": "terminal",
        "name": "Launcher actions",
        "binds": [
            { "keys": [">raw"], "action": "Toggle Mouse Acceleration" },
            { "keys": [">img"], "action": "Select Wallpaper and Generate Colorscheme" },
            { "keys": [">light"], "action": "Switch to Light Theme" },
            { "keys": [">dark"], "action": "Switch to Dark Theme" },
            { "keys": [">badapple"], "action": "Apply Black n' White Colorscheme" },
            { "keys": [">color"], "action": "Pick Acccent Color" },
            { "keys": [">todo"], "action": "Add Task" },
        ],
        "appeartick": 3
    }
]];
