import { useZxing } from "react-zxing";
import {useEffect, useState} from "react";
import apiClient from "../axios";
import TransferWithCode from "../components/dashboard/TransferWithCode";


export default function ScanQrCode() {
    const [qrData, setQrData] = useState("")
    const [accName, setAccName] = useState("")

    const { ref } = useZxing({
        onResult(result) {
            setQrData(result.getText())
        }
    })

    useEffect(() => {
            apiClient.post('/wallet/scan', {
                ref: "?",
                code: qrData
            }).then(res => {
                setAccName(res.data.info.user.username)
                document.getElementById('modalBtn').click()
            })
    }, [qrData])


    return <div className="qrScanner">
        <video ref={ref} />
        <TransferWithCode name={accName} />
        <div style={{display: 'none'}}>
            <button
                id="modalBtn"
                data-bs-toggle="modal"
                data-bs-target="#transferModal"
            > <i className="fa fa-paper-plane"></i>Transfer
            </button>
        </div>
    </div>
}