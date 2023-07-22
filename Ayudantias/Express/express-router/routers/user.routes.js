const userController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get("/users/hola", userController.answerHola, userController.answerHola)
}