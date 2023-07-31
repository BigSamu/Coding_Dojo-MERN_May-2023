// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)

const PersonSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Se necesita el primer nombre"],
        minLength: [2, "Debe ingresar un nombre con más de 2 caracteres"],
        maxLength: [1, "Debe ingresar un nombre con menos de 1 caracteres"],
    },
    last_name: String,
    age: {
        type: Number,
        min: [0, "No pueden haber viajeros en el tiempo!!!"],
        max: [100, "El futuro es ahora, viejo"],
        validate: {
            validator: (value) => {
                return value % 2 === 0 && value % 4 === 0
            },
            message: "En este club solo se aceptan personas con edad par"
        }
    },
    male: {
        type: Boolean,
        required: [true, "Se necesita el el sexo de la persona"],
    },
}, {
    timestamps: true
});

// 3) Creating Model using Schema
const PersonModel = mongoose.model("People", PersonSchema);

// 4) Exporting Model
module.exports = PersonModel;