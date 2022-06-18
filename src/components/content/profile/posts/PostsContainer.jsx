import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import Posts from './Posts';


let mapStateToProps = (state) => {
   return {
      postsName: state.profilePage.postsName,
      newPostText: state.profilePage.newPostText,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      add: () => {
         dispatch(addPostActionCreator())
      },
      onPostChange: (text) => {
         dispatch(updateNewPostTextActionCreator(text))
      },
   }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer