import { sample } from "effector"
import { $currencies } from "@features/currencies/model"
import { $featured } from "@lib/heart"

export const $sampled = sample($currencies, $featured, (currencies, featured) =>
  currencies.filter((item) => featured.includes(item.id)),
)
