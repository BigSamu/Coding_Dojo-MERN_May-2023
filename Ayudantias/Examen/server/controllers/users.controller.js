const mongoose = require("mongoose")
const UserModel = require("../models/users.models")

module.exports = {
    createUser: (req, res) => {
        let data = req.body;
        UserModel.create(data)
            .then(() => {
                res.json({succes: true})
            })
            .catch((error) => {
                if (error instanceof mongoose.Error.ValidationError){
                    let keys = Object.keys(error.errors);
                    let error_dict = {};
                    keys.map((key) => {
                        error_dict[key] = error.errors[key].message
                    });
                    res.status(500).json({error: error_dict})
                } else {
                    res.status(500).json({error: error})
                }
            });
    },
    loginUser : (req, res) => {
        let data = req.body;
        if (Object.keys(data).includes("password"))
            UserModel.findOne(data)
                .then((user) => {
                    if (user)
                        res.json({succes: true})
                    else
                        res.status(404).json({error:"Combinación email y clave no existen"});
                })
                .catch((error) => {
                    res.status(500).json({error});
                });
        else
            res.status(500).json({error:"No mando password"});
    }
}