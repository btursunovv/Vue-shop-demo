const express = require('express');

app = express();
app.use(express.static(__dirname + '/dist'));
const port = process.env.PORT || 3000;
app.listen(port)