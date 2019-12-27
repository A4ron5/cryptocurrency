import { createEffect, createStore } from "effector"
import { createComponent } from "effector-react"
import { request } from "@api"

export const fetchedCurrencies = createEffect()

fetchedCurrencies.use(request)

export const $currencies = createStore([]).on(
  fetchedCurrencies.done,
  (_, { result }) => result.data.splice(0, 100),
)

export const $currenciesError = createStore("").on(
  fetchedCurrencies.fail,
  () => "Something goes wrong :(",
)

fetchedCurrencies.fail.watch(console.log)

export const loading = (loader) =>
  createComponent(fetchedCurrencies.pending, (_, pending) => pending && loader)