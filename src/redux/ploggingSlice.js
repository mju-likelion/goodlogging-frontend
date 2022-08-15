import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import Goodlogging from '../service/goodlogging'

const initialState = {
  isPlogging: false,
  id: undefined,
  status: undefined,
}

export const start = createAsyncThunk('ploggingSlice/start', async () => {
  const response = await Goodlogging.startPlogging()
  const {
    data: { id },
  } = response
  console.log(response)
  return id
})

export const ploggingSlice = createSlice({
  name: 'ploggingSlice',
  initialState,
  reducers: {
    start: (state, payload) => {
      state.isPlogging = true
      state.id = payload
    },
    end: (state) => {
      state.isPlogging = false
      state.id = undefined
      state.status = 'success'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(start.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(start.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.id = payload
      state.isPlogging = true
    })
    builder.addCase(start.rejected, (state) => {
      state.status = 'fail'
      state.id = undefined
      state.isPlogging = false
    })
  },
})

export const { end } = ploggingSlice.actions
export default ploggingSlice.reducer
