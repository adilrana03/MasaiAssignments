// const Grocery = require('../models/models');

// async function getAllGroceries() {
//     const groceries = await Grocery.find();
//     return groceries;
// }

// async function addGrocery(data) {
//     const grocery = await Grocery.create({
//         ...data,
//     });

//     return grocery;
// }

// async function udpateGroceryById(id, data) {
//     await Grocery.findByIdAndUpdate(id, data);

//     const updatedGrocery = await Grocery.findById(id);

//     return updatedGrocery;
// }

// async function deleteGroceryById(id) {
//     const deletedGrocery = await Grocery.findByIdAndDelete(id);

//     return deletedGrocery;
// }

const Grocery = require('../models/models');

const getAllGroceries = async () => {
    const allGroceries = await Grocery.find();
    return allGroceries;
};

const addGrocery = async (data) => {
    const addedGrocery = await Grocery.create({
        ...data,
    });
    return addedGrocery;
};

const udpateGroceryById = async (id, data) => {
    await GROCERY.findByIdAndUpdate(id, data);

    const updatedGrocery = await Grocery.findById(id);
    return updatedGrocery;
};
const deleteGroceryById = async (id) => {
    const deletedGrocery = Grocery.findByIdAndDelete(id);
    return deletedGrocery;
};
module.exports = {
    getAllGroceries,
    addGrocery,
    udpateGroceryById,
    deleteGroceryById,
};
