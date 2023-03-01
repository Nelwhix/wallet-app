import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://lab.aibox.systems/tutu/v1/engine",
    headers: {
        'X-Channel': 'api',
        'X-Timestamp': (Date.now()/1000).toFixed(0),
        'X-Require': '01GRM0BX1NX1RTTKCRP0H9B3WH',
        'X-Api-Key': '01GRM0H6RTXFTSA1KBJ4S403XP'
    }
})


export default apiClient