HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt autocd
bindkey -e
zstyle :compinstall filename '/home/t3/.zshrc'
autoload -Uz compinit
compinit
source ~/.configs/powerlevel10k/powerlevel10k.zsh-theme
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
source /home/t3/.configs/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.configs/zsh-autocomplete/zsh-autocomplete.plugin.zsh
neofetch
