import React, { useEffect } from "react"
import { useList } from "effector-react"
import { Currency } from "@ui/molecules/card"
import { addedToFeatures } from "@features/heart/model"
import { fetchedCurrencies, $currencies, loading } from "./model"

const Loader = loading(<div>LOADING...</div>)

export const CurrenciesList = () => {
  useEffect(() => {
    fetchedCurrencies()
  }, [])

  const list = useList($currencies, (item) => (
    <Currency
      logo={item.logo_url}
      name={item.name}
      price={item.price}
      rank={item.rank}
      handleClick={() => addedToFeatures(item.id)}
    />
  ))

  return (
    <>
      <Loader />
      {list}
    </>
  )
}
