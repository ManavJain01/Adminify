import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const Slice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    creatingInitialState: (state = initialState, action) => {

    },
  }
})

export const {creatingInitialState} = Slice.actions

export default Slice.reducer