import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const UserSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    creatingInitialState: (state = initialState, action) => {
      state.data = action.payload;      
    },
  }
})

export const { creatingInitialState } = UserSlice.actions

export default UserSlice.reducer