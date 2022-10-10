
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import React from "react"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"

// const DialogsContainer = (props) => {

    // let state= props.store.getState().dialogsPage
    // // let newMessageText = React.createRef()

    // const sendMessage = () => {
    //     props.store.dispatch(sendMessageActionCreator())
    // }
    // const onChangeMessageText = (text) => {
    //     props.store.dispatch(updateNewMessageTextActionCreator(text))
    // }


    // // 
    // return <Dialogs  state={state} 
    // onChangeMessageText={onChangeMessageText} 
    // sendMessage={sendMessage}/>
        
    
// }


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onChangeMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }


    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

