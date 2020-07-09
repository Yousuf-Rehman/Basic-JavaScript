// Importing node modules.
const express = require('express');
const fs = require('fs');

// Creating app and defining port number.
const app = express();
const port = 8080;

// Using express static middleware.
app.use(express.static('client'));

// Mapping urls to methods.
app.get('/images/',(req,res) => {
  fs.readdir('client/images',(err,files) => {
    const html = files.map(file => 
      `<a href = ${file}></a>`).join('');
    res.send(html);
  });
});
app.get('/',(req,res) => {
  res.redirect('/main.html');
});

// Setting up app to listen at port 8080.
app.listen(port);
