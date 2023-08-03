const {createUser,loginUser} = require("../controllers/users.controller")

module.exports = (app) => {
    app.post("/users/register/", createUser);
    app.post("/users/login/", loginUser);
}