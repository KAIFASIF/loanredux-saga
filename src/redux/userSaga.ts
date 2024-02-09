import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    title:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        fetchUser(state){
    
        }
    }
})


export const {fetchUser} = userSlice.actions

export default userSlice.reducer