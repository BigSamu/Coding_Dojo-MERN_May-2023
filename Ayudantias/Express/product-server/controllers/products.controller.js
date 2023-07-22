const Products = require("../model/products.model")


module.exports.getAllProducts = async (req, res) => {
    let products = await Products.find({});
    res.send({result: products});
}

module.exports.getProduct = async (req, res) => {
    let product = await Products.findOne({_id: req.params.id});
    res.send({result: product});
}

module.exports.createProduct = async (req, res) => {
    try {
        let newProduct = await new Products(req.body).save();
        res.send({ok: true});
    } catch (error){
        console.error(error)
        res.status(500).send({error});
    } 
    
}

module.exports.editProduct = async (req, res) => {
    let editedProduct = await Products.updateOne({_id: req.params.id}, req.body);
    res.send({ok: true});
}

module.exports.deleteProduct = async (req, res) => {
    let deltedProduct = await Products.deleteOne({_id: req.params.id});
    res.send({ok: true});
}