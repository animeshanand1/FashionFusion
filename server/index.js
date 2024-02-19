const express=require('express');
const adminRouter = require('./admin/router/router');
const PORT=5000;
require('./config/db');
const app=express()
const router = express.Router();
app.use(router);

app.use('/admin', adminRouter);


app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});