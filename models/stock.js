const mongoose = require('mongoose');

//creating a schema for stock
const stockSchema = new mongoose.Schema({
    item_name: {
        type:String,
        required:true
    },
    item_detail: {
        type:String,
        required:true
    },
    unit_price: {
        type:String,
        required:true
    },
    quantity: {
        type:String,
        required:true
    },
    manufacturer_name: {
        type:String,
        required:true
    },
    supplier_name: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    purchase_date: {
        type: Date,
        required:true,

    },
    expiry_date: {
        type: Date,
        required:true,

    }
});


//now we need to create a collection for stock
const Stock = new mongoose.model('Stock',stockSchema);
module.exports = Stock;