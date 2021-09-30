const { request } = require('express')
const fs = require('fs')
const express = require('express')
const { dirname } = require('path')
const server = express()
server.use(express.static('public'))
server.use(express.urlencoded())



server.post('/saveData', (req, res)=>{
let data = req.body
let stringify = JSON.stringify(data)
fs.writeFileSync('users.json', stringify)
res.sendFile(__dirname + '/public/' + 'index.html')
})

server.listen(3000)
