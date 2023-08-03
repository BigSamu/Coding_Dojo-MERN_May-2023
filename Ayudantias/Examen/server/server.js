const express = require("express");

const app = express();

app.use(express.json());

require("./config/mongo.config");

const pirateRouter = require("./routes/pirates.router");
const userRouter = require("./routes/users.router");

pirateRouter(app);
userRouter(app);

app.listen(8080, () => {
    console.log("Server started at port 8080")
});
