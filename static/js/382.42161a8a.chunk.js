"use strict";(self.webpackChunkfirst_react_app=self.webpackChunkfirst_react_app||[]).push([[382],{382:function(e,s,n){n.r(s),n.d(s,{default:function(){return m}});var r=n(8683),o=n(5671),t=n(3144),a=n(136),l=n(5716),u=n(8687),i={block:"Users_block__Hk5tJ",img:"Users_img__McSXA",button:"Users_button__7g4MK",firstColumn:"Users_firstColumn__Xig6r",secondColum:"Users_secondColum__Hxa8q",pages:"Users_pages__inan8",selectedPage:"Users_selectedPage__Q661S"},c=n(8055),g=n(3504),d=n(846),f=n(184),p=function(e){for(var s=[],n=Math.ceil(e.totalCount/e.usersOnPage/100),r=1;r<=n;r++)s.push(r);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:i.preloader,children:e.isFetching&&(0,f.jsx)(d.p,{})}),(0,f.jsx)("div",{className:i.pages,children:s.map((function(s){return(0,f.jsx)("span",{className:e.currentPage===s?i.selectedPage:null,onClick:function(){return e.onChangePage(s)},children:s})}))}),e.users.map((function(s){return(0,f.jsxs)("div",{className:i.block,children:[(0,f.jsx)(g.OL,{to:"/profile/"+s.id,children:(0,f.jsx)("div",{className:i.img,children:(0,f.jsx)("img",{src:null!==s.photos.small?s.photos.small:c,alt:"avatarka"})})}),s.followed?(0,f.jsx)("button",{disabled:e.followInProgress.some((function(e){return e===s.id})),onClick:function(){return e.unfollow(s.id)},children:"Unfollow"}):(0,f.jsx)("button",{disabled:e.followInProgress.some((function(e){return e===s.id})),onClick:function(){return e.follow(s.id)},children:"Follow"}),(0,f.jsxs)("div",{className:i.firstColumn,children:[(0,f.jsx)("div",{children:s.name}),(0,f.jsx)("div",{children:s.status})]})]},s.id)}))]})},h=n(2938),P=function(e){(0,a.Z)(n,e);var s=(0,l.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return(e=s.call.apply(s,[this].concat(a))).onChangePage=function(s){e.props.setCurrentPage(s),e.props.getUsers(e.props.usersOnPage,s)},e.render=function(){return(0,f.jsx)(p,(0,r.Z)((0,r.Z)({},e.props),{},{onChangePage:e.onChangePage}))},e}return(0,t.Z)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.usersOnPage,this.props.currentPage)}}]),n}(n(2791).Component),m=(0,u.$j)((function(e){return{users:e.usersPage.users,totalCount:e.usersPage.totalCount,usersOnPage:e.usersPage.usersOnPage,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followInProgress:e.usersPage.followInProgress}}),{follow:h.ZN,unfollow:h.fv,setCurrentPage:h.D4,toggleIsFollowing:h.zF,getUsers:h.Rf})(P)}}]);
//# sourceMappingURL=382.42161a8a.chunk.js.map