import { combine } from "effector-logger"
import { $currencies } from "@features/currencies/model"
import { $featured } from "@lib/heart"

export const $combined = combine(
  $currencies,
  $featured,
  (currnecies, featured) =>
    currnecies.filter((item) => featured.includes(item.id)),
)
