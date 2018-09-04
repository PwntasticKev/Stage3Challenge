const initialState = {
  phoneNumber: "",
  textOnly: "",
  email: ""
}

//Action types
const PHONE_NUMBER = "PHONE_NUMBER"
const EMAIL = "EMAIL"

export function inputTracker(e) {
  const value = e.target.value.replace(/\+|-/gi, "")
  return {
    type: PHONE_NUMBER,
    payload: value
  }
}

export function emailTracker(email) {
  let re = email.target.value
    .replace
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ()
  return {
    type: EMAIL,
    payload: re
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PHONE_NUMBER:
      console.log(action.payload)
      return Object.assign({}, state, { phoneNumber: action.payload })
    case EMAIL:
      console.log(action.payload)
      return { ...state, email: action.payload }

    default:
      return state
  }
}

//Action Creators
