 
 const UPDATE_NEW_MESSAGE_BODY = "dialogs/UPDATE_NEW_MESSAGE_BODY"
 const SEND_MESSAGE = "dialogs/SEND_MESSAGE"
 

let initialState = {

        dialogs: [
            { id: 1, name: "Danil" },
            { id: 2, name: "Dima" },
            { id: 3, name: "KUKU" },
            { id: 4, name: "q " },
            { id: 5, name: "Bres1ik" },
        ],

        messages: [
            { id: 1, message: "fsdfdsfdsafdasfds" },
            { id: 2, message: "Hi" },
            { id: 3, message: "What's app?" },
            { id: 4, message: "OK,YOU? " },
            { id: 5, message: "VERY GOOD" },
        ],
        newMessageBody: ""

}
 
 
 const dialogsReducer = (state = initialState, action) => {
    // let stateCopy = {
    //     ...state,
    //     // messages: [...state.messages]
    // }
    switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
        return{
            ...state,
        newMessageBody: action.newMessage}

     case SEND_MESSAGE: 
        let newMessage = {
            id: 5,
            message: state.newMessageBody
        }
        return{
            ...state,
            newMessageBody : " ",
            messages: [...state.messages, newMessage]}
        
        // stateCopy.messages.push(newMessage)
        
        // return stateCopy

        default:
            return state
    }


}









export const updateNewMessageTextActionCreator = (text) => {
    return{
        type:UPDATE_NEW_MESSAGE_BODY, newMessage:text
    }
}

export const sendMessageActionCreator = ()=>{
    return{
        type:SEND_MESSAGE
    }
}


export default dialogsReducer