import c from './Posts.module.css'
import Post from './post/Post';
import React from 'react';


function Posts(props) {
   let posts = props.postsName.map(title => <Post title={title.name} />)
   let r = React.createRef()
   let onPostChange = () => {
      let text = r.current.value
      props.updateNewPostText(text)
   }
   let add = () => {
      props.addPost()
   }
   return (
      <div className={c.posts}>
         <div className={c.createPost}>
            <div className={c.title}>Create Post</div>
            <div className={c.textareaBlock}>
               <textarea ref={r} className={c.textarea} placeholder='add text' onChange={onPostChange} value={props.newPostText} />
               <button className={c.button} onClick={add} >Add</button>
            </div>
         </div>
         {posts}
      </div >
   )
}
export default Posts