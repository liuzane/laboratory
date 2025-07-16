#!/bin/bash

# 获取当前脚本的绝对路径
SCRIPT_PATH=${BASH_SOURCE[0]}
while [ -L "$SCRIPT_PATH" ]; do
  # 处理符号链接
  SCRIPT_DIR=$(cd -P "$(dirname "$SCRIPT_PATH")" >/dev/null 2>&1 && pwd)
  SCRIPT_PATH=$(readlink "$SCRIPT_PATH")
  [[ $SCRIPT_PATH != /* ]] && SCRIPT_PATH=$SCRIPT_DIR/$SCRIPT_PATH
done
SCRIPT_DIR=$(cd -P "$(dirname "$SCRIPT_PATH")" >/dev/null 2>&1 && pwd)

# 打开 common 目录下的新终端窗口
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/common'\""

# 打开新终端窗口并执行 root 目录下的 start.sh
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/root'; chmod +x start.sh; ./start.sh\""

# 打开新终端窗口并执行 entry 目录下的 start.sh
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/entry'; chmod +x start.sh; ./start.sh\""

# 打开新终端窗口并执行 login 目录下的 start.sh
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/login'; chmod +x start.sh; ./start.sh\""

# 打开新终端窗口并执行 vue 目录下的 start.sh
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/vue'; chmod +x start.sh; ./start.sh\""

# 打开新终端窗口并执行 react 目录下的 start.sh
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/react'; chmod +x start.sh; ./start.sh\""

# 打开新终端窗口并执行 solar-system 目录下的 start.sh
osascript -e "tell application \"Terminal\" to do script \"cd '$SCRIPT_DIR/solar-system'; chmod +x start.sh; ./start.sh\""
