#!/bin/bash

echo 'Which assignment?'
read assignment

mkdir $assignment	
cp template.js ./$assignment/$assignment-1.js
cp template.js ./$assignment/$assignment-2.js
touch ./$assignment/input.txt

