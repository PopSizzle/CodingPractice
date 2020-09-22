const express = require('express');
PORT = 8000;

const app = express();

app.use(express.static('public'));

const routes = require('routes');

app.use(routes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`)); 
