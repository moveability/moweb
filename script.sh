#!/bin/bash

echo -e "\033[0;32mDeploying new site...\033[0m"

echo -e "\033[0;32mDeleting old site...\033[0m"
rm -rf public

echo -e "\033[0;32mRunning hugo...\033[0m"
#hugo --gc --ignoreCache --cleanDestinationDir -d ../atfutures.github.io
hugo -d ../moveability.github.io

echo -e "\033[0;32mChanging to blog directory...\033[0m"
cd ../moveability.github.io
git pull
#git add blogs/* # add any new entries
#git add about-us/* # add any new entries

echo -e "\033[0;32mCommit and push the new build...\033[0m"
git commit -am "New Build (`date`)"
git push

echo -e "\033[0;32mChange back to moweb ...\033[0m"
cd ../moweb

echo -e "\033[0;32mDeploy complete.\033[0m"
