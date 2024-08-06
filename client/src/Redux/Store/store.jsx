import { configureStore, combineReducers } from '@reduxjs/toolkit'
import UserReducer from '../features/UserSlice'

const rootReducer = combineReducers({
  user: UserReducer,
})

export const store = configureStore({
  reducer:  rootReducer
})