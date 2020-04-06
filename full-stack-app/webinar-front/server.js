const express = require('express');
const favicon = require('express-favicon');
const axios = require('axios');
const path = require('path');
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();
const config = require("./config");


app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.get('/worldstatus', function (req, res) {
  console.log(`localhost:${port}/worldstatus -> ${config.baseURL}/worldstatus/`)
  axios.get(`${config.baseURL}/worldstatus/`).then(resp => {
      return res.send(resp.data.response[0]);
    }).catch(err => {
        return res.send(err);
    });
 });

app.get('/values', function (req, res) {
  console.log(`localhost:${port}/values -> ${config.baseURL}/values/`)
  axios.get(`${config.baseURL}/values/`).then(resp => {
    return res.status(200).send(resp.data);
  }).catch(err => {
      return res.send(`HATA: ${err}`);
  });
});

app.get('/statistics', function (req, res) {
  console.log(`localhost:${port}/statistics -> ${config.baseURL}/statistics/`)
  axios.get(`${config.baseURL}/statistics/`).then(resp => {
    return res.status(200).send(resp.data);
  }).catch(err => {
      return res.send(`HATA: ${err}`);
  });
}); 

app.get('/statistics/:country', function (req, res) {
 axios.get(`${config.baseURL}/statistics/${req.params.country}`).then(resp => {
   return res.status(200).send(resp.data);
 }).catch(err => {
     return res.send(`HATA: ${err}`);
 });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log(`API is on ${config.baseURL}`);
console.log(`Server is running on ${port}`);
app.listen(port);