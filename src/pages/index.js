import { HomePage } from "./home/page"
import { NotFoundPage } from "./notfound/page"

export const routes = () => [
  {
    path: "/currencies",
    exact: true,
    component: HomePage,
  },
  {
    component: NotFoundPage,
  },
]
