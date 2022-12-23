import React,{useEffect, useState,useRef} from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import SideBar from './static_components/SideBar'
import Header from './static_components/Header'

export default function ShowEditContact({contact,type})  {


  const { data, setData, post, processing, errors } = useForm({
    nom:"test",
    prenom :"",  
    fonction:"", 
    email :"" , 
    telephone:"", 
    photo:""
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
//console.log(data)
post(`/adcom/contacts/update/${contact.id}`) 
}

useEffect(()=>{
  handleGetContact()
},[])


const handleGetContact = ()=>{
  setData(data.nom = contact.nom)
  setData(data.prenom = contact.prenom)
  setData(data.fonction = contact.fonction)
  setData(data.email = contact.email)
  setData(data.photo = contact.photo)
  setData(data.telephone = contact.telephone.toString())
}

const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value

  if( inputType === "nom")
  setData(data.nom = inputValue )

  else if(inputType === "prenom")
  setData(data.prenom = inputValue)

  else if(inputType === "fonction")
  setData(data.fonction = inputValue)

  else if(inputType === "email")
  setData(data.email = inputValue)

  else if(inputType === "téléphone")
  setData(data.telephone = inputValue)

  else if(inputType === "password")
  setData(data.password = inputValue)
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

    {/*   bodyyyyy of the modal    */}
              <div style={{textAlign:"center"}}>
              {type==="edit" && <i onClick={()=> widgetRef.current.open()} style={{position:"relative", top:-10,right:10 }} className='mdi mdi-square-edit-outline'></i>}             
              <img style={{backgroundColor:"black", borderRadius:40, width:80}} src={data.photo} alt='' />
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
                    <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data.telephone} name="téléphone" type="text" className="form-control" placeholder="Telephone" />
                    {errors.telephone && <h6 style={{color:"red"}}>{errors.telephone}</h6>}
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

