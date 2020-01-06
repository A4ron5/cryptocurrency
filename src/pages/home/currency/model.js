import { createStore, createEffect } from "effector"
import { requestInfo } from "@api"

export const fetchedCurrencyInfo = createEffect()

fetchedCurrencyInfo.use(requestInfo)

export const $currencyinfo = createStore({}).on(
  fetchedCurrencyInfo.done,
  (_, { result }) => result,
)

export const $currencyinfoerror = createStore("").on(
  fetchedCurrencyInfo.fail,
  () => "Something goes wrong :(",
)

fetchedCurrencyInfo.fail.watch(console.log)
