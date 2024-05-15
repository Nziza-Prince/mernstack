const express =require('express')
const workouts=require('../models/workoutsModel')
const {createWorkout,getSingleWorkout,getWorkouts,deleteData,updateData}=require("../controllers/workoutController")

const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id',getSingleWorkout)

router.post('/',createWorkout)

router.patch('/:id',updateData)

router.delete('/:id',deleteData)

module.exports=router