const express=require('express');
const app=express();
const cors=require('cors');
const routes=require('./routes/route');
const connectToDb = require('./database/connect');

const PORT=9000;

app.use(cors());
app.use(express.json());
app.use('',routes);
connectToDb();

app.listen(9000,()=>{
    console.log(`server is running on ${PORT}`)
})