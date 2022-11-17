
import React from 'react'

export default function EditModalShowProspects(props) {
  return (
<div>
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#bs-example-modal-lg">Large Modal</button>
<div class="modal fade" id="bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Details Prospects</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
            </div>
     
            <div>
                <table center>
                    <tr center>
                    <td><b>Last Name:</b></td>
                    </tr>
                    <tr>
                    <td><b>First Name:</b></td>
                    </tr>
                    <tr>
                    <td><b>Email:</b></td>
                    </tr>
                    <tr>
                    <td><b>Fonction:</b></td>
                    </tr>
                    <tr>
                    <td><b>Telephone:</b></td>
                    </tr>
                    <tr>
                    <td><b>Adress:</b></td>
                    </tr>
                    <tr>
                    <td><b>Status:</b></td>
                    </tr>
                    <tr>
                    <td><b>Source:</b></td>
                    </tr>
                </table>
            </div>
         
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div></div>
  )
}