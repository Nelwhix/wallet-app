import axios from "axios"

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_TUTU_BASE_URL,
    headers: {
        'X-Channel': 'api',
        'X-Timestamp': (Date.now()/1000).toFixed(0),
        'X-Require': import.meta.env.VITE_PLATFORM_ID,
        'X-Api-Key': import.meta.env.VITE_TUTU_API_KEY,
        'X-Requested-With': 'XMLHttpRequest',
    }
})

async function refreshTokens() {
    try {
        const res = await apiClient.get('/auth/refresh', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        localStorage.setItem('token', res.data.info.token)
    } catch (err) {
        console.log(err)
    }
}

setInterval(refreshTokens, import.meta.env.VITE_TOKEN_REFRESH_INTERVAL)

export default apiClient