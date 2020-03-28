const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
//utilizando o metodo express.json o app começa entender req e res em formato json
app.use(express.json());
app.use(routes);



app.listen(3333);