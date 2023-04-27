import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "redux/auth/auth-operations"
import css from '../../style/Form-style.module.css'


 const RegisterForm = () => {
    const dispatch = useDispatch()
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

const initialValues = {
    name: '',
    email: '',
    password: '',
}

const formChange = ({target:{name,value}}) => {
    if(name === "name"){
         return setName(value)
    }else if( name === "email"){
        return setEmail(value)
    }else if( name === "password"){
        return setPassword(value)
    }
 

}

const formSubmit = (e) => {
    dispatch(register({name, email, password}))
    setName('')
    setEmail('')
    setPassword('')

}

    return(
  
      <div className={css.all_form}>
        <h1>Register Form</h1>
          <Formik  
    initialValues={initialValues}
    onSubmit={formSubmit}
    >
      <Form  className={css.form}>
        <label>
          
        <Field   
          className={css.input__form}
          value={name}
          id="firstName" 
          type="text"
          required
          name="name" 
          placeholder='Name'
          onChange={formChange}
          />
        </label>

        <label>
        <Field  
        className={css.input__form}
          onChange={formChange}
          value={email}
            id="lastName" 
            type="email"
            name="email"
            required  
            autocopmlete='on'
            placeholder='Email'/>
        </label>
        
        <label>
          <Field   
            className={css.input__form}
            id="firstName"  
            type="password"
            name="password"
            value={password}
          onChange={formChange}
            required 
            placeholder='Password'/>
          </label>
        <button  
         className={css.submit__btn}
        type="submit">S U B M I T</button>
      </Form>
    </Formik>
      </div>
    )
}

export default RegisterForm