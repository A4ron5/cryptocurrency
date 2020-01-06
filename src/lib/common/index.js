export const adapter = (location) => {
  const path = location.pathname
  const splitedPath = path.split("/")
  const currency = splitedPath[splitedPath.length - 1]
  return currency
}
