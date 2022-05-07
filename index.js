const express = require('express');


const app = express();

const path = require('path');
const PORT = process.env.PORT || 5000;

const { engine } = require('express-handlebars');


//Sets our app to use the handlebars engine
app.engine('handlebars', engine());
//Sets handlebars configurations
app.set('view engine', 'handlebars')
app.set('views', './views');

const otherstuff = 'Hello this is other stuff...';
//set handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff: otherstuff
    });
});

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});