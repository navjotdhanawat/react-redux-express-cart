var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: ''
    },
    mrp: {
        type: Number,
        default: ''
    }
});

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Products',  schema);