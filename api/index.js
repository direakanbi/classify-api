import express from 'express';
import cors from 'cors';
import { digitSum, isPrime } from './helper/helpers.js';
import router from './routes/routes.js';
import classifyApi from './controller/controller.js';

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get('/api/classify-api', classifyApi);

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
});