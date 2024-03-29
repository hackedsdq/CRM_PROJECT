import React,{useEffect,useRef} from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import { Inertia } from '@inertiajs/inertia'



export default function AddModalProspect(props) {

  const { data, setData, post, processing, errors } = useForm({
    nom: "",
    prenom :"", 
    société: '', 
    fonction:'', 
    email : "" , 
    téléphone:'', 
    adresse:'', 
    site_web:'', 
    Statut:"chaud", 
    Source:"Web",
    logo:"https://res.cloudinary.com/dbttd3n1v/image/upload/v1671478713/snernvqpxpnxpjt3owmn.jpg",
    photo:"https://res.cloudinary.com/dbttd3n1v/image/upload/v1671478713/snernvqpxpnxpjt3owmn.jpg"
})

const handleInitProspect = () =>{
  setData(
    {
      nom: "",
      prenom :"", 
      société: '', 
      fonction:'', 
      email : "" , 
      téléphone:'', 
      adresse:'', 
      site_web:'', 
      Statut:"chaud", 
      Source:"Web",
      logo:"https://res.cloudinary.com/dbttd3n1v/image/upload/v1671478713/snernvqpxpnxpjt3owmn.jpg",
      photo:"https://res.cloudinary.com/dbttd3n1v/image/upload/v1671478713/snernvqpxpnxpjt3owmn.jpg"
  }
  )
}

const cloudinaryRef = useRef();
const widgetRef = useRef();

const cloudinaryRef2 = useRef();
const widgetRef2 = useRef();

  let logo;
  let photo;
  // uploading the image
  cloudinaryRef.current =  window.cloudinary;
  widgetRef.current =  cloudinaryRef.current.createUploadWidget({
    cloudName: 'dbttd3n1v', 
    uploadPreset: 'j5xeceeh'
  }
    , (error, result) => { 
      if (!error && result && result.event === "success") { 
          photo = result.info.thumbnail_url
          //data.photo = photo;
          setData('photo',photo) 
      console.log(result.info)
      }
  }
  )
  // uploading the logo
  cloudinaryRef2.current =  window.cloudinary;
   widgetRef2.current =  cloudinaryRef2.current.createUploadWidget({
    cloudName: 'dbttd3n1v', 
    uploadPreset: 'j5xeceeh'
  }
    , (error, result) => { 
      if (!error && result && result.event === "success") { 
      logo = result.info.thumbnail_url
      //data.logo = logo
      //setData('logo', logo) 
      setData('logo',logo) 

      console.log(result.info)
      }
  }
  )


const handleSubmit = (e) => {
e.preventDefault()
console.log(data)
post('/adcom/prospects',{
  preserveState:true,
            onSuccess:page=>{
                Inertia.reload({only:['prospects', 'message']})
                $('#scrollable-modal').hide();
                $('.modal-backdrop').remove(); 
                document.body.style.overflow = 'scroll'
                handleInitProspect()
            },
});
}


const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value
  if( inputType === "nom")
  setData(data.nom = inputValue )

  else if(inputType === "prenom")
  setData(data.prenom = inputValue)

  else if(inputType === "société")
  setData(data.société = inputValue)

  else if(inputType === "fonction")
  setData(data.fonction = inputValue)

  else if(inputType === "email")
  setData(data.email = inputValue)

  else if(inputType === "téléphone")
  setData(data.téléphone = inputValue)

  else if(inputType === "adresse")
  setData(data.adresse = inputValue)

  else if(inputType === "site_web")
  setData(data.site_web = inputValue)

  else if(inputType === "Statut")
  setData(data.Statut = `${e.target.value}`)

  else if(inputType === "Source")
  setData(data.Source = inputValue)
}


