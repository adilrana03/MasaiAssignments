const express = require('express');
const fs = require('fs/promises');
const app = express();

app.get('/', async (req, res) => {
    try {
        return res.send('<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM </h1>');
    } catch (err) {
        console.error(err.massage);
        throw err;
    }
});

app.get('/writeinfile', async (req, res) => {
    try {
        fs.writeFile(
            './employee.txt',
            `Employee names are as follows: \n`,
            (err) => {
                if (err) {
                    throw err;
                }
                console.log('Succesfully written');
            }
        );
        res.send(`<h1>Data has been written in the file</h1>`);
    } catch (err) {
        console.log(err);
        res.status(404).send('Unexpected error');
    }
});
///////////////////////////////

const names = ['Aman', 'Albert', 'Varun', 'Rajat', 'Nrupul'];
app.get('/enternames', async (req, res) => {
    try {
        await fs.writeFile('employee.txt', names.join('\n'), (err) => {
            if (err) throw err;
            console.log('Succesfully written');
        });
        res.send('<h1>All the names has been entered in the file</h1>');
    } catch (err) {
        console.log(err);
        res.status(404).send('Unexpected error');
    }
});

//////////////////////////////////////////////////////////////////

const dns = require('dns');
const website = process.argv[2];

app.get('/address', (req, res) => {
    try {
        dns.lookup(website, (err, address) => {
            if (err) throw err;
            res.send(`<h1>The IP Address is ${address}</h1>}`);
        });
    } catch (err) {
        console.log(err);
        res.status(404).send('Unexpected error');
    }
});

app.get('/delete', async (req, res) => {
    try {
        await fs.unlink('employee.txt', (err) => {
            if (err) {
                res.status(500).send({ error: 'Error deleting file' });
            }
            res.send('File has been deleted');
        });
        return res.send('<h1>File has been deleted</h1>');
    } catch {
        res.status(500).send({ error: 'Error deleting file' });
    }
});

const cowsay = require('cowsay');
app.get('/alldetails', async (req, res) => {
    const data = await fs.readFile('employee.txt', 'utf8');
    const cow = cowsay.say({
        text: data,
        e: 'oO',
        T: 'U ',
    });
    return res.send(`<pre>${cow}</pre>`);
});

const port = 5000;
app.listen(port, () => {
    console.log(`App is listening to localhost ${port}`);
});
