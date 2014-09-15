#!/bin/bash

set -o errexit
set -o pipefail

apt-get install -y alsa-utils libasound2-dev
mv ./bin/sound_start /usr/bin/sound_start
