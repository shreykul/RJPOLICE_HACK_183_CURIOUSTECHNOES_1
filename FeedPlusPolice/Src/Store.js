import { View, Text } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './User/UserSlice'

export const Store = configureStore({
    reducer: {
        User: UserSlice.reducer,
    },
  })