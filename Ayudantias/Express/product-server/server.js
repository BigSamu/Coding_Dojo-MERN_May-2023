const express =  require("express");
// const {connectMongo} = require("./config/mongoose.config");
const { productRouter } = require("./router/products.router");
// const morgan = require('morgan');
// const cors = require('cors');
// const fs = require('fs');
// var path = require('path');

// connectMongo();

app = express();
// app.use(cors());
app.use(express.json());
// create a write stream (in append mode)
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))

app.use('/users', productRouter);


app.listen(3000, ()=> {
    console.log("It's alive!");
});
