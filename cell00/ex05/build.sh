#!/bin/bash

# Loop through all arguments passed to the script
for arg in "$@"; do
  # Create a new directory named "ex" followed by the argument
  mkdir "ex$arg"
done