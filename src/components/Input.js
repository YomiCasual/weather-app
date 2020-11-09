import React from 'react'

const Input = ({handleInput, fetchItem, state}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
   
    fetchItem()
  }

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
    <input
     className="input-field"
     placeholder="Enter the city..."
     name="cityName"
     onChange= {handleInput}
     value={state.cityName}
     />
     <button className="btn btn-primary">Submit</button>
     </form>
    </div>
  )
}

export default Input