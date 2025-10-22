#!/bin/bash

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# source mac-utils.sh
source "$SCRIPT_DIR/mac-utils.sh"

# Check node version is at least 18
check_node_version

title=$1
developCommand="${2:-dev}"
buildCommand="${3:-build}"

# set terminal title
printf "\e]0;%s\a" "$title - $developCommand"

# clear screen
clear

# get project path
project_path=$(pwd)

# display project information
color_echo "$CYAN" "Project: " && color_echo "$GREEN" "$title"
echo ""
color_echo "$CYAN" "Path:   " && color_echo "$GREEN" "$project_path"
echo ""
color_echo "$CYAN" "To Develop: " && color_echo "$RED" "npm run $developCommand"
echo ""
color_echo "$CYAN" "To Build:   " && color_echo "$RED" "npm run $buildCommand"
echo ""

# run npm command
echo "Running: npm run $developCommand"
npm run $developCommand
