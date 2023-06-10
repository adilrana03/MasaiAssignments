const express = require('express');
const cors = require('cors');
const app = express();
const connectDatabase = require('./Database/db');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const { register, login } = require('./Middlewares/auth.controller');

app.use(express.json());
app.use(cors());

// app.use(postRouter);
// app.use(userRouter);
app.post('/register', register);
app.post('/login', login);

const port = 5000;
connectDatabase().then(() => {
	app.listen(port, () => {
		console.log(`Server listening to http requests on http://localhost:${port}`);
	});
});
