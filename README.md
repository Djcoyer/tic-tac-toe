﻿To run this app with Docker, open the command line and navigate to the root folder. Once there:

//Build
Type docker build -t tic-tac-toe

//Run
Type 'docker run -d -p 5000:5000 --name react-demo tic-tac-toe'. This will start the app on http://localhost:5000.