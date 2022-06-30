import { Field, reduxForm } from 'redux-form'


const LoginForm = props => {
   return <form>
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
}

const LoginRedaxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
   return <LoginRedaxForm />
}


export default Login