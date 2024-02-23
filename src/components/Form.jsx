import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import ContactContext from '../context/ContactContext'

const Form = () => {
  const{darkTheme} = useContext(ThemeContext)
  const {dispatch} = useContext(ContactContext)

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [relation, setRelation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

dispatch({
  type: "SAVE_CONTACT",
  payload: {id: crypto.randomUUID(),
  name,
  number,
  relation}
})

setName("")
setNumber("")
setRelation("")
    
  }



  return (
<div className={darkTheme ? "conatiner bg-dark text-light" : "conatiner bg-light text-dark"}>
<form className="text-dark my-3"
  onSubmit={handleSubmit}
  >
    <input type="text" placeholder='Enter Name' className="form-control rounded-0 my-2" 
    value={name}
    onChange={(e) => setName(e.target.value)}/>
    <input type="phone" placeholder='Enter Number' className="form-control rounded-0 my-2" 
    value={number}
    onChange={(e) => setNumber(e.target.value)}/>
<select className="form-control my-2" 
value={relation}
onChange={(e) => setRelation(e.target.value)}>
<option value="family">Family</option>
<option value="family">Friends</option>
<option value="family">Colleagues</option>
<option value="family">Others</option>
</select>

<button className="btn btn-primary w-50">Save</button>
  </form>
</div>
  )
}

export default Form
