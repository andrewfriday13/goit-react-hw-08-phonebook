

import css from './ContactListStyle.module.css'

import { allContacts } from "redux/contacts/selectors-contacts";
import { useDispatch, useSelector } from "react-redux";
import { removeNumber } from "redux/contacts/operationsContacts";
import { getFilter } from 'redux/filter/selectors-filter';


export const ContactList = ()=>{
  
 const contactSecond =useSelector(allContacts)
 const dispatch = useDispatch()
 const searchContact = useSelector(getFilter)


 const removeContacts =(contactId)=>{

  const action = removeNumber(contactId)
      dispatch(action)
    }


  return(
      <ul className={css.list__contact}>
        {contactSecond.length > 0 ? (
        contactSecond.filter(({name})=>
        name.toLowerCase().includes(searchContact.toLowerCase())).map(({id, name, number}) =>
          <li key={id}
          className={css.items__contact}
          >
            <p className={css.contact}>{name}: {number}</p>
            <button 
            className={css.remove__btn}
            onClick={()=>{removeContacts(id)}}>Remove</button>
          </li>
        )): (<span style={{fontSize: "30px"}} >You don`t have contacts</span>)}
      </ul>
    
  )
}

// ContactList.propTypes ={
//   contactSecond: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   })),
//   filter: PropTypes.string,
//   onRemove: PropTypes.func,


// }

