import React from 'react';
import { Formik, Field, Form } from 'formik';

import css from './contact.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { allContacts } from 'redux/contacts/selectors-contacts';
import { addNumber } from 'redux/contacts/operationsContacts';

   


export const ContactForm = () => {

  const contactsSecond = useSelector(allContacts)
  const dispatch = useDispatch()

  const initialValues ={ 
    name: '',
    number: '',
  }

  const handleSubmit = ({name, number}, { resetForm }) => {


    const checkContact = contactsSecond.map(contact => contact.name).includes(name)
    if (checkContact) {
      return alert(`${name} is alredy in contacts.`);
    }
    const action = addNumber({name, number})
    dispatch(action)
    resetForm();
  };





  return (  
    
    <Formik  
    initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form_contact}>
        <label>
          
        <Field  className={css.input__form} id="firstName"  type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required 
          placeholder='Name'/>
        </label>

        <label>
        <Field  className={css.input__form} id="lastName"  type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required  
          placeholder='Number'/>
        </label>
        <button className={css.submit__btn} type="submit">S U B M I T</button>
      </Form>
    </Formik>
  )
}

