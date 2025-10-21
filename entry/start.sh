#!/bin/bash

# 引入颜色定义文件
source "../script/colors.sh"

title="Laboratory Entry"
script="${2:-dev}"

# 设置终端标题
printf "\e]0;%s\a" "$title - $script"

# 清屏
clear

# 获取项目路径
project_path=$(pwd)

# 显示项目信息
color_echo "$Cyan" "Project: " && color_echo "$GREEN" "$title"
echo ""
color_echo "$Cyan" "Path:   " && color_echo "$GREEN" "$project_path"
echo ""
color_echo "$Cyan" "To Develop: " && color_echo "$RED" "npm run dev"
echo ""
color_echo "$Cyan" "To Build:   " && color_echo "$RED" "npm run build"
echo ""

# 执行npm命令
echo "Running: npm run $script"
npm run $script