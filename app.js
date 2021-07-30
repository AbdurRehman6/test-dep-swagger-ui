const express = require('express');
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json")

app.use(express.json());

app.get('/', (req,res) => {
    
    res.send('swagger ui');
})

var options = {
    swaggerOptions: {
      authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ind3dy5tYWxpY2tyZWhtYW5AZ21haWwuY29tIiwidXNlcklkIjoiNjBmZTc2NmY0ODhmOTEyMzg0ODQ0ODFiIiwiaWF0IjoxNjI3NTM5MzE4fQ.wOXu9PrGrgMDN4OvJg6vOccO1U7SbTYCrGjn3C3Cn1A"} }
    }
  };

  app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument,options));






const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));