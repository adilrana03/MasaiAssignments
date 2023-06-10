const valid = (req, res, next) => {
    const { name, description, category, price, image, quantity, rating } =
        req.body;
    if (
        name &&
        description &&
        category &&
        price &&
        image &&
        quantity &&
        rating
    ) {
        next();
    } else {
        res.status(505).send('All the fields are not there');
    }
};

module.exports = valid;
