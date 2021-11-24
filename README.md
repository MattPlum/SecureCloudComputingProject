# Secure CloudComputing Project
<b>Description</b>: <br> Google Docs Cloud Application for CCNY Secure Cloud Computing Class.<br />
<br>
<b>Group Members</b> : <br> Matthew Lee, Arun Misir, Noshin Zaman, Ahmed Jahangir

## Available Scripts for server client
In the project's client directory, you can run:

### `npm start`
Runs the app.
Open http://localhost:3000 to view it in the browser.

In the project's server directory, you can run:

### `npm run devStart`
Starts the server.


## Available Scripts for NextJS(Seperate App Version)
In the NextJS(Seperate App Version) directory, you can run:

### `yarn run dev`
Runs the app.
Open http://localhost:3000 to view it in the browser.

You can run this to install all dependencies in package.json prior to starting the app:
### `yarn`

Adjustments must be made in .env.local file to change from deployed website to localhost in order to run in development.


## Deployed Application to Okteto Cloud Platform
Created docker container images with docker compose and deployed the stack to okteto with 
### 'okteto stack deploy (stack name) --build'
Application can be found at 
### 'https://frontend-amisir0219.cloud.okteto.net/'
