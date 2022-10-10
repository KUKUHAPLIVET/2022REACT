// import dialogReducer from "./dialogsReducer"
// import profileReducer from "./profileReducer"




// let store = {

//     _state: {

//         dialogsPage: {
//             dialogs: [
//                 { id: 1, name: "Danil" },
//                 { id: 2, name: "Dima" },
//                 { id: 3, name: "KUKU" },
//                 { id: 4, name: "q " },
//                 { id: 5, name: "Bres1ik" },
//             ],

//             messages: [
//                 { id: 1, message: "fsdfdsfdsafdasfds" },
//                 { id: 2, message: "Hi" },
//                 { id: 3, message: "What's app?" },
//                 { id: 4, message: "OK,YOU? " },
//                 { id: 5, message: "VERY GOOD" },
//             ],
//             newMessageBody: " 2"
//         },
//         profilePage: {
//             posts: [
//                 { id: "1", message: "HI", likes: "20" },
//                 { id: "2", message: "HI222", likes: "2213120" },
//                 { id: "3", message: "HI433", likes: "2550" },
//                 { id: "4", message: "HI4444", likes: "220" },
//                 { id: "5", message: "HI555", likes: "790" },
//             ],
//             newPostText: "DMITRY SAS",
//         },


//     },
//     getState(){
//         return this._state
//     },
//     callSubsriber(observer) {
//         console.log("23");
//         this.callSubsriber = observer

//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
//         this.callSubsriber(this._state)
//     }
// }












// export default store