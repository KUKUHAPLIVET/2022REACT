import { getAuthUserData } from "./autnReducer"



const SET_INITIALIZED = "app/SET_INITIALIZED"

let initialState = {
  initialized :false

}



export const appReducer = (state=initialState, action)=>{
  switch(action.type){
    case SET_INITIALIZED:
      return{
        ...state,
        initialized:true
      }
    default :{
      return state
    }
  }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED })

export const initialize = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())

  promise.then(() => {
    dispatch(initializedSuccess())})
}