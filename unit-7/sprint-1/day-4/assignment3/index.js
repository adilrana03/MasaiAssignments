const express = require('express');

const fs = require('fs/promises');

const cors = require('cors');

const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());
app.post('/upload', upload.single('avatar'), (req, res) => {
    const ext = req.file.mimetype.split('/').pop();
    fs.rename(
        `./uploads/${req.file.filename}`,
        `./uploads/${req.file.filename}.${ext}`
    );
    res.send(`<img src="/${req.file.filename}.${ext}" width="600px"/>`);
});
app.use('/', express.static('uploads'));
const port = 5002;
app.listen(5002);
console.log(`app is running on port ${port}`);
