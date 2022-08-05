import { useReducer } from 'react'
import Proptypes from 'prop-types'

// eslint-disable-next-line no-useless-escape
const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/

const INITIAL_STATE = {
  value: '',
  isTouched: false,
  isValid: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      if (action.payload.inputType === 'email') {
        if (emailRegx.test(action.payload.value)) {
          return {
            isTouched: true,
            isValid: true,
            value: action.payload.value,
          }
        }
        return { ...state, isValid: false, value: action.payload.value }
      }
      if (action.payload.inputType === 'password') {
        if (action.payload.value.length >= 8) {
          return {
            isTouched: true,
            isValid: true,
            value: action.payload.value,
          }
        }
        return {
          ...state,
          isValid: false,
          value: action.payload.value,
        }
      }
      if (action.payload.inputType === 'username') {
        if (action.payload.value.length >= 2) {
          return {
            isTouched: true,
            isValid: true,
            value: action.payload.value,
          }
        }
        return {
          ...state,
          isValid: false,
          value: action.payload.value,
        }
      }
      break

    case 'BLUR':
      if (action.payload.inputType === 'email') {
        if (emailRegx.test(state.value)) {
          return { ...state, isTouched: true, isValid: true }
        }
        return { ...state, isTouched: true, isValid: false }
      }
      if (action.payload.inputType === 'password') {
        if (state.value.length >= 8) {
          return { ...state, isTouched: true, isValid: true }
        }
        return { ...state, isTouched: true, isValid: false }
      }
      if (action.payload.inputType === 'username') {
        if (state.value.length >= 2) {
          return { ...state, isTouched: true, isValid: true }
        }
        return { ...state, isTouched: true, isValid: false }
      }
  }
  return { ...state }
}

const useInput = (type) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT',
      payload: { inputType: type, value: e.currentTarget.value },
    })
  }

  const handleBlur = (e) => {
    dispatch({
      type: 'BLUR',
      payload: { inputType: type, value: e.currentTarget.value },
    })
  }

  return {
    handleInputChange,
    handleBlur,
    value: state.value,
    isTouched: state.isTouched,
    isValid: state.isValid,
  }
}

useInput.Proptypes = {
  type: Proptypes.oneOf(['email', 'password', 'username']),
}

export default useInput
