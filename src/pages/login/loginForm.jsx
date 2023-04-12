import { Field, Form, Formik } from "formik"



export const LoginForm = () => {

    return(
        <Formik>
            <Form>
                <label>
                     <Field
                     placeholder='Email'
                     />
                </label>
                <label>
                    <Field
                     placeholder='Password'
                    />
                </label>
                <button type="button">Submit</button>
            </Form>
        </Formik>
    )
}