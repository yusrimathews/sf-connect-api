# [Template] Heroku Connect API Server

This API Server functions as an interface facilitating bidirectional data synchronisation between a Salesforce instance and progressive web applications. Powered by Heroku Connect, streamlining data exchange and ensuring seamless communication between your product and Salesforce.

> This repository is designed to kickstart the development of custom API servers for Salesforce using Heroku Connect, useful for product development.

![Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fyusrimathews%2Fsf-connect-api%2Fmain%2Fpackage.json&query=%24.version&label=version&color=bright)
![License](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fyusrimathews%2Fsf-connect-api%2Fmain%2Fpackage.json&query=%24.license&label=license)

[<img src="https://www.herokucdn.com/deploy/button.svg" height="30">](https://heroku.com/deploy)

## Project Setup
### Script Commands:
Install project dependencies:
```
npm install
```

Run the Express server locally:
```
npm run serve
```

Start the Express server:
```
npm start
```

### Environment Variables:
| Variable | Description | Required | Sample Value |
|---|---|---|---|
| NODE_ENV | Environment identifier used for conditional logic. | ❌ | staging |
| PORT | Express server port. | ❌ | postgres://... |
| DATABASE_URL | PostgreSQL database URI. | ✅ | https://xyz.onrender.com/ |
