import React from 'react'

export default function EditModalClient(props) {
  return (
<div>
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Add Client</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

        
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Society</label>
                <input type="text"  className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Client</label>
                <input type="text"  className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Telephone</label>
                <input type="text" className="form-control" placeholder="Telephone" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Adress</label>
                <textarea className="form-control" id="example-textarea" rows={5} defaultValue={""} placeholder="Adress..."  />
            </div>
            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Website</label>
                <input type="text" className="form-control" placeholder="Https://" />
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
