const express = require('express');
const { Movies } = require('../Model/Schema');
const router = express.Router();
router.get('/movie', async (req, res) => {
    let { title, sortby, type, page, limit } = req.query;
    limit = Number(limit);
    let skip = Number(page - 1) * limit;
    let obj = {};
    obj[sortby] = Number(type);
    try {
        let data;
        if (title) {
            data = await Movies.find({ title: { $regex: new RegExp(title) } });
        } else if (sortby) {
            data = await Movies.find().sort(obj);
        } else if (page) {
            data = await Movies.find().limit(limit).skip(skip);
        }

        return res.status(200).send(data);
    } catch (error) {
        return res.status(404).send(error);
    }
});
router.get('/movieratings', async (req, res) => {
    //console.log(req.query)
    try {
        let data = await Movies.find({ rating: req.query.rating });
        //console.log(data)
        return res.status(200).send(data);
    } catch (error) {
        return res.status(404).send(error);
    }
});
router.get('/', async (req, res) => {
    try {
        let data = await Movies.find();
        return res.status(200).send(data);
    } catch (error) {
        return res.status(400).send(error);
    }
});
router.post('/', async (req, res) => {
    try {
        let data = await Movies.create(req.body);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(404).send(error);
    }
});
router.patch('/:id', async (req, res) => {
    try {
        let data = await Movies.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(data);
    } catch (error) {
        return res.status(404).send(error);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        let data = await Movies.findByIdAndDelete(req.params.id);
        return res.status(200).send('Successfully Deleted..' + data);
    } catch (error) {
        return res.status(404).send(error);
    }
});

router.get('/:title', async (req, res) => {
    try {
        let data = await Movies.find({ title: req.params.title });
        return res.status(200).send(data);
    } catch (error) {
        return res.status(404).send(error);
    }
});

module.exports = { router };
