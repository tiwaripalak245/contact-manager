import React from 'react'
import Navbar from './components/Navbar'
import ListGroup from './components/ListGroup'
import Form from './components/Form'
import { ThemeProvider } from './context/ThemeContext'
import { ContactProvider } from './context/ContactContext'

const App = () => {

  return (
    <ThemeProvider>
   <ContactProvider>
   <Navbar/> 
     <div className="container p-4">
      <Form/>
     <ListGroup/>
     </div>
   </ContactProvider>
    </ThemeProvider>
  )
}

export default App
