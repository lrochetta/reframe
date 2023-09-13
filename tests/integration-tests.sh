#!/bin/bash

set -ex

function stop_docker()
{
  echo "stopping leaptable_test"
  docker stop leaptable_test
}

# Ensure current path is project root
cd "$(dirname "$0")/../"

LEAPTABLE_VERSION='latest'

LEAPTABLE_HOST='localhost:6040'

docker run -d --rm \
           --network=host \
           -e LEAPTABLE__SERVICE__GRPC_PORT="6041" \
           --name leaptable_test leaptable/leaptable:${LEAPTABLE_VERSION}

trap stop_docker SIGINT
trap stop_docker ERR

until $(curl --output /dev/null --silent --get --fail http://$LEAPTABLE_HOST/collections); do
  printf 'waiting for server to start...'
  sleep 5
done

pytest

echo "Ok, that is enough"

stop_docker
