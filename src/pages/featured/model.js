import { combine } from "effector"
import { $currencies } from "@features/currencies/model"
import { $featured } from "@lib/heart"

export const $combined = combine(
  $currencies,
  $featured,
  (currnecies, featured) =>
    currnecies.filter((item) => featured.includes(item.id)),
)
