#!/bin/bash
is_keep_terminal_active=${1:-true}

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Get into script directory
cd $SCRIPT_DIR

# execute mac.sh
chmod +x ../script/mac.sh
../script/mac.sh "Laboratory Entry"

# keep terminal active
if [ "$is_keep_terminal_active" = true ]; then
  exec $SHELL
fi
