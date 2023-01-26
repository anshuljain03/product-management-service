#!bin/bash

# Check if the node_modules exist

if [ ! -d "node_modules" ]; then
    echo "Installing node modules"
    npm install
fi

# Enter Credentials
echo "Enter Database Host"
read DB_HOST
echo "Enter Database Password"
read DB_PASS
echo "Enter Firebase API Key"
read FIREBASE_API_KEY

export DB_HOST DB_USER DB_PASS FIREBASE_API_KEY

# Start the server
node app.js
