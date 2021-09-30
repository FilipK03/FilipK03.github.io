const express = require('express');
const { json } = require('express/lib/response');
const server = express();
server.use(express.static('public'))
server.use(express.urlencoded())




server.post('/sendData', (req, res)=>{
    let data = req.body;
    let user = JSON.stringify(data);
console.log(data);


const fs = require('fs');


fs.appendFile('File.json', user, function (err) {
    if (err) throw err;
    console.log('Sparad');
  });
})






  

server.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('Connected to webb')
    }
});