#!/bin/bash

# Check if no arguments are supplied
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through the arguments and print each one
    # Note: We only loop up to the 3rd argument, as per the max.
    for arg in "$@"; do
        echo "$arg"
    done
fi