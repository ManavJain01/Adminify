import { configureStore, combineReducers } from '@reduxjs/toolkit'
import Slice from '../features/Slice'

const rootReducer = combineReducers({
  slice: sliceReducer,
})

export const store = configureStore({
  reducer:  rootReducer
})