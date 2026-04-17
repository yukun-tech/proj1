import express from 'express';
import connectDB from './config/db.js';
import userRouter from './routes/user.js';

const Port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use('/api/users', userRouter);
app.get('/', (req, res) => {
    res.json({ message: "Server is healthy" })
})

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

