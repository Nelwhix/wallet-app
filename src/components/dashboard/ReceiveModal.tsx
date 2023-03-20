
export default function ReceiveModal({ url }: RecModalProps) {
    return <div className="modal fade" id="receiveModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Receive </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="form-group mb-3">
                        <h4 className="text-center"> Scan </h4>
                    </div>
                    <div className="form-group mb-3 text-center">
                        <img src={url} width="200" />
                    </div>

                </div>
            </div>
        </div>
    </div>
}

interface RecModalProps {
    url: string
}