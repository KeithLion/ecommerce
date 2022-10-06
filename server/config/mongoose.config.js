const mongoose = require('mongoose');

const dbName = 'rocksAndCrafts';
mongoose.connect(`mongodb://localhost/${dbName}` , {
    useNewUrlParser:true,
    useUnifiesTopology:true,
})
    .then(()=>console.log(`Connected to ${dbName} database`))
    .catch((err)=> console.log(`Something broke somewhere, fix it`, err))