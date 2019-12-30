import { createStore, createEvent } from "effector"

export const addedToFeatured = createEvent()

export const $featured = createStore(restore())

$featured.on(addedToFeatured, heartClicked)

function heartClicked(currencies, currency) {
  const is = currencies.includes(currency)
  if (is) {
    localStorage.setItem(
      "hearts",
      JSON.stringify(currencies.filter((item) => item !== currency)),
    )
    return currencies.filter((item) => item !== currency)
  }
  localStorage.setItem("hearts", JSON.stringify([...currencies, currency]))
  return [...currencies, currency]
}

function restore() {
  const hearts = localStorage.getItem("hearts")
  if (hearts) return JSON.parse(hearts)
  return []
}
