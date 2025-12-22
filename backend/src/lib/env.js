import dotenv from 'dotenv';
dotenv.config();

export const ENV ={
    Port: process.env.PORT || 3000,
}