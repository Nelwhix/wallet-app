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

// apiClient.interceptors.response
//     .use(res => {return res},
//         async (err) => {
//             if (err.response.status === 401) {
//                 try {
//                     const response = await apiClient.get('/auth/refresh')
//                     localStorage.setItem('token', response.data.info.token)
//                 } catch (err) {
//                     console.error(err)
//                 } 
//             }
//         }   
//     )


export default apiClient