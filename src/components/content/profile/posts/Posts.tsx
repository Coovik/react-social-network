import c from './Posts.module.css'
import Post from './post/Post'
import React, { FC } from 'react'
import { Field, Form, Formik, FormikValues } from 'formik'
import { Tpost } from '../../../../redux/profile-reducer'

type Tprops = {
   postsName: Tpost[]
   actions: {
      addPost: (value: string) => void
   }
}
export const Posts: FC<Tprops> = props => {
   const posts = props.postsName.map(p => <Post key={p.id} title={p.name} />)
   const addPost = (values: FormikValues) => props.actions.addPost(values.postInput)

   return (
      <div className={c.posts}>
         <div className={c.createPost}>
            <div className={c.title}>Create Post</div>
            <Formik initialValues={{ postInput: '' }} onSubmit={addPost}>
               <Form className={c.textareaBlock}>
                  <div>
                     <Field id='postInput' name='postInput' className={c.textarea} placeholder='add text' />
                  </div>
                  <button className={c.button}>Add</button>
               </Form>
            </Formik>
         </div>
         {posts}
      </div >
   )
}