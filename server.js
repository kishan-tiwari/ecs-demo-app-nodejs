const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Define Port 
const PORT = 4001;

//Create app 
const app = express();

app.get('/api/v1/hello', (req, res)=>{
  res.status(200).json({
    success: true,
    message : 'Hello From APP '
  })
});


app.listen(PORT, ()=>{
  console.log(`Server is running ${PORT}`);
})
