const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debe ingresar un título de receta'],
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar una descripción de la receta'],
        minlength: [10, 'No puede tener menos de 10 caracteres']
    },
    price: {
        type: Number,
        required: [true, 'El producto debe tener un precio'],
        min: [1, 'No puede tener un valor inferior a $1']
    }

}, { timestamps: true });

const Products = model('Products', productSchema);

module.exports = Products;