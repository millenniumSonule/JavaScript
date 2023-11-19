const express = require('express');
const axios = require('axios'); // Import axios for making HTTP requests
const app = express();

app.get('/', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
            location: 'Jalgaon',
            format: 'json',
            u: 'f'
        },
        headers: {
            'X-RapidAPI-Key': 'e3bb55d22cmsh370016c1f0dfbebp161d07jsnda15d3bfcc70',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.send(response.data); // Send the Yahoo Weather API response to the client
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); // Handle errors and send an appropriate response
    }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
