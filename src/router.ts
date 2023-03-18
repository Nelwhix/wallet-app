import { RootRoute, Route, ReactRouter } from '@tanstack/react-router'
import layout from './layouts/layout'
import Activity from './pages/Activity'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'

let rootRoute = new RootRoute()

const layoutRoute = new Route({
    getParentRoute: () => rootRoute,
    id: 'layout',
    component: layout
})

const indexRoute = new Route({
    getParentRoute: () => layoutRoute, 
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

const activityRoute = new Route({
    getParentRoute: () => layoutRoute,
    path: '/activity',
    component: Activity
})

const routeTree = rootRoute.addChildren([
    loginRoute,
    signUpRoute,
    layoutRoute.addChildren([
        indexRoute,
        activityRoute
    ]),
])

export const router = new ReactRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

