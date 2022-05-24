import c from './Posts.module.css'
import Post from './post/Post';
import React from 'react';


function Posts(props) {
   let posts = props.postsName.map(title => <Post title={title.name} />)
   let r = React.createRef()
   let add = () => {
      props.addPost(r.current.value)
      r.current.value = ''
   }
   return (
      <div className={c.posts}>
         <div className={c.createPost}>
            <div className={c.title}>Create Post</div>
            <div className={c.textareaBlock}>
               <textarea ref={r} className={c.textarea} cols="" rows="" placeholder='add text'></textarea>
               <button className={c.button} onClick={add} >Add</button>
            </div>
         </div>
         {posts}
      </div>
   );
}
export default Posts