# Secure CloudComputing Project
<b>Description</b>: <br> Google Docs Cloud Application for CCNY Secure Cloud Computing Class.<br />
<br>
<b>Group Members</b> : <br> Matthew Lee, Arun Misir, Noshin Zaman, Ahmed Jahangir

## Available Scripts for server client

### `npm i`
Navigate to server folder and client folder in terminal and run this code independently in those directories to install required package.json dependencies for each

In the project's client directory, you can run:

### `npm start`
Runs the app.
Open http://localhost:3000 to view it in the browser.

In the project's server directory, you can run:

### `npm run devStart`
Starts the server.

## Running server client as docker image containers

### `docker-compose up`
Used to build application into seperate services running in one stack and deploy them into docker image containers for local development purposes. Had to create a docker-compose.yml script. Used docker desktop to observe and manage stack deployed with 3 services(frontend, backend, mongo) in development environment. Modifications to run application as docker images can be found in the branch dev.


## Deployed Application to Okteto Cloud Platform
Created docker container images with docker compose and deployed the stack to okteto with 
### `okteto stack deploy (stack name) --build`
Modified deployment for using Okteto Pipeline directly from github for CI/CD. Added a okteto-pipeline.yml file to deployment branch dbranch. Below procedure was used for deployment and replaced the above procedure.
### From your Okteto namespace click deploy and put in the Git URL and branch you want to deploy. Once you click deploy it will automatically find the okteto-pipeline file and begin pulling the code from github and deploying your application on okteto through the pipeline.
Required modifications were made for production deployment found in the branch dbranch. Application in production can be found deployed at url
### https://frontend-amisir0219.cloud.okteto.net/
