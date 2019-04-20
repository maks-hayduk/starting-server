const express = require('express');
const path = require('path');

const index = require('./routes/index');
const users = require('./routes/users');

const port = 3000;

const app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);
app.use('/api', users);

app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});