import { createStore, createEvent } from "effector"

export const addedToFeatures = createEvent()

export const $featured = createStore(restore())

$featured.on(addedToFeatures, heartClicked)

$featured.watch(console.log)

function heartClicked(currencies, currency) {
  const is = currencies.includes(currency)
  if (is) {
    return [...currencies]
  }

  return [...currencies, currency]
}

function restore() {
  const hearts = localStorage.getItem("hearts")
  if (hearts) return hearts
  return []
}
