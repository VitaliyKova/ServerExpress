const express = require('express');
const app = express();
const routes = require('./api.js');
const PORT = 3000;

app.use(express.json());
app.use('/', routes);


app.listen(PORT, console.log(`сервер запущен на порту ${PORT}`));
 