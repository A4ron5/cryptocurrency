import React, { useEffect } from "react"
import { useList, useStore } from "effector-react"
import { Currency } from "@ui/molecules/card"
import { Message } from "@ui/atoms"
import { $featured, addedToFeatured } from "@lib/heart"
import { $isAuth } from "@features/common/model"
import { ErrorCatcher } from "@features/common/molecules/error"
import {
  fetchedCurrencies,
  $currencies,
  $currenciesError,
  loading,
} from "./model"

const Loader = loading(<Message>LOADING</Message>)

export const CurrenciesList = () => {
  const error = useStore($currenciesError)
  const featured = useStore($featured)
  const auth = useStore($isAuth)

  useEffect(() => {
    fetchedCurrencies()
  }, [])

  const list = useList($currencies, {
    keys: [featured, auth],
    fn: (item) => (
      <Currency
        logo={item.image}
        name={item.name}
        price={item.current_price}
        rank={item.market_cap_rank}
        handleClick={() => addedToFeatured(item.id)}
        like={featured.indexOf(item.id)}
        auth={auth}
      />
    ),
  })

  return (
    <>
      <Loader />
      <ErrorCatcher error={error}>{list}</ErrorCatcher>
    </>
  )
}
