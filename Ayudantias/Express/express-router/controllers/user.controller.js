module.exports = {
    answerHola: (req, res, next) => {
        res.json({
            usuario: {name: "pedrito"},
            company: company()
        }) 
    },
}

