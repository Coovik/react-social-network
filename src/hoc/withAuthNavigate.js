import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import React from "react"

let mapStateToPropsNavigate = state => ({ isAuth: state.auth.isAuth })

export function withAuthNavigate(Componet) {
   function NavigateComponent(props) {
      if (!props.isAuth) return <Navigate to='/login' />
      return <Componet {...props} />
   }

   return connect(mapStateToPropsNavigate)(NavigateComponent)
}