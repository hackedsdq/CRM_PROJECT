import React, { useEffect, useRef, useState } from 'react';
import'../../css/ProfileP.css'
import { InertiaLink, useForm } from '@inertiajs/inertia-react';

import { Inertia } from '@inertiajs/inertia';

import MasterDetailClientOpportunities from './master_details_components/MasterDetailClientOpportunities';
import HeaderContact from './static_components/HeaderContact';

function Profil({contact, client,opportunity}) {
    const { data, setData, post, processing, errors } = useForm({
        nom:"",
        prenom :"",  
        client_id:"", 
        fonction:"", 
        email :"" , 
        telephone:"", 
        photo:"",
        societe : "",
    
    })

    const [rows2, setRows2] = useState([])
    const [isRendred, setIsRendred] = useState(false)

    useEffect(()=>{
      handleGetContact()
      handleSetOpportunities()
  localStorage.setItem('contact_id',contact.id)
  localStorage.setItem('contact_pic',contact.photo)
  localStorage.setItem('contact_nom',contact.nom)
  localStorage.setItem('contact_prenom',contact.prenom)
  setIsRendred(true)
  },[])
  
    
const handleSetOpportunities = () =>{
  console.log(opportunity)
  opportunity?.map((data)=>rows2.push(
    {
      id: data.id,
      nom:data.nom,
      montant:data.montant,
      étape:data.étape,
      date_de_clôture:data.date_de_clôture
    }
  )) 
}

const  handleSubmit = (e) => {
  e.preventDefault()
 //console.log(data)

 post(`/Profile/${contact.id}`,
 {
   preserveState:true,
   preserveScroll:true,
   onSuccess:page=>{
       Inertia.reload({only:['contact','client','opportunity']})
       $('#edit-modal').hide();
       $('.modal-backdrop').remove(); 
       document.body.style.overflow = 'scroll'
   },
   onError : ()=>{
   }
 }) 
 }

 const hideModal = () =>{
  $('#edit-modal').hide();
  $('.modal-backdrop').remove(); 
  document.body.style.overflow = 'scroll'
 }


const cloudinaryRef = useRef();
const widgetRef = useRef();
let photo;
// uploading the image
cloudinaryRef.current = window.cloudinary;
widgetRef.current = cloudinaryRef.current.createUploadWidget({
cloudName: 'dbttd3n1v', 
uploadPreset: 'j5xeceeh'
}
, (error, result) => { 
if (!error && result && result.event === "success") { 
photo = result.info.url
//data.photo = photo;
// setData('photo',photo) 
setData(data.photo = photo)
console.log(result.info)
}
}
)


  
  const handleGetContact = ()=>{
    setData(data.societe = client.société)
    setData(data.nom = contact.nom)
    setData(data.prenom = contact.prenom)
    setData(data.fonction = contact.fonction.toString())
    setData(data.telephone = contact.telephone)
    setData(data.email= contact.email)
    setData(data.photo= contact.photo)

    // setData(data.societe= client.societe)
    // setData(data.client_id = client.id)
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
  
    else if(inputType === "telephone")
    setData(data.telephone = inputValue)
    else if(inputType === "societe")
    setData(data.societe = inputValue)
  
  }


return (
  <div>

      {isRendred && <HeaderContact />}
     
  

<div className="wrapper bg-white mt-sm-5">
  


<h4 className="pb-4 border-bottom">Paramètres du compte</h4>
<div className="d-flex align-items-start py-3 border-bottom">
  <img src= {data.photo} style={{
    width:"200px",
    height:"200px",
    borderRadius:"50%",
    objectFit:"contain",
    border:"4px solid #2d5070"

  }}></img>
<div className="col-xl-6" >
<div className="mb-3 mt-3 mt-xl-0"style={{marginLeft:"30px"}}>

<div onClick={()=> widgetRef.current.open()} className="dz-message needsclick">
  
<button className="btn btn-success"  >

<i className=" dripicons-cloud-upload">Télécharger</i>
</button>
</div>

</div>
</div>
</div>
<div className="row py-2">
<div className="col-md-6">
<label for="firstname">Nom</label><br/>
<span id ="textffil">{data?.nom}</span>
</div>
<div className="col-md-6 pt-md-0 pt-3">
<label for="lastname">Prénom</label>
<br/>
<span id ="textffil">  {data.prenom}</span>

</div>
</div>
<div className="row py-2">
<div className="col-md-6">
<label for="email">Email:</label><br/>
<span id ="textffil">  {data.email}</span>
</div>
<div className="col-md-6 pt-md-0 pt-3">
<label for="phone">Téléphone</label><br/>
<span id ="textffil">  {data.telephone}</span>
</div>
</div>
<div className="row py-2">
<div className="col-md-6">
<label for="email">Fonction</label><br/>
<span id ="textffil">  {data.fonction}</span>
</div>
<div className="col-md-6 pt-md-0 pt-3">
<label for="phone"> Société </label><br/>
 <span id ="textffil"> {data.societe}</span>
</div>
</div>
<div className="row py-2">
<div className="col-md-6">
<label for="email">Téléphone Société</label><br/>
<span id ="textffil">  {client.téléphone}</span>
</div>
<div className="col-md-6 pt-md-0 pt-3">
<label for="phone"> Adresse: </label><br/>
 <span id ="textffil"> {client.adresse}</span>
</div>
</div>
<div className="row py-2">
<div className="col-md-6">
</div>
<InertiaLink href={`/calendar`} >
<button type="button" className="btn btn-info"  >voir les rendez-vous (calendrier)</button>
</InertiaLink>
</div>
<hr/>

{/* edit modal Profile */}
<div id="edit-modal" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">

<div className="modal-dialog">
<div className="modal-content">
<div className="modal-body">
<div className="text-center mt-2 mb-4">
  <h1>Edit Profil</h1>
</div>
<form className="ps-3 pe-3" onSubmit={(e) => handleSubmit(e)}>



<div className="py-2" >
<div className="row py-2">
<div className="col-md-6">
<label for="firstname">Prénom</label>
<input type="text" className="bg-light form-control"id ="textffil"onChange={(e)=>handleChange(e)} value={data.nom} name="nom" placeholder="Steve"/>
</div>
<div className="col-md-6 pt-md-0 pt-3">
<label for="lastname">Nom</label>
<input type="text" className="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.prenom} name="prenom" placeholder="Smith"/>
</div>
</div>
<div className="row py-2">
<div className="col-md-6">
<label for="email">Email </label>
<input type="email" className="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.email} name="email" placeholder="steve_@email.com"/>
</div>
<div className="col-md-6 pt-md-0 pt-3">
<label for="phone">Téléphone</label>
<input type="text" className="bg-light form-control"id ="textffil"onChange={(e)=>handleChange(e)} value={data.telephone} name="telephone" placeholder="+1 213-548-6015"/>
</div>
</div>
<div className="row py-2">
<div className="col-md-6">
<label for="email">Fonction</label>
<input type="text" className="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.fonction} name="fonction" />
</div>
<div className="col-md-6 pt-md-0 pt-3">
<label>Société</label>
<input type="text" className="bg-light form-control" id ="textffil"onChange={(e)=>handleChange(e)} value={data.societe} name="societe" />
</div>
</div>
<div className="py-3 pb-4 border-bottom">
<button className="btn btn-primary mr-3" type="submit" >Sauvegarder les modifications</button> 
 <div className="btn border button" onClick={()=>hideModal()} >Annuler</div>
</div>

</div>
</form>
</div>
</div>
</div>
</div>
 <MasterDetailClientOpportunities rows={rows2}/>
 <br />
 <button type="button"  className="btn btn-info" data-bs-toggle="modal"  data-bs-target="#edit-modal">Modifier Profile</button>

</div>
</div>



);
}
export default Profil;