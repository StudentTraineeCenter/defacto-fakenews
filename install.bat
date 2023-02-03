@echo off
start cmd /k "npm install & npm run nodemon"

cd pythonmodel
start cmd /k "pip install -r requirements.txt & python3 server.py"

exit