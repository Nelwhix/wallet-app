import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://lab.aibox.systems/tutu/v1/engine",
    headers: {
        'X-Channel': 'api',
        'X-Timestamp': (Date.now()/1000).toFixed(0),
        'X-Require': import.meta.env.VITE_PLATFORM_ID,
        'X-Api-Key': import.meta.env.VITE_TUTU_API_KEY
    }
})


export default apiClient