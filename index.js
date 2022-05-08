const express = require('express');


const app = express();

const path = require('path');

const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const { engine } = require('express-handlebars');

//use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//  API KEY pk_8a651a9cd09c4dc2a5bbefde92cccd37
//creat call AP func.
function call_api(finshedAPI) {
    request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_8a651a9cd09c4dc2a5bbefde92cccd37', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); };
        if (res.statusCode === 200) {
            finshedAPI(body);
        };

    });
};



//Sets our app to use the handlebars engine
app.engine('handlebars', engine());
//Sets handlebars configurations
app.set('view engine', 'handlebars')
app.set('views', './views');

const otherstuff = 'Hello this is other stuff...';
//set handlebar GET index routes
app.get('/', (req, res) => {
    call_api(function(doneAPI) {
        res.render('home', {
            stock: doneAPI
        });

    });
});

//set handlebar POSTindex routes
app.post('/', (req, res) => {
    call_api(function(doneAPI) {
        posted_stuff = req.body.stock_ticker;
        res.render('home', {
            stock: doneAPI,
            posted_stuff: posted_stuff
        });

    });
});
//create about page route
app.get('/about.html', (req, res) => {
    res.render('about');
});
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});