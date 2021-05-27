// const Joi = require('joi');
const express = require('express');
const fetch = require('node-fetch');
const app = express();

// const apiKey = '70e20d5454bc69792ba341f032c09df0'; // not working
const apiKey = '75e843de569fb57a783c2e73fd9a7bb5';

app.get('/', (req, res) => {
    res.send('Express server for weather app')
});

app.get('/api/weather/:city', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    let result = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${req.params.city}&mode=json&units=${req.query.units}&cnt=7&appid=${apiKey}`)
    result = await result.json();
    res.status(parseInt(result.cod)).send(result);
});

// const port = process.env.PORT || 8080;
const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})