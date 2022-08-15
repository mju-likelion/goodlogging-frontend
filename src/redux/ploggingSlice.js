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
  return id
})

export const end = createAsyncThunk('ploggingSlice/end', async (id) => {
  const response = await Goodlogging.endPlogging(id)
  return response
})

export const ploggingSlice = createSlice({
  name: 'ploggingSlice',
  initialState,
  reducers: {
    start: (state, payload) => {
      state.isPlogging = true
      state.id = payload
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
    builder.addCase(end.pending, (state) => {
      state.status = 'loading'
      state.id = undefined
      state.isPlogging = false
    })
    builder.addCase(end.fulfilled, (state) => {
      state.status = 'success'
      state.id = undefined
      state.isPlogging = false
    })
    builder.addCase(end.rejected, (state) => {
      state.status = 'fail'
      state.id = undefined
      state.isPlogging = false
    })
  },
})

// export const {} = ploggingSlice.actions
export default ploggingSlice.reducer
