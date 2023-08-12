const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
require("dotenv").config();

const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: "GET, POST, PATCH, DELETE"
}));
app.use(express.json());
app.use(cookieParser());

require("./config/mongo.config");

const pirateRouter = require("./routes/pirates.router");
const userRouter = require("./routes/users.router");

pirateRouter(app);
userRouter(app);

app.listen(int(process.env.PORT), () => {
    console.log("Server started at port 8080")
});
