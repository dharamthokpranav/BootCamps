const express = require('express');
const {getBootcamp,getBootcamps,updateBootcamps,deleteBootcamps,createBootcamps}=require('../controllers/bootcamps')
// const bootcampsController=require('../controllers/bootcamps')
const router = express.Router();

router.route('/')
.get(getBootcamps)
.post(createBootcamps);

router.route('/:id')
.get(getBootcamp)
.put(updateBootcamps)
.delete(deleteBootcamps);

// router.get('/', (req, res) => {
//     bootcampsController.getBootcamps(req,res);
// })

// router.get('/:id', (req, res) => {
//     bootcampsController.getBootcamp();
// })


// router.post('/', (req, res) => {
//     bootcampsController.createBootcamps();
// })

// router.put('/:id', (req, res) => {
//     bootcampsController.updateBootcamps();
// })

// router.delete('/:id', (req, res) => {
//     bootcampsController.deleteBootcamps();
// })

module.exports=router;
