const PeopleModel = require("../models/people.model");

module.exports = {
    getPeople: (req, res) => {
        PeopleModel.find({}).then( (people)=> {
            return res.json({
                data: people
            })
        }).catch((error) => {
            return res.json({
                error: error.toString()
            })
        })
        
    },
    cretePerson: async (req, res) => {
        PeopleModel.create(req.body)
        .then(() => {
            return res.json({
                ok: true
            })
        }).catch((error) => {
            let keys = Object.keys(error.errors);
            let error_dict = {}
            keys.map((key) => {
                error_dict[key] = error.errors[key].message
            })

            return res.json({
                error: error_dict
            })
        })
        
    },
    deletePerson: async (req, res) => {
        PeopleModel.deleteOne({_id: req.params.id})
        .then(() => {
            return res.json({ok: true})
        })
        .catch((error) => {
            return res.json({
                error: error.toString()
            })
        })
    },
}