import React from 'react'

const PersonCard = (props) => {
  console.log(props)
  return (
    <div>
      <div className = "w-25 mx-auto">
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age} </p>
        <p>Hair Color: {props.hairColor}</p>
        <hr/>
        {props.children}
        <hr/>
      </div>
    </div>
  )
}

export default PersonCard
