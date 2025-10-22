#!/bin/bash

# 加载 nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Define colors
CYAN='\033[0;36m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Output message with color
color_echo() {
  local color=$1
  local message=$2
  echo -e "${color}${message}${NC}"
}

nvm use 20

# Check node version is at least 18
check_node_version() {
  NODE_VERSION=$(node -v | cut -d'v' -f2)
  MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1)

  if [ $MAJOR_VERSION -lt 18 ]; then
    color_echo RED "Error: Node.js version must be at least 18, current version is $NODE_VERSION"
    exit 1
  fi
}


