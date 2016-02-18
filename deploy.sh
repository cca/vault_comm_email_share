#!/usr/bin/env bash
# update this array with your server addresses or SSH aliases
SERVERS=(v1 v2)
# bash arrays are awful ugly
for server in ${SERVERS[*]}; do
    # script is uploaded to SSH user's home folder
    ssh vault-comm-share-email.sh $server:~
done
