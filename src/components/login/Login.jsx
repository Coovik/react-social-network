import { Field, reduxForm } from 'redux-form'


const Login = props => {
   return <>
      <form>
         <div>
            <Field name='login' placeholder='login' component='input' type='text' />
         </div>
         <div>
            <Field name='password' placeholder='password' component='input' type='password' />
         </div>
         <div>
            <Field name='rememberMe' component='input' type='checkbox' /> Remember me
         </div>
         <button>Submit</button>
      </form>
   </>
}

const LoginForm = reduxForm({ form: 'login' })(Login)

export default LoginForm