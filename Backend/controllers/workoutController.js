const workouts=require('../models/workoutsModel')
const mongoose=require('mongoose')
//get single workout
const getSingleWorkout=async(req,res)=>{
const {id}=req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"Id was not found in the database"})
}
else{
const workout=await workouts.findById(id)
    
    if(!workout){
        return res.status(404).json({error:"no such workout"})
    }
    else{
        res.status(200).json(workout)
    }
}
}

//get allworkouts
const getWorkouts=async(req,res)=>{
    const workout=await workouts.find({}).sort({createdAt:-1})
  res.status(200).json(workout)
}


//deleting data
const deleteData=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Couldnt find the specified Id"})
    }
    else{
     const workout=await workouts.findOneAndDelete({_id:id})
     if(!workout){
        return res.status(400).json({error:"no such workout"})
     }else{
        return res.status(200).json(workout)
     }   
    }
}

//creating data
const createWorkout=async(req,res)=>{
    const {title,load,reps}=req.body
    try{
 const workout=await workouts.create({title,load,reps})
 res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//updating data

const updateData=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such id was found"})
    }
    else{
        const workout=await workouts.findOneAndUpdate({_id:id},{
          ...req.body
      })
      if(!workout){
        return res.status(400).json({error:"no such id was found"})
      }
      else{
        res.status(200).json(workout)
      }
    }
}
module.exports={
createWorkout,getSingleWorkout,getWorkouts,deleteData,updateData
} 