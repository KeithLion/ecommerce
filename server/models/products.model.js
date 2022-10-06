const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema =({
name: {type: string},
email: {type: email},
password: {type: password}
}, {timestamps: true});
module.exports = mongoose.model('products', shopSchema)