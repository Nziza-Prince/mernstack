import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div className='workout-details'>
     <h4>
        {workout.title}</h4>
     <p><strong>Load (lbs):</strong>{workout.load}</p>
     <p><strong>Reps :</strong>{workout.load}</p>
     <p><strong>Load (lbs):</strong>{workout.load}</p>
     <p>{workout.createDate}</p>
    </div>
  )
}

export default WorkoutDetails