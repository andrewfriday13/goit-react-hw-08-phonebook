import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/auth-operations"



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
  
        <Formik  
    initialValues={initialValues}
    onSubmit={formSubmit}
    >
      <Form >
        <label>
        <Field  
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
          <Field   id="firstName"  type="password"
            name="password"
            value={password}
          onChange={formChange}
            required 
            placeholder='Password'/>
          </label>
        <button  type="submit">S U B M I T</button>
      </Form>
    </Formik>
    )
}

export default LoginForm