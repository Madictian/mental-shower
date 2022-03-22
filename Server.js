const express = require('express');
require('dotenv').config();
const connectDB = require('./database/connect')


const defaultRoutes = require('./routes/defaultRoute');


const app = express();
app.use(express.json());
app.use('/', defaultRoutes);

const start = async () => {
    try {
        await connectDB(process.env.DB_URL);
    
        app.listen(process.env.PORT, () => {
          console.log(`Server is running on port --> ${process.env.PORT}`);
        });
      } catch (error) {
        console.log(error);
      }
    };


start();
module.exports = app;
