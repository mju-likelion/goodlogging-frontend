import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import Goodlogging from '../service/goodlogging'

const { localStorage } = window

const initialState = {
  isAuthenticated: false,
  token: undefined,
  status: undefined,
}

export const login = createAsyncThunk('authSlice/login', async (loginData) => {
  console.log(loginData)
  const response = await Goodlogging.login(loginData.email, loginData.password)
  console.log(response)
  const { token } = response.data
  localStorage.setItem('token', token)

  return token
})

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')
      state.status = 'success'
      state.isAuthenticated = false
      state.token = undefined
    },
    refresh: (state, payload) => {
      state.status = 'success'
      state.isAuthenticated = true
      state.token = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'success'
      state.isAuthenticated = true
      state.token = payload
    })
    builder.addCase(login.rejected, (state) => {
      state.status = 'fail'
      state.isAuthenticated = false
      state.token = undefined
    })
  },
})

export const { logout, refresh } = authSlice.actions
export default authSlice.reducer
