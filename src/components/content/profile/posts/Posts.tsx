import c from './Posts.module.css'
import Post from './post/Post'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Tpost } from '../../../../redux/profile-reducer'

type Tprops = {
   postsName: Tpost[]
   actions: {
      addPost: (value: string) => void
   }
}
type TformValues = { postInput: string }
const Posts = (props: Tprops) => {
   const posts = props.postsName.map(p => <Post key={p.id} title={p.name} />)
   const addPost = (value: string) => props.actions.addPost(value)
   const initialValues: TformValues = { postInput: '' }

   return (
      <div className={c.posts}>
         {/* <div className={c.createPost}>
            <div className={c.title}>Create Post</div>
            <Formik initialValues={initialValues} onSubmit={addPost}>
               <Form className={c.textareaBlock}>
                  <div>
                     <Field id='postInput' name='postInput' className={c.textarea} placeholder='add text' />
                  </div>
                  <button className={c.button}>Add</button>
               </Form>
            </Formik>
         </div> */}
         {posts}
      </div >
   )
}
export default Posts