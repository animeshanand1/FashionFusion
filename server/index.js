const express=require('express');
const adminRouter = require('./admin/router/router');
const userRouter=require('./user/router/routes')
const bodyParser = require('body-parser');

const cors=require('cors')
const PORT=5000;
require('./config/db');
const app=express()
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors())
app.use('/admin', adminRouter);
app.use('/user',userRouter)



app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});