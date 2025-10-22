#!/bin/bash
# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 打开 common 目录下的新终端窗口
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/common'; chmod +x start.command; ./start.command false\""

# 打开新终端窗口并执行 root 目录下的 start.command
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/root'; chmod +x start.command; ./start.command false\""

# 打开新终端窗口并执行 entry 目录下的 start.command
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/entry'; chmod +x start.command; ./start.command false\""

# 打开新终端窗口并执行 login 目录下的 start.command
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/login'; chmod +x start.command; ./start.command false\""

# 打开新终端窗口并执行 vue 目录下的 start.command
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/vue'; chmod +x start.command; ./start.command false\""

# 打开新终端窗口并执行 react 目录下的 start.command
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/react'; chmod +x start.command; ./start.command false\""

# 打开新终端窗口并执行 solar-system 目录下的 start.command
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/solar-system'; chmod +x start.command; ./start.command false\""
