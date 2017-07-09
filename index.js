require('babel-register')({
  "plugins":[ 
              ["css-modules-transform", {
                        "preprocessCss": "./src/sass-loader.js",
                        "generateScopedName": "[hash:8]",
                        "extensions": [".scss"],
              }]
  ]
              
});
require('./server');