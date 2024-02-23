import React, { useContext } from 'react'
import ListItem from './ListItem'
import ContactContext from '../context/ContactContext'

const ListGroup = () => {

    const{contacts} = useContext(ContactContext)

  return (
   <ul className="list-group">
  {
    contacts.map(contact => <ListItem key={contact.id} contact={contact}/>)
  }
   </ul>
  )
}

export default ListGroup
