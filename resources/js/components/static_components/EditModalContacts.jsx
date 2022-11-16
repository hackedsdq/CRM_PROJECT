import React from 'react'

export default function EditModalContacts(props) {
  return (
<div>
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Add Contacts</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

        
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">First Name</label>
                <input type="text"  className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Last Name</label>
                <input type="text"  className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Telephone</label>
                <input type="text" className="form-control" placeholder="Telephone" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Email</label>
                <textarea className="form-control"  placeholder="Adress..."  />
            </div>
            <div className="mb-3">
                <label htmlFor="example-password" className="form-label">Password</label>
                <input type="password" className="form-control" defaultValue="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Client</label>
                <input type="text" className="form-control"  />
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
