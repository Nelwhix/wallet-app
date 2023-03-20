
export default function TransferModal() {

    return   <div className="modal fade" id="transferModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
        <div className="modal-dialog bottom-modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Transfer </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="form-group mb-3">
                        <label> Receiver <span className="ast" data-bs-toggle="tooltip" data-bs-placement="top"
                                               title="important">*</span> </label>
                        <input type="text" className="form-control fm"
                               placeholder="@username or wallet ID of beneficiary" required />
                    </div>
                    <div className="form-group mb-3 text-center">
                        <label> Enter Amount </label>
                        <input type="text" className="form-control amount" data-type="currency"
                               placeholder="₦1,000,000.00" required pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" />
                    </div>
                    <div className="form-group mb-3 text-center">
                        <button type="button" className="cusbtn ">Transfer</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
}