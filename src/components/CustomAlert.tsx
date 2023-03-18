import Alert from 'react-bootstrap/Alert'

export default function CustomAlert({ onDismiss, show, errMsg, variant }: CustomAlertProps) {

    if (show) {
        return <Alert key={variant} variant={variant} onClose={onDismiss} dismissible>
            {errMsg}
       </Alert>
    }

    return <div></div>
}

interface CustomAlertProps {
    onDismiss: () => void,
    show: boolean,
    errMsg: string,
    variant: string
}