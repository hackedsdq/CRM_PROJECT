import React,{useEffect,useRef} from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import SideBar from './static_components/SideBar'
import Header from './static_components/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { usePage } from '@inertiajs/inertia-react'


export default function ShowEditProspect({prospect,type})  {
  let {flash} = usePage().props;
  const notify = (message) => toast(message);

  const { data, setData, post, processing, errors } = useForm({
    nom: "",
    prenom :"", 
    société: '', 
    fonction:'', 
    email : "" , 
    téléphone:'', 
    adresse:'', 
    site_web:'', 
    Statut:"", 
    Source:"",
    photo:"",
    logo:""
})

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

const  handleSubmit = (e) => {
 e.preventDefault()
console.log(data)
post(`/adcom/prospects/update/${prospect.id}`,{
  preserveState:true
}) 
}

useEffect(()=>{

  if(flash.message === null)
  handleGetProspect()
  else
  notify(flash.message);
},[flash])


const handleGetProspect = ()=>{
  setData(data.nom = prospect?.nom )
  setData(data.prenom = prospect?.prenom)
  setData(data.société = prospect?.société)
  setData(data.fonction = prospect?.fonction)
  setData(data.email = prospect?.email)
  setData(data.téléphone = prospect?.téléphone)
  setData(data.adresse = prospect?.adresse)
  setData(data.site_web = prospect?.site_web)
  setData(data.Statut = prospect?.Statut)
  setData(data.Source = prospect?.Source)
  setData(data.photo = prospect?.photo)
  setData(data.logo = prospect?.logo)
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

  else if(inputType === "Statut"){
    console.log(e.target.value)
    setData(data.Statut = `${e.target.value}`)
  }

  else if(inputType === "Source")
  setData(data.Source = inputValue)
}



return (
  <div className='wrapper' >
  <SideBar />
  <Header />
<div className="container-login100">
	<div className="wrap-login100">

  <form onSubmit={(e)=>handleSubmit(e)} >
    <div className="modal-content">
      <div className="modal-body">
 
      <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="rounded-0 p-0 mb-0">
          <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="/adcom">Home</a></li>
            <li class="breadcrumb-item"><a href="/adcom/prospects">Prospects</a></li>
            <li class="breadcrumb-item active" aria-current="page">Prospect</li>
          </ol>
        </nav>
      </div>
    </div>
 {/*   bodyyyyy of the modal    */}
            <div style={{textAlign:"center"}}>
            { type==="edit" && <i onClick={()=> widgetRef.current.open()} style={{position:"relative", top:-10,right:10 }} className='mdi mdi-square-edit-outline'></i>}            <img style={{backgroundColor:"black", borderRadius:40, width:80}} src={data.photo} alt='' />
            </div>

            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Nom</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.nom} name="nom"  type="text" className="form-control" />
                {errors.nom && <h6 style={{color:"red"}}>{errors.nom}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Prenom</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.prenom} name="prenom" type="text" className="form-control" />
                {errors.prenom && <h6 style={{color:"red"}}>{errors.prenom}</h6>}

            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Société</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.société} name="société" type="text"  className="form-control" />
                {errors.société && <h6 style={{color:"red"}}>{errors.société}</h6>}

            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Fonction</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.fonction} name="fonction" type="text"  className="form-control" />
                {errors.fonction && <h6 style={{color:"red"}}>{errors.fonction}</h6>}
            </div>

           <div className="mb-3">
                <label htmlFor="example-email" className="form-label">Email</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.email} name="email" type="email" className="form-control" placeholder="Email" />
                {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Téléphone</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.téléphone} name="téléphone" type="text" className="form-control" placeholder="Telephone" />
                {errors.téléphone && <h6 style={{color:"red"}}>{errors.téléphone}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Adresse</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.adresse} name="adresse" type="text" className="form-control" placeholder="Adresse" />
                {errors.adresse && <h6 style={{color:"red"}}>{errors.adresse}</h6>}
            </div>
            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Site_Web</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.site_web} name="site_web" type="text" className="form-control" placeholder="Https://" />
                {errors.site_web && <h6 style={{color:"red"}}>{errors.site_web}</h6>}
            </div>

            <div className="mb-3">
                <label htmlFor="example-Website" className="form-label">Source</label>
                <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.Source} name="Source" type="text" className="form-control" placeholder="Source" />
                {errors.Source && <h6 style={{color:"red"}}>{errors.Source}</h6>}
            </div>
            
            <div className="mb-3">
                <label htmlFor="example-select" className="form-label">Statut</label>
                <select disabled={type==="edit" ? false : true } onChange={e => handleChange(e)} value={data.Statut} name="Statut" className="form-select" id="example-select">
                  <option value="chaud">Hot</option>
                  <option value="froid">Cold</option>
                </select>
            </div>
    
 {/*   end  of the modal  body    */}

      </div>
      <div className="modal-footer">
        { type==="edit" && <button type="submit" className="btn btn-primary">Mise à jour</button>}
      </div>


    </div>{/* /.modal-content */}

</form>
</div>
</div>
</div>

  )
}

