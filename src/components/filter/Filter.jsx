
import React from 'react';
import css from '../contact/contact.module.css'
import { searchContacts } from "redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";


export const Filter = ()=>{
  const dispatch = useDispatch()
  const searchContact = useSelector(getFilter)


  const filterContacts = event =>{
    const filter = searchContacts(event.target.value)
    dispatch(filter)
  }
 
  return(
    <label>
      <input 
      className={css.input__form}
      type="text"
       name='filter'
       value={searchContact} 
       onChange={filterContacts}/>
    </label>
  )
  
} 
