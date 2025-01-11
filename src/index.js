const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const sass = require('sass');
const morgan = require('morgan')
const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

/**
 * :method :url :status :response-time ms - :res[content-length]
 */
app.use(morgan('dev'));

// Template engine
app.engine('.hbs', handlebars.engine({
    extname: '.hbs',
    partialsDir: path.join(__dirname, 'resources/views/partials'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})  