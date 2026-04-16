import express from 'express';



const Port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Server is healthy" })
})

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

