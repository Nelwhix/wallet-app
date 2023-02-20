import axios from "axios"

const apiClient = axios.create({
    baseURL: "https://lab.aibox.systems/tutu/v1/engine",
    headers: {
        'X-Channel': 'api',
        'X-Timestamp': (Date.now()/1000).toFixed(0),
        'X-Require': '01GSFY46690R5WYMJMQK8Q194D',
        'X-Api-Key': '01GSFZT5PV5NNNWP3RWQ5XYJ53'
    }
})


export default apiClient