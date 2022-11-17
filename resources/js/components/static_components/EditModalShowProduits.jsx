
import React from 'react'

export default function EditModalShowProduits(props) {
  return (
<div>
<div class="modal fade" id="full-width-modal"  tabindex="-1" role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-full-width">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="fullWidthModalLabel">Details Produit</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
            </div>
            <div>
                <table center>
                    <tr center>
                    <td><b>Name:</b></td>
                    </tr>
                    <tr>
                    <td><b>Description:</b></td>
                    </tr>
                    <tr>
                    <td><b>Photo: (Affichage)</b></td>
                    </tr>
                    <tr>
                    <td><b>Price:</b></td>
                    </tr>
                    <tr>
                    <td><b>Quantity:</b></td>
                    </tr>
                    
                </table>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div></div>
  )
}