import functions from 'firebase-functions'
// const functions = require("firebase-functions");
import express from "express"
import cors from 'cors'
import { getDogs, testApi } from './src/dogs.js'

const app = express()  // sets up our express app
app.use(cors())        // tells it to allow cross-origin resource sharing
app.use(express.json()) //allows posts w/ json bodies

//now we set upo some routes
app.get('/dogs', getDogs)

app.get('/test', testApi)

// instead of app. listen (PORT)

// we need to 1. create cloud function and 2. Pointed to "app"
export const api = functions.https.onRequest(app)  // app instead of ((request, response) => {
    //   functions



// function App () {

// }

// export default App

