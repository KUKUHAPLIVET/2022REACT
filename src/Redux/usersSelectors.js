import { createSelector } from "reselect"

export const getUsers = (state) => {
  return state.usersPage.users
}



// export const getUsersSelector = (state) => {
//   return getUsers(state).filter(u=>true) 
// }

// export const getUsersSuperSelector = createSelector (getUsers,(users)=>{
//   return users.filter(u=>true)   Будет перерисовывать если изменяться Users
// })                               Зависит от getUsers и делает кэширование операции, 
//                                  Чтобы лишний раз не заставлять рисовать 


export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalUsers = (state) => {
  return state.usersPage.totalUsers
}


export const getPageNumber = (state) => {
  return state.usersPage.pageNumber
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}