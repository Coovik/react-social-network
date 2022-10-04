import * as axios from 'axios'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '146bc7b2-14a0-4f5f-817b-b1e7ea1ff9ac',
   },
})

export const usersAPI = {
   getUsers: (usersOnPage, page) => {
      return instance.get(`users?count=${usersOnPage}&page=${page}`)
         .then(response => response.data)
   },
   unfollow: id => instance.delete(`follow/${id}`).then(response => response.data.resultCode),
   follow: id => instance.post(`follow/${id}`).then(response => response.data.resultCode),
}
export const authAPI = {
   me: () => instance.get('auth/me').then(response => response.data),
   login: (email, password, rememberMe = false) => {
      return instance.post('auth/login', { email, password, rememberMe })
   },
   logout: () => instance.delete('auth/login'),
}
export const profileAPI = {
   getProfile: userId => instance.get(`profile/${userId}`).then(response => response.data),
   getStatus: userId => instance.get(`profile/status/${userId}`).then(response => response.data),
   updateStatus: status => instance.put(`profile/status`, { status })
      .then(response => response.data.resultCode),
   updateAvatar: photo => {
      const fd = new FormData()
      fd.append('image', photo)
      return instance.put(`profile/photo`, fd,
         { headers: { 'Content-Type': 'multipart/form-data' } }
      )
   },
}