const express = require('express');
const app = express();
const path = require('path');

app.get('/login', (req, res) => {
    app.use(express.static(path.join(__dirname, 'public')));
    res.render("log.ejs");
});

app.listen(3000);