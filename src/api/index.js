import axios from "axios"

const API_KEY = "fd293c0ad2faf709dc61bf5a98faa0ae"
const URL = `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}`

export const request = async () => {
  const data = await axios.get(URL)
  return data
}
