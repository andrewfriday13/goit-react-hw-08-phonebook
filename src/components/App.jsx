import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './contact/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import css from './app.module.css'


import { allContacts, getFilter,getIsLoading , getError} from 'redux/selectors';

import { searchContacts } from 'redux/filterSlice';
import { addNumber, getContacts, removeNumber } from 'redux/operations';
import { useEffect } from 'react';





export  const App = () => {

  const contactsSecond = useSelector(allContacts)
  const searchContact = useSelector(getFilter)
  const dispatch = useDispatch()  
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);


  useEffect(()=>{

dispatch(getContacts())
  },[dispatch])

  const addContacts = (name, number) => {
    const checkContact = contactsSecond.map(contact => contact.name).includes(name)
    if (checkContact) {
      return alert(`${name} is alredy in contacts.`);
    }
    const action = addNumber({name, number})
    dispatch(action)
  };

   const filterContacts = event =>{
    const filter = searchContacts(event.target.value)
    dispatch(filter)
  }

   const removeContacts =(contactId)=>{
const action = removeNumber(contactId)
    dispatch(action)
  } 
  return(

    <div className={css.phonebook}>
    <h1>Phonebook</h1>

    <ContactForm
      onSubmit={addContacts}
     /> 

    <h2>Contacts</h2>

    <Filter 
      onChange={filterContacts } 
      value={searchContact}
    />
      {isLoading && !error && <b>Request in progress...</b>}

   <ContactList
      onRemove={removeContacts}
      filter={searchContact}
      contacts={contactsSecond}
    />
</div>
  )
}































// export class oldApp extends Component{

//   state = {
//   contacts: [], 
//     filter: '',
//   }
  // componentDidMount(){
  
    // const localContact = localStorage.getItem('contacts')
    // if(localContact !== null){
    //   const parseContact = JSON.parse(localContact)
    //   this.setState({contacts: parseContact})
    //   return
    // }
    // this.setState({contacts: objContacts})
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.contacts !== this.state.contacts){
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

//   addContact = (name, number) => {
//     if (this.state.contacts.map(contact => contact.name).includes(name)) {
//       return alert(`${name} is alredy in contacts.`);
//     }
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     console.log(number)
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   filterContact = event =>{
//     const { name, value}  =event.currentTarget
//     this.setState({
//       [name]: value
//     })
//   }
//   removeContact =(contactId)=>{
//     this.setState(prevState => ({
//       contacts:  prevState.contacts.filter(contact => contact.id !== contactId )
//     }))
//   }  

//   render() {
//     const {contacts, filter} = this.state
//     return (
//       <div className={css.phonebook}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter 
//         onChange={this.filterContact} 
//         value={filter}/>
//         <ContactList
//         onRemove={this.removeContact}
//         filter={filter}
//          contacts={contacts} />
//     </div>
//   );}
// };
