

export default function TransferWithUserName({ handleSubmit }: TWUProps) {

    return <div className="modal fade" id="transferModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                aria-hidden="true">
        <div className="modal-dialog bottom-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Transfer </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label> Description </label>
                            <input name={'narration'} type="text" className="form-control fm" required />
                        </div>
                        <div className="form-group mb-3">
                            <label> Receiver  </label>
                            <input name={'username'} type="text" className="form-control fm"
                                   placeholder="@username of beneficiary" required />
                        </div>
                        <div className="form-group mb-3">
                            <label> Enter Amount </label>
                            <input name={'amount'} type="text" className="form-control fm" data-type="currency"
                                   placeholder="₦1,000,000.00" required  />
                        </div>
                        <div className="form-group mb-3">
                            <label> Padlock </label>
                            <input name={'padlock'} type="number" className="form-control fm" required />
                        </div>
                        <div className="form-group mb-3 text-center">
                            <button type="submit" className="cusbtn ">Transfer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

interface TWUProps {
    handleSubmit: () => void
}