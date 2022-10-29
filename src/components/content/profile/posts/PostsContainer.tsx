import { connect } from 'react-redux'
import { AppStateType } from '../../../../redux/redux-store'
import Posts from './Posts'
import { actions } from './../../../../redux/profile-reducer'


let mapStateToProps = (state: AppStateType) => {
   return {
      postsName: state.profilePage.postsName,
      newPostText: state.profilePage.newPostText,
   }
}

export default connect(mapStateToProps, { actions })(Posts)