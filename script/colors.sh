#!/bin/bash

# 颜色定义
Cyan='\033[0;36m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 颜色输出函数
color_echo() {
  local color=$1
  local message=$2
  echo -e "${color}${message}${NC}"
}