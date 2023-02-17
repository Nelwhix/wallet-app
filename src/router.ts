import { RootRoute, Route, ReactRouter } from '@tanstack/react-router'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

let rootRoute = new RootRoute()

const indexRoute = new Route({
    getParentRoute: () => rootRoute, 
    path: '/',
    component: Dashboard
})
const loginRoute = new Route({ 
    getParentRoute: () => rootRoute, 
    path: '/login',
    component: Login
})

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute
])

export const router = new ReactRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

