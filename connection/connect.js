const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ assignment')
    .then(console.log("Login Successful"))
    .catch(console.error);
    // .finally(() => mongoose.disconnect());