return (
<form onSubmit={(e)=>handleSubmit(e)} >
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Ajouter un prospect
</h5>
        <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>


      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}
            <div   className="mb-3">
                {data.photo !== "" && <><img  style={{backgroundColor:"black", borderRadius:40, width:80}} src={data.photo}  alt="" /><i onClick={()=> widgetRef.current.open()}  style={{position:"relative", top:-10,left:10 }} className='mdi mdi-square-edit-outline'></i></>}
            </div>

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Nom</label>
                <input onChange={(e)=>handleChange(e)} value={data.nom} name="nom"  type="text" className="form-control" />
                {errors.nom && <h6 style={{color:"red"}}>{errors.nom}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Prenom</label>
                <input onChange={(e)=>handleChange(e)} value={data.prenom} name="prenom" type="text" className="form-control" />
                {errors.prenom && <h6 style={{color:"red"}}>{errors.prenom}</h6>}

            </div>

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Fonction</label>
                <input onChange={(e)=>handleChange(e)} value={data.fonction} name="fonction" type="text"  className="form-control" />
                {errors.fonction && <h6 style={{color:"red"}}>{errors.fonction}</h6>}
            </div>

           <div className="mb-3">
                <label htmlFor="example-email" className="form-label">Email</label>
                <input onChange={(e)=>handleChange(e)} value={data.email} name="email" type="email" className="form-control" placeholder="Email" />
                {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Téléphone</label>
                <input onChange={(e)=>handleChange(e)} value={data.téléphone} name="téléphone" type="text" className="form-control" placeholder="Telephone" />
                {errors.téléphone && <h6 style={{color:"red"}}>{errors.téléphone}</h6>}
            </div>
            
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Société</label>
                <input onChange={(e)=>handleChange(e)} value={data.société} name="société" type="text"  className="form-control" />
                {errors.société && <h6 style={{color:"red"}}>{errors.société}</h6>}

            </div>

            <div class="col-xl-6">
                                <div class="mb-3 mt-3 mt-xl-0">
                                    <label for="projectname" class="mb-0">
                                    Logo Société

                                    </label>
                                    <p class="text-muted font-14">
                                        Taille de vignette recommandée 800x400 (px).
                                    </p>

                                    <div
                                        class="dropzone"
                                        data-plugin="dropzone"
                                        data-previews-container="#file-previews"
                                        data-upload-preview-template="#uploadPreviewTemplate"
                                        style={{textAlign:"center",alignItems:"center"}}
                                    >


                                        <div  onClick={()=> widgetRef2.current.open()} class="dz-message needsclick">
                                            <i class="h3 text-muted dripicons-cloud-upload"></i>
                                            <h4>
                                                Déposez les fichiers ici ou cliquez pour
                                                télécharger.
                                            </h4>
                                        </div>
                                        <img style={{height:50,width:50, borderRadius:50}} src={data.logo}  alt="" />

                                    </div>
                                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Adresse</label>
                <input onChange={(e)=>handleChange(e)} value={data.adresse} name="adresse" type="text" className="form-control" placeholder="Adresse" />
                {errors.adresse && <h6 style={{color:"red"}}>{errors.adresse}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Site_Web</label>
                <input onChange={(e)=>handleChange(e)} value={data.site_web} name="site_web" type="text" className="form-control" placeholder="Https://" />
                {errors.site_web && <h6 style={{color:"red"}}>{errors.site_web}</h6>}
            </div>

            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Source</label>
                <select onChange={e => handleChange(e)} value={data.Source} name="Source" className="form-select" id="example-select">
                  <option value="chaud">Web</option>
                  <option value="froid">Téléphone</option>
                  <option value="froid">Partenaire</option>
                  <option value="froid">Autre</option>
                </select>
                {errors.Source && <h6 style={{color:"red"}}>{errors.Source}</h6>}
            </div>
            
            <div className="mb-3">
                <label htmlFor="example-select" className="form-label">Statut</label>
                <select onChange={e => handleChange(e)} value={data.Statut} name="Statut" className="form-select" id="example-select">
                  <option value="chaud">Hot</option>
                  <option value="froid">Cold</option>
                </select>
            </div>
    
 {/*   end  of the modal  body    */}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="submit" className="btn btn-primary" >Ajouter prospects</button>
      </div>


    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}

</div>
</form>

  )
}
