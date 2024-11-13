const express = require('express');
const app = express();
const PORT = 3000;
const DataRouter = require('./DataRouter');

app.use(express.json());
app.use('/api/v1', DataRouter);
app.listen(PORT , () => {
    console.log(`Sever Running at ${PORT}`)
});