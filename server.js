const express = require('express');
const path = require('path');


const app = express();

const PORT = process.env.PORT || '8000';

app.use(express.static(`${__dirname}/`));

app.get("/", (req, res) => {
    res.status(200).sendfile('index.html')
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})