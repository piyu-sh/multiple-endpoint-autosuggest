import express from 'express'  
import { match } from 'react-router'  
import { renderToString } from 'react-dom/server'  
import { RouterContext } from 'react-router'  
import { createStore, applyMiddleware } from 'redux'  
import thunkMiddleware from 'redux-thunk'  
import { Provider } from 'react-redux'  
import { router } from './src/router.js'  
import {reducers} from './src/components/App/reducers.js'
import React, { Component } from 'react';

const host = "0.0.0.0";
const port = process.env.PORT || 3000;
const app = express()

import mongoose from 'mongoose';
import hotels from  './src/api/model/model';
import bodyParser from 'body-parser';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Hotelsdb', {
  useMongoClient: true,
  /* other options */
}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./src/api/routes/routes');
routes(app);

app.use(express.static('public')) ;
app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes: router, location: req.url }, (err, redirect, props) => {

    const store = createStore(reducers, applyMiddleware(thunkMiddleware))

    const appHtml = renderToString(
              <Provider store={store}>
               <RouterContext {...props} />
             </Provider>)
     const state = store.getState()

    res.send(`
    <!DOCTYPE html>
                <html lang="en">
                <head>
                <title>Autosuggest with multiple api endpoints</title>

                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
                    integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

                <link rel="stylesheet" href="/css/main.css">
                </head>
                <body>

                <div id="app">${appHtml}</div>
                <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
                <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBs-hkYVONHPp5NjKuPSbWZqhY6vxa55-k&libraries=places"></script>
                <script src="/js/bundle.js"></script>
                </body>
    </html>
   `);
  })
})


var server = app.listen(port,host, function() {
    console.log('app listening at http://%s:%s', host, port);
});