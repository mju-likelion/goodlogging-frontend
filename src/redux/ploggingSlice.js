import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import Goodlogging from '../service/goodlogging'

const initialState = {
  isPlogging: false,
  id: undefined,
  status: undefined,
  trash: 0,
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
  const {
    data: { trash },
  } = response
  return trash
})

export const ploggingSlice = createSlice({
  name: 'ploggingSlice',
  initialState,
  reducers: {
    start: (state, payload) => {
      state.isPlogging = true
      state.id = payload
      state.trash = 0
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
    builder.addCase(end.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.id = undefined
      state.isPlogging = false
      state.trash = payload
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
