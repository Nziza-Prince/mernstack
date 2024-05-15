import React, { useEffect,useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import  Form from '../components/Form'

const Home = () => {

    const [workouts,setWorkouts]=useState(null)
    useEffect(()=>{
       const fetchWorkouts=async ()=>{
        const response = await fetch("/api/workouts")
        const json =await response.json()
if(response.ok){
setWorkouts(json)
}

       }
       fetchWorkouts()
    },[])
  return (
    <div className='Home'> 
        <div>
            {workouts && workouts.map((workout)=>(
             <WorkoutDetails key={workout.id} workout={workout}/>
            ))}
        </div>
        <Form/>
    </div>
  )
}

export default Home