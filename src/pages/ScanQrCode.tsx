import { useZxing } from "react-zxing";
import {FormEvent, useEffect, useState} from "react";
import apiClient from "../axios";
import TransferWithCode from "../components/dashboard/TransferWithCode";
import Progress from "../components/Progress";
import { useAppDispatch, useAppSelector } from '../hooks'
import { 
    start, 
    stop
} from '../stores/index'
import Lottie from 'react-lottie-player'
import successJson from '../assets/json/verification-successful.json'
import { formatMoney } from '../helpers/index'


export default function ScanQrCode() {
    const isAnimating = useAppSelector(state => state.loader.isAnimating)
    const key = useAppSelector(state => state.loader.key)
    const [qrData, setQrData] = useState("")
    const [accName, setAccName] = useState("")
    const dispatch = useAppDispatch()
    const [showSuccess, setShowSuccess] = useState(false)
    const [amount, setAmount] = useState(0)

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
                document.getElementById('modalBtn')?.click()
            })
    }, [qrData])

    async function startTransfer(e: FormEvent) {
        e.preventDefault()
        dispatch(start())

        const form = new FormData(e.target as HTMLFormElement)
        setAmount(+form.get('amount') * 100)
        const data = {
            ref: '?',
            wlid: localStorage.getItem('wlid'),
            code: qrData,
            narration: form.get('narration'),
            amount: +form.get('amount') * 100,
            padlock: form.get('padlock')
        }

        try {
            await apiClient.post('/wallet/transfer/code', data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            document.getElementById('modalBtn')?.click()
            setShowSuccess(true)
            dispatch(stop())
        } catch (err) {
            console.info(err)
            dispatch(stop())
        }
    }

    if (showSuccess) {
        return <div className="showSuccess">
                <Lottie speed={0.5} className="lottie" loop animationData={successJson} play style={{ width: 200, height: 200 }} />
                <p>You have successfully transferred {formatMoney(1, amount)} to {accName}</p>
        </div>
    } else {
        return <div className="qrScanner">
        <Progress isAnimating={isAnimating} key={key} />
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

  
}