const express = require('express');
const cors = require('cors');
const groceryRouter = require('./routes/grocery');
const connectDatabase = require('./config/connectDatabase');

const app = express();

app.use(express.json());
app.use(cors());

function logRequest(req, res, next) {
    next();
    console.log(new Date(), req.method, req.url);
}

app.use(logRequest);

app.get('/hello', (req, res, next) => {
    res.send('Hello there');
    next();
});

app.use('/', groceryRouter);

const port = process.argv[2] || 3000;

connectDatabase().then(() => {
    app.listen(port, () => {
        console.log(
            `Server listening to http requests on http://localhost:${port}`
        );
    });
});
