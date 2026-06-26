import React from 'react'
import { useState } from 'react'

const StudentCard = (props) => {
  const [likes, setLikes] = useState(0)

  function increaseLike() {
    setLikes(likes + 1)
  }

  return (
    <div className='card'>
      <div className='card-info'>
        <h2>{props.name}</h2>
        <p>Course: {props.course}</p>
      </div>

      <div className='card-likes'>
        <span className='likes-count'>Likes: {likes}</span>
        <button onClick={increaseLike} className='like-button'>Like</button>
      </div>
    </div>
  )
}

export default StudentCard
