import { createEvent, createStore } from "effector"

export const checkedAuth = createEvent()

export const $isAuth = createStore(restore()).on(checkedAuth, click)

function click(auth) {
  localStorage.setItem("auth", JSON.stringify(!auth))
  return !auth
}

function restore() {
  const auth = localStorage.getItem("auth")
  if (auth) {
    return JSON.parse(auth)
  }
  return false
}
