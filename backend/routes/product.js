const router = require('express').Router();
let Product = require('../models/product.model');

//Router for "Get" request
router.route('/').get((req, res) => {
    Product.find()
        .then(product => res.json(product))
        .cath(err => res.status(400).json('Error: ' + err));
})

// Router for "Post" request 
router.route('/add').post((req, res) => {
    //assign the post request to variables for each product data item
    const product_name = req.body.product_name;
    const product_year = Number(req.body.product_year);
    const product_type = req.body.product_type;
    const product_description = req.body.product_description;
    const product_notes = req.body.product_notes;

    //initialize new Product variable 
    const newProduct = new Product({
        product_name,
        product_year,
        product_type,
        product_description,
        product_notes,
    });

    //Save New product with promise
    // ---> Add error handling?
    newProduct.save()
        .then(() => res.json('Product Added'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;