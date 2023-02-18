import { router } from "../router"

export default function Dashboard() {
    if (!localStorage.getItem('token')) {
       router.navigate({
        from: '/',
        to: '/login'
       })
    }
    return <p>Dashboard</p>
}