require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const expressHandlebars = require('express-handlebars');
const routes = require('./routes');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(routes);
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
