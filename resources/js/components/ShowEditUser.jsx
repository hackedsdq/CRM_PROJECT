import React,{useState,useEffect,useRef} from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import SideBar from './static_components/SideBar';
import Header from './static_components/Header';


function ShowEditUser({type,user}) {

  const { data, setData, post, processing, errors } = useForm({
    name: "",
    prenom: "",
    photo: "",
    email: "",
    password: undefined,
});

const cloudinaryRef = useRef();
const widgetRef = useRef();
 // uploading the image
 cloudinaryRef.current =  window.cloudinary;
 widgetRef.current = cloudinaryRef.current.createUploadWidget({
   cloudName: 'dbttd3n1v', 
   uploadPreset: 'j5xeceeh',
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
    post(`/adcom/users/update/${user.id}`);
};

 useEffect(()=>{
//console.log(user)
 handleGetUser(user)
  },[])
 
  

const handleGetUser = (user)=>{
//console.log(data.name = produits.prix )
setData((data.name = user.name))
setData((data.prenom = user.prenom))
setData((data.photo = user.photo))
setData((data.email = user.email))
}
const handleChange = (e) => {
    let inputType = e.target.name;
    let inputValue = e.target.value;

    if (inputType == "name") 
      setData((data.name = inputValue));
    else if (inputType == "prenom")
      setData((data.prenom = inputValue));
    else if (inputType == "email")
      setData((data.email = inputValue));
    else if (inputType == "password")
    setData((data.password = inputValue));
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
            <li class="breadcrumb-item"><a href="/adcom/users">Utilisateurs</a></li>
            <li class="breadcrumb-item active" aria-current="page">Utilisateur</li>
          </ol>
        </nav>
      </div>
    </div>
  {/*   bodyyyyy of the modal    */}

              <div style={{textAlign:"center"}}>
              {type==="edit" && <i onClick={()=> widgetRef.current.open()} style={{position:"relative", top:-10,right:10 }} className='mdi mdi-square-edit-outline'></i>}<img className="me-3 rounded-circle" style={{objectFit:'contain'}} width={80} height={80} src={data.photo} alt='' />
              </div>

              <div className="mb-3">
                  <label htmlFor="simpleinput" className="form-label">Nom</label>
                  <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.name} name="name"  type="text" className="form-control" />
                  {errors.name && <h6 style={{color:"red"}}>{errors.name}</h6>}
              </div>
              <div className="mb-3">
                  <label htmlFor="simpleinput" className="form-label">Prenom</label>
                  <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.prenom} name="prenom" type="text" className="form-control" />
                  {errors.prenom && <h6 style={{color:"red"}}>{errors.prenom}</h6>}
              </div>


              <div className="mb-3">
                  <label htmlFor="simpleinput" className="form-label">Email</label>
                  <input style={{height:57}} disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.email} name="email" type="text" className="form-control" />
                  {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}
              </div>

             { type === "edit" && <div className="mb-3">
                  <label htmlFor="simpleinput"className="form-label">Mot de passe</label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={data.password}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                />
                                {errors.password && (
                                    <h6 style={{ color: "red" }}>
                                        {errors?.password}
                                    </h6>
                                )}
                  </div>}
              </div>

                  {/*errors.client_id && <h6 style={{color:"red"}}>{errors.client_id}</h6>*/}
    </div>


  {/*   end  of the modal  body    */}

        <div className="modal-footer">
          { type==="edit" && <button type="submit" className="btn btn-primary">Mise à jour</button>}
        </div>

  </form> 
</div>
</div> 
</div> 

);
}

export default ShowEditUser;
