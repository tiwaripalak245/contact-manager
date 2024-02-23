import React, { useContext, useReducer } from 'react'
import ContactContext from '../context/ContactContext'
import ThemeContext from '../context/ThemeContext'

const ListItem = ({contact}) => {

    const {darkTheme} = useContext(ThemeContext);
    const{dispatch} = useContext(ContactContext)

    const handleDelete = (id) => {
dispatch({
    type: "DELETE",
    payload: id
})
    }

  return (
   <li className= { darkTheme ? "list-group-item bg-dark text-light" : "list-group-item bg-light text-dark"}>
    <h3 className="display-6">{contact.name}</h3>
    <h3 className="display-7">{contact.number}</h3>
    <span className="badge text-bg-secondary">{contact.relation}</span>
<button className="btn btn-success btn-sm float-end">
    Call Now
</button>

<button className="btn btn-danger btn-sm float-end mx-2" onClick={() => handleDelete(contact.id)}>
   Delete
</button>
   </li>

  )
}

export default ListItem
