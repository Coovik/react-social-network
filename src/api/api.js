import * as axios from 'axios'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '',
   },
})

export const usersAPI = {
   getUsers: (usersOnPage, currentPage) => {
      return instance.get(`users?count=${usersOnPage}&page=${currentPage}`)
         .then(response => response.data)
   },
   getPage: (usersOnPage = 4, pageNumber = 1) => {
      return instance.get(`users?count=${usersOnPage}&page=${pageNumber}`)
         .then(response => response.data)
   },
   unfollow: (id) => instance.delete(`follow/${id}`).then(response => response.data.resultCode),
   follow: (id) => instance.post(`follow/${id}`).then(response => response.data.resultCode),
}