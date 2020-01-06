export const request = async () => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  const res = await fetch(URL)
  const data = await res.json()
  return data
}

export const requestInfo = async (currency) => {
  const URL = `https://api.coingecko.com/api/v3/coins/${currency.toLowerCase()}`
  const res = await fetch(URL)
  const data = await res.json()
  return data
}
