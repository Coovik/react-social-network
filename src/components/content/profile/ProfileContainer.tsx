import React, { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from '../../../hoc/withRouter'
import { getStatus, getUser, setPhoto, Tprofile, updateStatus } from '../../../redux/profile-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { withAuthNavigate } from './../../../hoc/withAuthNavigate'
import Profile from './Profile'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//FIXME
type Tprops = {
   userId: string
   profile: Tprofile
   status: string
   getUser: (id: string) => void
   getStatus: (id: string) => void
   setPhoto: () => void
   updateStatus: (status: string) => void
}
const ProfileContainer: FC<Tprops> = props => {
   //TODO delete comments
   let { id } = useParams()
   useEffect(() => {
      // let userId = props.router.params.id
      // if (!userId) userId =props.userId
      if (!id) id = props.userId
      // props.getUser(userId)
      // props.getStatus(userId)
      props.getUser(id)
      props.getStatus(id)
   }, [])

   return <Profile {...props} />
}

let mapStateToProps = (state: AppStateType) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   userId: state.auth.id,
})

export default compose<ComponentType>(
   withRouter,
   connect(mapStateToProps, { getUser, getStatus, updateStatus, setPhoto }),
   withAuthNavigate,
)(ProfileContainer)