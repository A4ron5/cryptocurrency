import React, { useEffect } from "react"
import { useList, useStore } from "effector-react"
import { Currency } from "@ui/molecules/card"
import { Message } from "@ui/atoms"
import { $featured, addedToFeatures } from "@lib/heart"
import { $isAuth } from "@features/common/model"
import {
  fetchedCurrencies,
  $currencies,
  $currenciesError,
  loading,
} from "./model"

const Loader = loading(<Message>LOADING</Message>)

export const CurrenciesList = () => {
  const errors = useStore($currenciesError)
  const featured = useStore($featured)
  const auth = useStore($isAuth)

  useEffect(() => {
    fetchedCurrencies()
  }, [])

  const list = useList($currencies, {
    keys: [featured, auth],
    fn: (item) => (
      <Currency
        logo={item.logo_url}
        name={item.name}
        price={item.price}
        rank={item.rank}
        handleClick={() => addedToFeatures(item.id)}
        like={featured.indexOf(item.id)}
        auth={auth}
      />
    ),
  })

  return (
    <>
      <Loader />
      {<Message>{errors}</Message> && list}
    </>
  )
}
