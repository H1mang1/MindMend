// import express from 'express';
// import bodyParser from 'body-parser';
// const express = require('express');
// const bodyParser = require('body-parser');

// const router =express.Router();
// router.use(bodyParser.json());

// // import { signup, signin } from '../controller/authController';
// const { signup, signin } = require('../controller/authController');


// router.route('/').post((req, res) => {
//     res
//     .status(200)
//     .send(res.data);
// });

// // router.route("/signup").post((req,res)=>{
// //     res.status(200).send('Signed Up Successfully');
    
// // })
// router.post('/signup', signup);
// router.post('/api/signin', signin);
// // router.route("/api/signin").post((req,res)=>{
// //     res.status(200).send('Logged in Successfully');
// // })
// router.route("/chat").post((req,res)=>{
//     res.status(200).send('Chat');
// })

// // export default router;

// module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const { signup, signin } = require('../controller/authController');

const router = express.Router();
router.use(bodyParser.json());

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/chat', (req, res) => {
  res.status(200).send('Chat');
});

module.exports = router;
