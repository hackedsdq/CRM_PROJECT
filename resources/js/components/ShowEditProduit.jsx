import React from "react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import { useEffect, useRef } from "react";
import SideBar from "./static_components/SideBar";
import Header from "./static_components/Header";

export default function ShowEditProduit({produits,type}) {
    const { data, setData, post, processing, errors } = useForm({
        nom: "",
        description: "",
        prix: "",
        quantité: "",
        photo:"",
    });


    const cloudinaryRef = useRef();
    const widgetRef = useRef();
     // uploading the image
     cloudinaryRef.current =  window.cloudinary;
     widgetRef.current = cloudinaryRef.current.createUploadWidget({
       cloudName: 'dbttd3n1v', 
       uploadPreset: 'j5xeceeh'
     }
       , (error, result) => { 
         if (!error && result && result.event === "success") { 
         let photo = result.info.thumbnail_url
         setData(data.photo = photo) 
         console.log(result.info)
         }
       }
     )
    

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
    //console.log(produits.photo)
    //console.log(data.nom = produits.prix )
   setData((data.nom = produits.nom))
   setData((data.description = produits.description))
   setData((data.prix = produits.prix.toString()))
   setData((data.quantité = produits.quantité))
   setData((data.photo = produits.photo))

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
<div className='wrapper' >
<SideBar />
<Header />
    <div className="container-login100">
	<div className="wrap-login100">
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="modal-content">
            <div className="modal-body">
                            {/* bodyyyyy of the modal */}
                <div style={{textAlign:"center"}}>
                { type==="edit" && <i onClick={()=> widgetRef.current.open()} style={{position:"relative", top:-10,right:10 }} className='mdi mdi-square-edit-outline'></i>}            <img className="me-3 rounded-circle" style={{objectFit:'contain'}} width={80} height={80} src={data.photo} alt='' />
                </div>

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
                       { type==="edit" && <button type="submit" className="btn btn-primary">Mise à jour</button>}
                        </div>
                    </div>
                    {/* /.modal-content */}
                {/* /.modal-dialog */}
           
        </form>
        </div>
        </div>
</div>
    );
}
