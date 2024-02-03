import dotenv from 'dotenv';
dotenv.config();
import connectDb from './db.js';
import express from 'express';
import cors from 'cors';

//Routes
import productRoutes from './routes/productRoutes.js';

connectDb();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);


const port = 5000;

app.get('/',(req, res) => {
    res.send('API is running...')
})

app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})