const express = require('express');
const userRouter = express.Router();

const { register, login } = require('../Middlewares/user');

userRouter.post('/users/register', register);
userRouter.post('/users/login', login);

module.exports = userRouter;
