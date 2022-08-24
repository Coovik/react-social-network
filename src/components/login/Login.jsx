import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/formsControl/FormsContol'
import { login } from "./../../redux/auth-reducer"
import { Navigate } from "react-router-dom"
import c from '../common/formsControl/FormsControl.module.css'


const LoginForm = props => {
   return <form onSubmit={props.handleSubmit}>
      <div>
         <Field name='email' placeholder='email'
            component={Input} type='text'
            validate={[required]} />
      </div>
      <div>
         <Field name='password' placeholder='password'
            component={Input} type='password'
            validate={[required]} />
      </div>
      <div>
         <Field name='rememberMe' component='input' type='checkbox' /> Remember me
      </div>
      {props.error && <div className={c.formSummaryError}>
         {props.error}
      </div>}
      <button>Login</button>
   </form>
}

const LoginRedaxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
   const onSubmit = formData => props.login(formData.email, formData.password, formData.rememberMe)
   if (props.isAuth) return <Navigate to='/profile' />
   return <>
      <h1>Enter this data</h1>
      <div>Email: free@samuraijs.com</div>
      <div>Password: free</div>
      <LoginRedaxForm onSubmit={onSubmit} />
   </>
}

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)