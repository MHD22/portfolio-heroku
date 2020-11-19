const express = require('express');

const server = express();
server.use(express.static('./public'));
const PORT = process.env.PORT || 3000;
const obj = [{name:'mohammad ', age:23},{name:'yamen',age:31},{name:'samer',age:26},{name:'noor',age:21}];

server.get('/people',(req,res)=>{
    res.json(obj);

});
server.get('/peopletext',(req,res)=>{
    res.send(obj); // if the data are not string .. will send as JSON format .

});



server.listen(PORT, ()=>{console.log(`The server is listening on port: ${PORT}`)});



