export default function Toast({message}: Toast) {
    return (
        <div className="toast">
            {message}
        </div>
    )
}

type Toast = {
    message: string
}