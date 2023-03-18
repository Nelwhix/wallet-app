import axios from "axios"

const token = localStorage.getItem('token') ?? ""

const apiClient = axios.create({
    baseURL: "https://lab.aibox.systems/tutu/v1/engine",
    headers: {
        'X-Channel': 'api',
        'X-Timestamp': (Date.now()/1000).toFixed(0),
        'X-Require': import.meta.env.VITE_PLATFORM_ID,
        'X-Api-Key': import.meta.env.VITE_TUTU_API_KEY,
        'Authorization': `Bearer ${token}`
    }
})

async function refreshTokens() {
    try {
        const res = await apiClient.get('/auth/refresh')
        localStorage.setItem('token', res.data.info.token)
    } catch (err) {
        console.log(err)
    }
}

setInterval(refreshTokens, import.meta.env.VITE_TOKEN_REFRESH_INTERVAL)

export default apiClient