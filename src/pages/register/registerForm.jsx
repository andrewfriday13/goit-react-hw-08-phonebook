import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "redux/auth/auth-operations"



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
  
        <Formik  
    initialValues={initialValues}
    onSubmit={formSubmit}
    >
      <Form >
        <label>
          
        <Field   
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

export default RegisterForm