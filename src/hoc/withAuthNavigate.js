import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

let mapStateToPropsNavigate = state => ({ isAuth: state.auth.isAuth })

export const withAuthNavigate = (Componet) => {
   const NavigateComponent = (props) => {
      if (!props.isAuth) return <Navigate to='/login' />
      return <Componet {...props} />
   }

   let ConnectAuthNavigateComponent = connect(mapStateToPropsNavigate)(NavigateComponent)

   return ConnectAuthNavigateComponent
}