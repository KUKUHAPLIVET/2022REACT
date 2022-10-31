
import axios from "axios"



const instance = axios.create({
  withCredentials:true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers:{
    "API-KEY":"158b88f9-b775-4a6f-b848-598f409162d0"
  }

})


// export const userAPI = {
//   getUsers(pageNumber, pageSize) {
//     return instance.get(
//       `users?page=${pageNumber}&count=${pageSize}`)
//       .then(response => {
//         return response.data
//       })
//   }
// }
export const UserAPI = {
  getUsers(pageNumber, pageSize) {
    return instance.get(
      `users?page=${pageNumber}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId){
    return instance.post(`follow/${userId}`)

  },
  unFollow(userId){
    return instance.delete(`follow/${userId}`,)
  },
  getProfile(userId){
    return profileAPI.getProfile(userId)  }

}




export const profileAPI = {
  getProfile(userId){
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId){
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put('profile/status',{status})
  }

}


export const authApi = {
  me () {
    return instance.get(`auth/me`)
  },
  login(email, password, remeberMe=false){
     return instance.post('auth/login',{email, password, remeberMe})
  },
  logOut(){
    return instance.delete('auth/login')
  }
}