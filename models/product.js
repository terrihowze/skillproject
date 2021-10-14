const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const warehouseSchema = new Schema({
    name: String,
    inventory: [productSchema]
    
})


const Warehouse = mongoose.model('Warehouse', warehouseSchema);
module.exports = Warehouse;







