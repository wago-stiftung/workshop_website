const express = require('express');
const axios = require("axios");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.static('public'))

app.get('/weather', async (req, res) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${req.query.city}&appid=${process.env.API_KEY}`;
    const weatherData = (await axios.get(apiUrl)).data

    res.status(200).json(weatherData);
});

app.get("/", (req,res) => {
    res.sendFile('public/index.html')  
})


const port = 3000;
app.listen(port, () => {
    console.log('server started on port', port);
});
