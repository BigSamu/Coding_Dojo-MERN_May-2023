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
            return res.json({
                error: error.toString()
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