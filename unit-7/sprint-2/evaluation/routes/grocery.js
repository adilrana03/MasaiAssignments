const express = require('express');
const {
    getAllGroceries,
    addGrocery,
    udpateGroceryById,
    deleteGroceryById,
} = require('../middlewares/grocery');
const valid = require('../middlewares/valid');

const router = express.Router();

// router.get('/groceries', async (req, res) => {
//     try {
//         const groceries = await getAllGroceries();
//         res.send({
//             data: groceries,
//         });
//     } catch (err) {
//         console.error(err.message);

//         res.status(500);

//         res.send({
//             message: 'Unexpected error',
//         });
//     }
// });

// router.post('/groceries', valid, async (req, res) => {
//     try {
//         const grocery = await addGrocery(req.body);

//         return res.send({
//             data: grocery,
//         });
//     } catch (err) {
//         console.error(err.message);

//         return res.status(500).send({
//             message: 'Unexpected error',
//         });
//     }
// });

// router.patch('/grocery/:id', async (req, res) => {
//     try {
//         const grocery = await udpateGroceryById(req.params.id, req.body);

//         return res.send({
//             data: grocery,
//         });
//     } catch (err) {
//         console.error(err);

//         if (err.message === 'grocery does not exist') {
//             return res.status(404).send({
//                 message: 'grocery does not exist',
//             });
//         }

//         return res.status(500).send({
//             message: 'Unexpected error',
//         });
//     }
// });

// router.delete('/grocery/:id', async (req, res) => {
//     try {
//         const grocery = await deleteGroceryById(req.params.id);

//         return res.send({
//             data: grocery,
//         });
//     } catch (err) {
//         console.error(err.message);

//         return res.status(500).send({
//             message: 'Unexpected error',
//         });
//     }
// });

router.get('/groceries', async (req, res) => {
    try {
        const groceries = await getAllGroceries();
        res.send({
            data: groceries,
        });
    } catch (err) {
        console.log(err.massage);
        res.status(500);
        res.send({
            data: 'Something went Wrong',
        });
    }
});

router.post('/groceries', async (req, res) => {
    try {
        const grocery = await addGrocery(req.body);
        res.send({
            data: grocery,
        });
    } catch (err) {
        console.log(err.massage);
        res.status(500);
        res.send({
            data: 'Something Went Wrong',
        });
    }
});

router.patch('/grocery/:id', async (req, res) => {
    try {
        const updatedGrocery = await udpateGroceryById(req.params.id, req.body);
        res.send({
            data: updatedGrocery,
        });
    } catch (err) {
        console.log(err.massage);
        res.status(500).send({
            data: 'Something Went Wrong',
        });
    }
});

router.delete('/grocery/:id', async (req, res) => {
    try {
        const deletedGrocery = await deleteGroceryById(req.params.id);
        res.send({
            data: deletedGrocery,
        });
    } catch (err) {
        console.log(err.massage);
        res.status(500).send({
            data: 'Something went wrong',
        });
    }
});

module.exports = router;
