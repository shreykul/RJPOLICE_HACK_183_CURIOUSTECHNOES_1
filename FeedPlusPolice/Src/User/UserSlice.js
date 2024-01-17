import { View, Text } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'
import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({ 
    name:'User',
    initialState:[],
    reducers:{
        setUser:(state,action) => {
            state.length = 0; 
            state.push(action.payload); 
           
        }
    }
})

export const { setUser } = UserSlice.actions

export default UserSlice