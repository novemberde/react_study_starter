import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from 'morgan';

const app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', ( _req, _res, _next) => {
    _res.render("index");
});

app.listen( port, () => {
    console.log("Server is running at "+ port);
});
