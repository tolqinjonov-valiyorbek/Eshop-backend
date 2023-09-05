const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const dbConnect = require('./config/dbConnect.js');
const { notFound } = require('./middlewares/errorHandler.js');
const app = express()
require('dotenv').config();


const authRouter = require('./routes/authRoute'); 
const productRouter = require("./routes/productRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const colorRouter = require('./routes/colorRoute');
const uploadRouter = require("./routes/uploadRoute.js");
const cors = require("cors");


const PORT = 5000;
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());

const morgan = require("morgan");
app.use(cors());

app.use('/api/user', authRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/upload", uploadRouter);


app.use(morgan("dev"));
app.use(notFound);
app.listen(PORT, () => {
    console.log(`server is running at PORT : ${PORT}`);
})