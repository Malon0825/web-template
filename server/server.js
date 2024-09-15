import express from 'express';
import userRouter from './src/api/routes/user_route.js';
import authRouter from './src/api/routes/auth_route.js';

const app = express();
const port = 5000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});