const express = require('express');
const app = express();
const Joi = require('@hapi/joi');


app.use(express.json());

app.get('/', (req,res) => {
    
    res.send('swagger ui');
})










const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));