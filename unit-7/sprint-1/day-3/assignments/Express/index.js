// const express = require('express');
// const fs = require('fs/promises');
// const app = express();
// app.use(express.json());
// // app.use(express.text());
// const port = 3000;

// app.get('/', (req, res, next) => {
//     return res.send({
//         meseage: 'Hello World',
//     });
// });

// app.get('/file/:fileName', async (req, res) => {
//     try {
//         const data = await fs.readFile(`./static/${req.params.fileName}`);
//         res.send(data.toString());
//     } catch (err) {
//         const data = await fs.readFile('.static/404.html', {
//             encoding: 'utf-8',
//         });
//         console.error(err.message);
//         return res.status(404).send(data.toString());
//     }
// });

// app.post('/file/:fileName', async (req, res) => {
//     try {
//         const fileName = req.params.fileName;
//         const encoding = req.query.encoding || 'utf-8';
//         const text = req.body.content;
//         console.log(text);
//         const file = fs.writeFile(`./${fileName}`, text, {
//             encoding,
//         });

//         const contentType = req.headers['content-type'] || 'text/plain';
//         if (contentType == 'application/json') {
//             return res.send({
//                 message: 'done',
//             });
//         }

//         return res.send('Ok Done');
//     } catch (err) {
//         console.log(err.message);
//         return res.send('Unexpected Issue');
//     }
// });

// app.listen(port, () => {
//     console.log(
//         `Server listeining to http request on http://localhost:${port}`
//     );
// });

// import { Express } from 'express';
const express = require('express');
const fs = require('fs/promises');

const app = express();
app.use(express.json());
// // app.use(express.text());
const port = 3000;

app.get('/', (req, res, next) => {
    return res.send({
        message: 'hello world',
    });
});

app.listen(port, () => {
    console.log(`local host is running on port ${port}`);
});

app.get('/file/:fileName', async (req, res, next) => {
    try {
        const fileName = req.params.fileName;
        const data = await fs.readFile(`./static/${fileName}`);
        res.send(data.toString());
    } catch (err) {
        console.log(err.message);
        const data = await fs.readFile(`./static/404.html`, {
            encoding: 'utf-8',
        });
        return res.status(404).send(data);
    }
});

app.post('/file/:fileName', async (req, res, next) => {
    try {
        const fileName = req.params.fileName;
        const text = req.body.content;
        const encoding = req.query.encoding || 'utf-8';
        console.log(text);
        fs.writeFile(`./static/${fileName}`, text, { encoding });
        const contentType = req.headers['content-type'] || 'text/plain';
        if (contentType === 'application/json') {
            return res.send({
                message: 'done',
            });
        }
        return res.send('done');
    } catch (err) {
        return res.send('Unexpected error');
        console.log(err.message);
    }
});
