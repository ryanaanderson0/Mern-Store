const mongoose = requrie('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {type: String, require: true},
    product_year: {type: Number, require: true},
    product_type: {type: String, require: true},
    product_description: {type: String, require: true},
    product_notes: {type: String, require: true},
},  {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;