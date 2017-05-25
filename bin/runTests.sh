#!/usr/bin/env bash

set -e # stop on first error

yarn run test:chrome
yarn run test:firefox
yarn run test:phantomjs
