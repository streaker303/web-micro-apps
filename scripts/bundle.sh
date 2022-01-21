#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

# sub-ven子应用
cp -r ./sub-ven/dist/ ./dist/subapp/sub-ven/
rm -rf ./sub-ven/dist

# sub-vue子应用
cp -r ./sub-vue/dist/ ./dist/subapp/sub-vue/
rm -rf ./sub-vue/dist


# main基座
cp -r ./main/dist/ ./
rm -rf ./main/dist

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
