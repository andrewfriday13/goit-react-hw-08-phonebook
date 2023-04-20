import { ContactList } from "components/contact-list/ContactList"
import { ContactForm } from "components/contact/ContactForm"
import { Filter } from "components/filter/Filter"
import css from './contacts.module.css'
import { useDispatch, useSelector } from "react-redux"
import { getError, getIsLoading } from "redux/contacts/selectors-contacts"
import { useEffect } from "react"
import { getContacts } from "redux/contacts/operationsContacts"



 const Contact = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getContacts())
    }, [dispatch])

    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    
    return <div className={css.phonebook}>
    <h1>Phonebook</h1>
    <ContactForm/>
    <h2>Contacts</h2>
    <Filter/>
    {isLoading && !error && <b>Request in progress...</b>}

    <ContactList/>
    </div>
}
export default Contact