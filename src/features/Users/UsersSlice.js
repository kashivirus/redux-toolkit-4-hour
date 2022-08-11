import { createSlice, nanoid } from "@reduxjs/toolkit"




const initialState = [
    { id: "0", name: "Kashif Khan" },
    { id: "1", name: "zain ul abdin " },
    { id: "2", name: "azmat muthal " },
    { id: "3", name: "seth khalid mirza" },

]


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})


export const selectAllUser = state => state.users

export default userSlice.reducer