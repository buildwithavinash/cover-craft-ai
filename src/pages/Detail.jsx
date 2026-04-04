import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    
    const data = JSON.parse(localStorage.getItem("results")) || [];
    const item = data.find((d)=>d.id === Number(id));

    if(!item) return <p>Not found!</p>
  return (
    <div>
        <h2>Saved Result</h2>
        <p>{item.text}</p>
    </div>
  )
}

export default Detail