const express = require('express');
const axios = require("axios");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.static('public'))

app.get('/weather', async (req, res) => {
    let city;
    if (!req.query.city) {
        city = "Tel Aviv"
    } else {
        city = req.query.city
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.API_KEY}`;
    try {
        const weatherData = (await axios.get(apiUrl)).data
        res.status(200).json(weatherData);
    } catch {
        res.status(204)
    }
});

app.get("/", (req,res) => {
    res.sendFile('public/index.html')  
})

app.get("/chuckNorris", async (req,res) => {
    const apiUrl = `https://api.chucknorris.io/jokes/random`;
    try {
        const chuckNorrisData = (await axios.get(apiUrl)).data
        res.status(200).json(chuckNorrisData);
    } catch {
        res.status(204)
    }
})

app.get('/cat', async (req, res) => {
    res.sendFile('cat.html', { root: __dirname + '/public' });
  });

app.get("/todo", async (req,res) => {
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;
    try {
        const todoData = (await axios.get(apiUrl)).data
        res.status(200).json(todoData);
    } catch {
        res.status(204)
    }
})


const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('server started on port', port);
});
