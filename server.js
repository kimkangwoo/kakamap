const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', (req, res) => {
    res.render('index');
});
app.listen(port, () => {
    console.log(`Server is running on port : http://localhost:${port}`);
});