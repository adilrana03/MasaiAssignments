const fs = require('fs');

const getData = async () => {
    const data = fs.readFileSync('./todo.json', 'utf-8');
    return JSON.parse(data);
};

const updateData = async (data) => {
    const allData = JSON.stringify(data, null, 4);
    await fs.writeFile('./todo.json', allData, (err) => {
        if (err) {
            throw err;
        }
    });
};

const addData = async (user) => {
    const data = await getData();
    let maxID = -1;
    for (const person of data) {
        if (person.id > maxID) {
            maxID = person.id;
        }
    }
    const newUser = {
        ...user,
        id: parseInt(maxID) + 1,
    };
    data.push(newUser);
    await updateData(data);
    return newUser;
};

const putData = async (id, userData) => {
    const data = await getData();
    let index = -1;
    let i = 0;
    for (const person of data) {
        if (person.id == id) {
            index = i;
        }
        i++;
    }
    let obj = data[index];
    obj = {
        ...obj,
        ...userData,
    };
    data[index] = obj;
    await updateData(data);
    return obj;
};

const deleteData = async (id) => {
    const data = await getData();
    let index = -1;
    let i = 0;
    for (let person of data) {
        if (person.id == id) {
            index = i;
        }
        i++;
    }
    data.splice(index, 1);
    await updateData(data);
};

module.exports = {
    getData,
    addData,
    deleteData,
    putData,
};
