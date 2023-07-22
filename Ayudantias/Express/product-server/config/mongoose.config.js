const { connect } = require('mongoose');

module.exports.connectMongo = () => {
    connect('mongodb://mernuser:P4sSw0rD@db:27017/mernDatabase?authSource=admin&directConnection=true')
        .then(() => console.log('We are making some connections with the database!!!'))
        .catch((err) => console.log('Ohhhh, something went wrong!', "\n", err));
} 