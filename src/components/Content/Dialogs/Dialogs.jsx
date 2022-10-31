
import Dialog from "./Dialog/Dialog"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"
import React from "react"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../../Redux/dialogsReducer"
import { Navigate, redirect } from "react-router-dom"

const Dialogs = (props) => {

  // let newMessageText = React.createRef()

  let dialogsElements = props.dialogs
    .map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

  let messagesElements = props.messages
    .map(message => <Message message={message.message} id={message.id} />)

  const newMessage = () => {
    props.sendMessage()
  }
  const onMessageChange = (e) => {
    let text = e.target.value
    props.onChangeMessageText(text)
  }
  
  if (!props.isAuth) return <Navigate to="/login" />
  return (
    <div className={s.mainDialogs}>
      <div className={s.dialogs}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea value={props.newMessageBody}
          // ref={newMessageText}
          onChange={onMessageChange}
          placeholder="ENTER YOUR MESSAGE"></textarea>
        <button onClick={newMessage}>send</button>
      </div>


    </div>



  )
}

export default Dialogs
