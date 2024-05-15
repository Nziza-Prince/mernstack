import React, { useState } from 'react'



const Form = () => {
    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')
    const [error,setError]=useState(null)
    const handleSubmit=async (e)=>{
// e.preventDefault()

const workout={title,load,reps}

const response=await fetch('/api/workouts',{
    method:'POST',
    body:JSON.stringify(workout),
    headers:{
        'Content-Type':'application/json'
    }
})

const json = await response.json()

if(!response){
   setError(json.error)
}
if(response){
    setError(null)
    setLoad('')
    setReps('')
    setTitle('')
    console.log("data sent successfully")
}
}

  return (
    <form className='creation' onSubmit={handleSubmit}>
        <label>Exercise</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>

        <label>Weight</label>
        <input type='number' value={load} onChange={(e)=>setLoad(e.target.value)}/>

        <label>Reps</label>
        <input type='number' value={reps} onChange={(e)=>setReps(e.target.value)}/>

        <button type='submit'>Add</button>
    </form>
  )
}

export default Form