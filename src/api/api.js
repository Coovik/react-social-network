import * as axios from 'axios'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   // withCredentials: true,
   headers: {
      'API-KEY': '4c77e2ce-0ef4-4981-8439-bcc1ed984016',
   },
})

export const usersAPI = {
   getUsers: (usersOnPage, page) => {
      return instance.get(`users?count=${usersOnPage}&page=${page}`)
         .then(response => response.data)
   },
   unfollow: (id) => instance.delete(`follow/${id}`).then(response => response.data.resultCode),
   follow: (id) => instance.post(`follow/${id}`).then(response => response.data.resultCode),
}
export const headerAPI = {
   auth: () => instance.get('auth/me').then(response => response.data),
}
export const porofileAPI = {
   getProfile: userId => instance.get(`profile/${userId}`).then(response => response.data),
   getStatus: userId => instance.get(`profile/status/${userId}`).then(response => response.data),
   updateStatus: status => instance.put(`profile/status`, { status }).then(response => response.data.resultCode),
}