#!/usr/bin/env bash
npm run bulid &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy'
git remote add origin git@github.com:Orange-ice/morney-react-website.git &&
git push -u origin master -f
cd -
