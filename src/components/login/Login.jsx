import { Field, ErrorMessage, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom"
import { login } from "./../../redux/auth-reducer"

const LoginForm2 = props => {
   return <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      onSubmit={props.onSubmit}
   >
      <Form>
         <div>
            <label htmlFor='email'>Email</label><br />
            <Field id='email' name='email' type='email' /><br />
            <ErrorMessage name="email" />
         </div>
         <div>
            <label htmlFor='password'>Password</label><br />
            <Field id='password' name='password' type='password' /><br />
            <ErrorMessage name="password" />
         </div>
         <div>
            <Field type='checkbox' name='rememberMe' />Remember me<br />
            <ErrorMessage name="rememberMe" />
         </div>
         <button>Submit</button>
      </Form>
   </Formik>
}
// const LoginForm = props => {
//    return <form onSubmit={props.handleSubmit}>
//       <div>
//          <Field name='email' placeholder='email'
//             component={Input} type='text'
//             validate={[required]} />
//       </div>
//       <div>
//          <Field name='password' placeholder='password'
//             component={Input} type='password'
//             validate={[required]} />
//       </div>
//       <div>
//          <Field name='rememberMe' component='input' type='checkbox' /> Remember me
//       </div>
//       {props.error && <div className={c.formSummaryError}>
//          {props.error}
//       </div>}
//       <button>Login</button>
//    </form>
// }

// const LoginRedaxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
   const onSubmit = formData => props.login(formData.email, formData.password, formData.rememberMe)
   if (props.isAuth) return <Navigate to='/profile' />
   return <>
      <h1>Enter this data</h1>
      <div>Email: free@samuraijs.com</div>
      <div>Password: free</div>
      <LoginForm2 onSubmit={onSubmit} />
   </>
}

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)