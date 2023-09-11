import {createSlice} from '@reduxjs/toolkit'


const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        adduser(state,action){
            state.push(action.payload)
        },
        removeuser(state,action){
            state.splice(action.payload,1)
        },
        deleteAlluser(state,action){
            return []
        }
    }
})




export  default userSlice;
export const {adduser,removeuser,deleteAlluser} =userSlice.actions