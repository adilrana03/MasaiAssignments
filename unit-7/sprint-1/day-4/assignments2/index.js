const express = require('express');

const morgan = require('morgan');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(
    morgan(
        `  self--> :method  :status  :res[content-length]  :response-time  :remote-user [:date[clf]]   HTTP/:http-version  :url `
    )
);
app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.send('Server is working fine');
});
const port = 5000;
app.listen(port);
console.log(`app listening on port ${port}`);
