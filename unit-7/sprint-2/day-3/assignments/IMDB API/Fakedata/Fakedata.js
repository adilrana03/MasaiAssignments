const faker = require('@faker-js/faker');
const connection = require('../Config/index');
const crypto = require('crypto');
const { Movies } = require('../Model/Schema');

const genre = ['comedy', 'drama', 'action', 'thriller'];
const FakeData = (count) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        const movie = {
            title: faker.faker.name.fullName(),
            year: crypto.randomInt(2010, 2023),
            rating: crypto.randomInt(1, 6),
            genre: genre[crypto.randomInt(0, 4)],
        };
        arr.push(movie);
    }
    Movies.insertMany(arr);
};

connection().then(() => {
    return FakeData(50);
});
