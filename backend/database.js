const mongoose=require('mongoose');



//const {MONGODB_URI } = require('../.env')
//process.env.MONGODB_URI 

//console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB Conectado'))
    .catch(err => console.log(err)); 