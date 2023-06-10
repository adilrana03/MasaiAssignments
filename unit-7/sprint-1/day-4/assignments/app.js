const express = require('express');
const { getData, addData, putData, deleteData } = require('./index.js');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const data = await getData();
        res.send(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({
            message: 'Unexpected Error',
        });
    }
});

app.post('/', async (req, res) => {
    try {
        const user = req.body;
        const data = await addData(user);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'Unexpected Error',
        });
    }
});

app.patch('/:id', async (req, res) => {
    try {
        const data = await putData(req.params.id, req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'Unexpected Error',
        });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        await deleteData(req.params.id);
        res.send('Succesfully Done');
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'ERROR',
        });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`app is running on port http://${port}`);
});
