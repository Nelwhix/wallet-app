import { RootRoute, Route, ReactRouter } from '@tanstack/react-router'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'

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

const signUpRoute = new Route({ 
    getParentRoute: () => rootRoute, 
    path: '/signup',
    component: Signup
})

const routeTree = rootRoute.addChildren([
    indexRoute,
    loginRoute,
    signUpRoute
])

export const router = new ReactRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

