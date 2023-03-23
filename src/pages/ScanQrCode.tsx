import { useZxing } from "react-zxing";
import {FormEvent, useEffect, useState} from "react";
import apiClient from "../axios";
import TransferWithCode from "../components/dashboard/TransferWithCode";
import Progress from "../components/Progress";


export default function ScanQrCode() {
    const [qrData, setQrData] = useState("")
    const [accName, setAccName] = useState("")
    const user = JSON.parse(localStorage.getItem('user'))

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

    async function startTransfer(e: FormEvent) {
        e.preventDefault()
        startLoader()

        const form = new FormData(e.target as HTMLFormElement)

        const data = {
            ref: '?',
            wlid: localStorage.getItem('wlid'),
            code: qrData,
            narration: form.get('narration'),
            amount: +form.get('amount') * 100,
            padlock: form.get('padlock')
        }

        try {
            const res = apiClient.post('/wallet/transfer/code', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            stopLoader()
        } catch (err) {
            console.info(err)
            stopLoader()
        }
    }

    const [state, setState] = useState({
        isAnimating: false,
        key: 0
    })

    function startLoader() {
        setState({
            isAnimating: true,
            key: 1
        })
    }

    function stopLoader() {
        setState({
            isAnimating: false,
            key: 0
        })
    }


    return <div className="qrScanner">
        <Progress isAnimating={state.isAnimating} key={state.key} />
        <video ref={ref} />
        <TransferWithCode name={accName} handleSubmit={startTransfer} />
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