const express = require('express'); 
const {postdata, getData} = require('./controller');

const DataRouter = express.Router()
DataRouter.post('/', postdata)
DataRouter.get('/get', getData)


module.exports = DataRouter ;