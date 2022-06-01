const express = require('express');
const path = require('path');

const app = express();

//serve only the static files from dist directory
app.use(express.static(__dirname + '/dist/my-app'));

//get the index.html
app.get('/*', ((req, res) => {
    res.sendFile(path.join(__dirname + '/dist/my-app/index.html'));
}));

//starting the app
app.listen(process.env.PORT || 8080);
