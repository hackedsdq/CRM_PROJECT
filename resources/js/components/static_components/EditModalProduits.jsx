import React from 'react'

export default function EditModalProduits(props) {
  return (
<div>
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Add Products</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

        
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Name</label>
                <input type="text"  className="form-control" />
            </div>
          
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Description</label>
                <textarea className="form-control" id="example-textarea" rows={5} defaultValue={""} placeholder="Adress..."  />
            </div>   
          
            <div className="add_grp_image_div margin_bottom">
              <img src={img_upload} className="add_grp_image"/>
                 <input type="file" className="filetype"/>
                <span className="small_font to_middle">Add image</span>
                           <img id="target"/>
            </div>
           
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Price</label>
                <input type="text"  className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Quantity</label>
                <input type="text"  className="form-control" />
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
