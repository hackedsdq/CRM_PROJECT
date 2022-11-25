import React from "react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";

export default function ShowEditProduit({produits,type}) {
    const { data, setData, post, processing, errors } = useForm({
        nom: "",
        description: "",
        prix: "",
        quantité: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(`/adcom/produits/update/${produits.id}`);
    };

     useEffect(()=>{
        //console.log(produits.nom)

     handleGetProduit()
      },[])
     
      

const handleGetProduit = ()=>{
    //console.log(data.nom = produits.prix )
   setData((data.nom = produits.nom))
   setData((data.description = produits.description))
   setData((data.prix = produits.prix.toString()))
   setData((data.quantité = produits.quantité.toString()))

  }
    const handleChange = (e) => {
        let inputType = e.target.name;
        let inputValue = e.target.value;

        if (inputType == "nom") setData((data.nom = inputValue));
        else if (inputType == "description")
            setData((data.description = inputValue));
        else if (inputType == "prix") setData((data.prix = inputValue));
        else if (inputType == "quantité")
            setData((data.quantité = inputValue));
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="modal-content">
            <div className="modal-body">
                            {/* bodyyyyy of the modal */}

                <div className="mb-3">
                   <label htmlFor="simpleinput"className="form-label" > Name </label>
                   <input disabled={type==="edit" ? false : true }onChange={(e) => handleChange(e)} value={data.nom} name="nom" type="text" className="form-control"/>
                    {errors.nom && (<h6 style={{ color: "red" }}> {errors.nom}</h6>)}
                </div>
                <div className="mb-3">
                     <label htmlFor="example-textarea" className="form-label">  Description </label>
                     <textarea disabled={type==="edit" ? false : true } onChange={(e) => handleChange(e)} value={data.description} name="description" className="form-control" id="example-textarea" rows={5} defaultValue={""} placeholder="Adress..."/>
                     {errors.description && ( <h6 style={{ color: "red" }}> {errors.description} </h6>)}
                </div>
               <div class="col-xl-6">
                    <div class="mb-3 mt-3 mt-xl-0">
                      <label for="projectname" class="mb-0"> Photo </label>
                      <p class="text-muted font-14"> Recommended thumbnail size 800x400 (px).</p>

                      <div class="dropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                            <div> 
                                <input name="file" type="file" />
                             </div>

                            <div class="dz-message needsclick">
                                <i class="h3 text-muted dripicons-cloud-upload"></i>
                                    <h4> Drop files here or click toupload.
                                    </h4>
                             </div>
                         </div>
                      </div>
                </div>
                <div className="mb-3">
                     <label htmlFor="simpleinput"  className="form-label" >Price </label>
                     <input disabled={type==="edit" ? false : true }  onChange={(e) => handleChange(e)} value={data.prix} name="prix" type="number" className="form-control"/>
                      {errors.prix && ( <h6 style={{ color: "red" }}> {errors.prix} </h6> )}
                </div>
                <div className="mb-3">
                    <label htmlFor="simpleinput" className="form-label" > Quantity </label>
                    <input disabled={type==="edit" ? false : true } onChange={(e) => handleChange(e)} value={data.quantité} name="quantité" type="text" className="form-control" />
                     {errors.quantité && ( <h6 style={{ color: "red" }}>  {errors.quantité}</h6> )}
                </div>
                            {/* end of the modal body */}
                </div>
                    <div className="modal-footer">
                      <InertiaLink href="/adcom/produits"> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close </button></InertiaLink>
                       <button disabled={type==="edit" ? false : true }  type="submit" className="btn btn-primary">
                                Save changes
                        </button>
                        </div>
                    </div>
                    {/* /.modal-content */}
                {/* /.modal-dialog */}
           
        </form>
     
    );
}
