const express = require("express")
const {getPeople, cretePerson, deletePerson} = require("../controllers/people.controller")


module.exports = (app) => {
    app.get("/people/", getPeople);  // Listar todas las personas
    app.post("/people/", cretePerson); // Crear persona
    app.delete("/people/:id", deletePerson); //Eliminar persona
}