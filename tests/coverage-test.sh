#!/bin/bash

set -ex

coverage run --include='nnext/conversions/conversion.py' -m pytest tests/conversions/test_validate_conversions.py
coverage report --fail-under=97
