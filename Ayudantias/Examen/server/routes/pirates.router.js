const {authentificate} = require("../config/jwt.config");
const { getAllPirates, getOnePirate, createPirate, deletePirate, editPirate } = require("../controllers/pirates.controller");

module.exports = (app) => {
    app.get('/pirates/', authentificate, getAllPirates);
    app.get('/pirates/:id/', authentificate, getOnePirate);
    app.post('/pirates/', authentificate, createPirate);
    app.delete('/pirates/:id/', authentificate, deletePirate);
    app.patch('/pirates/:id/', authentificate, editPirate);
}