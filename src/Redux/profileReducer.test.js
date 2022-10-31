import profileReducer, { addPostActionCreator } from "./profileReducer"

import React from "react";



it("new post should be added", () => {

  // 1 test DATA
  let action = addPostActionCreator("It-Kamasutra.com")
  let state = {

    posts: [
      { id: "1", message: "HI", likes: "20" },
      { id: "2", message: "HI222", likes: "2213120" },
      { id: "3", message: "HI433", likes: "2550" },
      { id: "4", message: "HI4444", likes: "220" },
      { id: "5", message: "HI555", likes: "790" },
    ],
  }








  //action
  let newState = profileReducer(state, action)

  // expectation
  expect(newState.posts.length).toBe(5)


})