import React from 'react'

export default function EditModal(props) {
  return (
<div>
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Text</label>
                <input type="text" id="simpleinput" className="form-control" />
            </div>
             <div className="mb-3">
                <label htmlFor="example-email" className="form-label">Email</label>
                <input type="email" id="example-email" name="example-email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-password" className="form-label">Password</label>
                <input type="password" id="example-password" className="form-control" defaultValue="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Show/Hide Password</label>
                <div className="input-group input-group-merge">
                <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                <div className="input-group-text" data-password="false">
                    <span className="password-eye" />
                </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Placeholder</label>
                <input type="text" id="example-palaceholder" className="form-control" placeholder="placeholder" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Text area</label>
                <textarea className="form-control" id="example-textarea" rows={5} defaultValue={""} />
            </div>
            <div className="mb-3">
                <label htmlFor="example-readonly" className="form-label">Readonly</label>
                <input type="text" id="example-readonly" className="form-control" readOnly defaultValue="Readonly value" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-disable" className="form-label">Disabled</label>
                <input type="text" className="form-control" id="example-disable" disabled defaultValue="Disabled value" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-static" className="form-label">Static control</label>
                <input type="text" readOnly className="form-control-plaintext" id="example-static" defaultValue="email@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-helping" className="form-label">Helping text</label>
                <input type="text" id="example-helping" className="form-control" placeholder="Helping text" />
                <span className="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
            </div>
            <div className="mb-3">
                <label htmlFor="example-select" className="form-label">Input Select</label>
                <select className="form-select" id="example-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="example-multiselect" className="form-label">Multiple Select</label>
                <select id="example-multiselect" multiple className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="example-fileinput" className="form-label">Default file input</label>
                <input type="file" id="example-fileinput" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-date" className="form-label">Date</label>
                <input className="form-control" id="example-date" type="date" name="date" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-month" className="form-label">Month</label>
                <input className="form-control" id="example-month" type="month" name="month" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-time" className="form-label">Time</label>
                <input className="form-control" id="example-time" type="time" name="time" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-week" className="form-label">Week</label>
                <input className="form-control" id="example-week" type="week" name="week" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-number" className="form-label">Number</label>
                <input className="form-control" id="example-number" type="number" name="number" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-color" className="form-label">Color</label>
                <input className="form-control" id="example-color" type="color" name="color" defaultValue="#727cf5" />
            </div>
            <div className="mb-0">
                <label htmlFor="example-range" className="form-label">Range</label>
                <input className="form-range" id="example-range" type="range" name="range" min={0} max={100} />
            </div>

 {/*   end  of the modal  body    */}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>
</div>

  )
}
