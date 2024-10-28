const dotenv = require('dotenv');
dotenv.config()

const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');


const router = require('./server/routes/router');

const { Client } = require('pg');
const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

client.connect();

const getVerses = require('./server/database/pool'); 

const homepageMiddleware = require('./server/middleware/homepageMiddleware');

app.get('/', async (req, res) => {
    try {
        const verses = await getVerses(); 
        res.render('homepage', { 
            verses
        });
    } catch (err) {
        console.error('Erreur lors de la récupération des versets:', err);
        res.status(500).send('Erreur interne du serveur');
    }
});

const PORT = process.env.PORT;

app.use(express.static(__dirname))
console.log(__dirname);

app.set('view engine', 'ejs');
app.set('views', 'client/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'client/public')));


app.use(session({
    secret: 'votre_secret_key',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000, // Durée en millisecondes, ici définie à 1 heure
    },
}));

app.use(router);


app.listen(PORT, () => {
    console.log(`ça marche ! Launched on http://localhost:${PORT}`)
});