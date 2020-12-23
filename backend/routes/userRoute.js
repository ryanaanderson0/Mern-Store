// const router = require('express').Router();
// let User = require('../models/user.model');

// //Router for User "Get" request
// router.route('/').get((req, res) => {
//     User.find()
//         .then(user => res.json(user))
//         .catch(err => res.status(400).json('Error: ' + err));

// });

// //Router for User "Post" request
// router.route('/add').post((req, res) => {
//     //Assign username to post request constant
//     const username = req.body.username;

//     //initializing new User
//     const newUser = new User({username});

//     //Save new user
//     newUser.save()
//         .then(() => res.json('User Added'))
//         .catch(err => res.status(400).json('Error: ' + err));
        
// })

// module.exports = router;