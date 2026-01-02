import express from 'express';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'API is up and running' });
});


const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.Port, () => {
            console.log(`Server is running on port ${ENV.Port}`); 
        });
    } catch (error) {
        console.log('Error starting server',error);
        process.exit(1);
    }
}

startServer();