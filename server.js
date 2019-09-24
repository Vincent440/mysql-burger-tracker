require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
const expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Import routes and give the server access to them.
const routes = require('./routes');
app.use(routes);
// Start our server so that it can begin listening to client requests.
//'start' server
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));