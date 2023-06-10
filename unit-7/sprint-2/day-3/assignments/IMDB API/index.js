const express = require('express');
const connection = require('./Config/index');

const { router } = require('./Controller/Controller');

const app = express();
app.use(express.json());
app.use('/', router);
app.listen(8000, () => {
    try {
        connection();
        console.log('Server is running on port 8000');
    } catch (error) {
        console.log(error);
    }
});
