import dotenv from 'dotenv';
dotenv.config({quiet: true});

export const ENV ={
    Port: process.env.PORT || 3000,
    DBURL: process.env.DBURL
}