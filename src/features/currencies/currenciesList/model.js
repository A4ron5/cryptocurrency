import { createEffect, createStore } from "effector"
import { createComponent } from "effector-react"
import { request } from "@api/index"

export const fetchedCurrencies = createEffect()

fetchedCurrencies.use(request)

export const $currencies = createStore([])
  .on(fetchedCurrencies.done, (_, { result }) => result.data.splice(0, 100))
  .on(fetchedCurrencies.fail, () => "something goes wrong")

export const loading = (loader) =>
  createComponent(fetchedCurrencies.pending, (_, pending) => pending && loader)
