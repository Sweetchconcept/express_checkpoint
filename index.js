const express = require('express');
const app = express();
const moment = require('moment');

app.use(express.static('public'));

const middleware = (req, res, next) => {
    // const currentTime = moment();
    // const isWorkingHour = currentTime.day() >= 1 && currentTime.day() <= 5 && currentTime.hour() >= 9 && currentTime.hour() <= 17;
    // if (!isWorkingHour) {
    //     return res.status(404).send('Application is only available during working hours')
        const currentTime = moment().hour();
        const isOpen = currentTime >= 9 && currentTime <= 19; // 9am to 7pm

        if (isOpen) {
         console.log("The web is available. You can access it now.");
        } else {
        console.log("The web is not available. It's only available from 9am to 7pm.");
        }
        next()
    }

app.use(middleware);

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/our-services', (req, res) => {
    res.render('our-services')
});

app.get('/contact-us', (req, res) => {
    res.render('contact-us')
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});