const express=require('express');
const adminRouter = require('./admin/router/router');
const PORT=5000;
require('./config/db');
const app=express()

app.use('/admin', adminRouter);


app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});