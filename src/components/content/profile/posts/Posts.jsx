import c from './Posts.module.css'
import Post from './post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';


const CreatePostForm = props => <form className={c.textareaBlock} onSubmit={props.handleSubmit}>
   <Field
      className={c.textarea}
      name='textPost'
      placeholder='add text'
      component='textarea'
   />
   <button className={c.button} >Add</button>
</form>
const ReduxFormCreatePost = reduxForm({ form: 'createPost' })(CreatePostForm)

function Posts(props) {

   let posts = props.postsName.map(p => <Post key={p.id} title={p.name} />)

   let addPost = values => props.addPost(values.textPost)

   return (
      <div className={c.posts}>
         <div className={c.createPost}>
            <div className={c.title}>Create Post</div>
            <ReduxFormCreatePost onSubmit={addPost} />
         </div>
         {posts}
      </div >
   )
}
export default Posts