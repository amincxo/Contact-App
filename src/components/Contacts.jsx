import React, { useState } from 'react';

import ContactsList from './ContactsList';

function Contacts() {
    const [ contacts , setContacts ] = useState([])
    const [contact , setContact] = useState({
        name: "",
        lastname: "" ,
        email: "" ,
        phone:"", 
    })

    const changeHandler = event=> {
        const name = event.target.name;
        const value = event.target.value;
        

        setContact(contact => ({...contact , [name] : [value]}) )
    }

    const addHandler = () => {
        setContacts( contacts => ([ ...contacts , contact]));
        setContact({
            name: "",
            lastname: "" ,
            email: "" ,
            phone:"", 
        });

    }

  return (
    <div>
        <div>
            <input type="text" name="name" placeholder='Name' value={contact.name}  onChange={changeHandler}/>
            <input type="text" name="lastname"  placeholder='Last Name' value={contact.lastname} onChange={changeHandler} />
            <input type="text" name="email"  placeholder='Email' value={contact.email} onChange={changeHandler} />
            <input type="number" name='phone' placeholder='Phone' value={contact.phone} onChange={changeHandler} />
            <button onClick={addHandler} >Add Contact</button>
        </div>
        <ContactsList contacts={contacts} />
    </div>
  )
}

export default Contacts