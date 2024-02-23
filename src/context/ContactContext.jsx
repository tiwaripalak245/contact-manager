import { createContext, useReducer, useState } from "react";
import ContactReducer from "./ContactReducer";

const ContactContext = createContext();

export const ContactProvider = ({children}) => {

    const initialState = {
        contacts : [{id: 1, name: "Dad", number: "9424022348", relation: "family" },
        {id: 2, name: "Mom", number: "9856483908", relation: "family" },
        {id: 3, name: "sister", number: "9824022348", relation: "family" }]
    }


    const [state, dispatch] = useReducer(ContactReducer, initialState)
    return <ContactContext.Provider value={{contacts: state.contacts, dispatch}}>
        {children}
    </ContactContext.Provider>
}

export default ContactContext;