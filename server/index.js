//! Imports at the top
const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./util/database')

//! Middleware
server.use(express.json())
server.use(cors())

//! Endpoints


db.sync()
//! Listen
server.listen(4000, () => {console.log('Server is running on Port 4000')})