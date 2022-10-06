
import Dialog from "./Dialog/Dialog"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"


const Dialogs = (props) => {

    let dialogs = [
        {id:1, name: "Danil"},
        {id:2, name: "Dima"},
        {id:3, name: "KUKU"},
        {id:4, name: "q "},
        {id:5, name: "Bres1ik"},
    ]


    let dialogsElements = dialogs
    .map(dialog => <Dialog  name={dialog.name} id={dialogs.id}/>)

    let messages = [
        {id:1, message: "hi"},
        {id:2, message: "Hi"},
        {id:3, message: "What's app?"},
        {id:4, message: "OK,YOU? "},
        {id:5, message: "VERY GOOD"},
    ]
     let messagesElements = messages.map(message=><Message message = {message.message} id = {message.id}/>)


    return(
            <div className={s.mainDialogs}>
                <div className={s.dialogs}>
               {dialogsElements}
                </div>
                <div className={s.messages}>
               {messagesElements}
                </div>
            </div> 
             
          

    )
}

export default Dialogs
