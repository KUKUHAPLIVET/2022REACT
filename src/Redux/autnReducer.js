import { authApi } from "../api/api"

const SET_USER_DATA = "auth/SET_USER_DATA"
const SERVER_ERROR = "auth/SERVER_ERROR"


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth:false,
  serverError: " "

}



const autnReducer = (state=initialState, action)=>{
  switch(action.type){
    case SET_USER_DATA:
      return{
        ...state,
        ...action.payload,
        serverError:" "
        
      }
    case SERVER_ERROR :
      return{
        ...state, serverError : action.error
      }
    default :{
      return state
    }
  }
}



export const setAuthUserData=(userId,email,login,isAuth)=>({type:SET_USER_DATA, payload:{userId,email,login, isAuth }})
const setServerError = (error) =>({type:SERVER_ERROR, error})

export const getAuthUserData = () => async (dispatch) => {
  const response = await authApi.me()

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}


export const login = (email, password, rememberMe, isAuth) => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  }
  else {
    debugger
    dispatch(setServerError(response.data.messages))
  }
}





export const logOut = () => async (dispatch) => {
  const response = await authApi.logOut()

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}




export default autnReducer