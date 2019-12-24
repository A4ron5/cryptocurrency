import { createEffect, createStore } from "effector"
import { request } from "@api/index"

export const fetchedCurrencies = createEffect({
  handler: () => {
    request().then((cur) => cur.data.splice(0, 100))
  },
})
export const $currencies = createStore([]).on(
  fetchedCurrencies.done,
  (state, currency) => [...state, currency],
)
