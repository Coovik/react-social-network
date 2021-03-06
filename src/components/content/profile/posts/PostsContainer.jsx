import { connect } from 'react-redux';
import { addPost } from '../../../../redux/profile-reducer';
import Posts from './Posts';


let mapStateToProps = (state) => {
   return {
      postsName: state.profilePage.postsName,
      newPostText: state.profilePage.newPostText,
   }
}

export default connect(mapStateToProps, { addPost })(Posts)