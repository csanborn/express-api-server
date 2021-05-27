const Joi = require('joi');
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

// app.post('/api/courses', (req, res) => {
//     const {error} = validateCourse(req.body);

//     if (error) {
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     const course = {
//         id: parseInt(courses[courses.length - 1].id) + 1,
//         name: req.body.name
//     }

//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));

//     if (!course) {
//         res.status(404).send(`Course ${req.params.id} not found`)
//     }

//     const {error} = validateCourse(req.body);

//     if (error) {
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     course.name = req.body.name;
//     res.send(course);
//     // res.send(req.params.id)
//     // res.send(req.query) get query params

// });

// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));

//     if (!course) {
//         res.status(404).send(`Course ${req.params.id} not found`)
//     }

//     res.send(course);
//     // res.send(req.params.id)
//     // res.send(req.query) get query params

// });

function validateParams(city) {
    return true
    const schema = Joi.object({
        city: Joi.string().min(3).required()
    })

    return schema.validate(course, schema);
}

// const port = process.env.PORT || 8080;
const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})