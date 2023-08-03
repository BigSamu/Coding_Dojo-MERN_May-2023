const { getAllPirates, getOnePirate, createPirate, deletePirate, editPirate } = require("../controllers/pirates.controller");

module.exports = (app) => {
    app.get('/pirates/', getAllPirates);
    app.get('/pirates/:id/', getOnePirate);
    app.post('/pirates/', createPirate);
    app.delete('/pirates/:id/', deletePirate);
    app.patch('/pirates/:id/', editPirate);
}