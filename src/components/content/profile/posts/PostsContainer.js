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
      addPost: () => {
         dispatch(addPostActionCreator())
      },
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)