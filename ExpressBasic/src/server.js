//const express = require('express');
// using ES6 using babel
import express from 'express';

let app = express();

app.get('/', (req, res) => {
    res.send('hello espress');
});

app.listen(process.env.PORT || 3000);

