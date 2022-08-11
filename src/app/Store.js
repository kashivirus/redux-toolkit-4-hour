import { configureStore } from "@reduxjs/toolkit"
import postReducer from '../features/post/PostSlice'
import usersReducers from "../features/Users/UsersSlice"
export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducers


    }
})


