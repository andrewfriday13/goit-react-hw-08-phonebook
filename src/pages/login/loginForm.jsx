import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/auth-operations"
import css from '../../style/Form-style.module.css'

 const LoginForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

const initialValues = {
    email: '',
    password: '',
}

const formChange = ({target:{name,value}}) => {
    if(name === "password"){
         return setPassword(value)
    }else if( name === "email"){
        return setEmail(value)
    }
 

}

const formSubmit = (e) => {
    dispatch(logIn({ email, password}))
    setEmail('')
    setPassword('')

}

    return(
  
   <div className={css.all_form}>
    <h1>Login From</h1>
     <Formik  
    initialValues={initialValues}
    onSubmit={formSubmit}
    >
      <Form className={css.form}>
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

export default LoginForm