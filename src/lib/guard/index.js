export const compileGuards = (routes, context) => {
  return routes
    .map((route) =>
      route.guards
        ? route.guards.reduce(
            (currentRoute, guard) =>
              currentRoute ? guard(currentRoute, context) : undefined,
            route,
          )
        : route,
    )
    .filter(Boolean)
    .map((route) => ({
      path: route.path,
      component: route.component,
      exact: true,
    }))
}
