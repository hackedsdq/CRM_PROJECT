import React from 'react';

function DeleteModal(props) {
    return (
<div id="fill-danger-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="fill-danger-modalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content modal-filled bg-danger">
      <div className="modal-header">
        <h4 className="modal-title" id="fill-danger-modalLabel">Danger Filled Modal</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-outline-light">Save changes</button>
      </div>
    </div>
  </div>
</div>

    );
}

export default DeleteModal;