#!/bin/bash

node main
[ -f "example.png" ] || echo "Error: Screenshot file not found!" && exit 1
