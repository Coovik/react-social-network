import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Input } from '../common/formsControl/FormsContol'

let maxlength5 = maxLengthCreator(5)

const LoginForm = props => {
   return <form>
      <div>
         <Field name='login' placeholder='login'
            component={Input} type='text'
            validate={[required, maxlength5]} />
      </div>
      <div>
         <Field name='password' placeholder='password'
            component={Input} type='password'
            validate={[required, maxlength5]} />
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