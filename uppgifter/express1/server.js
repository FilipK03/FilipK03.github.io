const express = require('express');
const server = express();
server.use(express.static('public'))
server.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('Connected to webb')
    }
});





/*
server.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html');
})

server.get('/users', (req, res)=>{
    res.send('users');
})


*/