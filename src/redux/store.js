import { configureStore } from '@reduxjs/toolkit'

import authReducer from './authSlice'
import ploggingReducer from './ploggingSlice'

export const store = configureStore({
  reducer: { auth: authReducer, plogging: ploggingReducer },
})
