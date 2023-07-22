var express = require('express');
var app = express();

const useRoutes = require('./routers/user.routes');
useRoutes(app)

app.listen(8080, () => {
    console.log("Nuestro primer servidor está funcionando");
})
