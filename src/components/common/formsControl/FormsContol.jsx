import c from './FormsControl.module.css'

export const Input = ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error
   return <div className={hasError && c.errorStyle} >
      <div>
         <input  {...input} {...props} />
      </div>
      {hasError && <span >{meta.error}</span>}
   </div>
}

