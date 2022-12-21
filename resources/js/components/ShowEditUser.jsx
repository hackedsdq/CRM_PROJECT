import React,{useState,useEffect,useRef} from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import SideBar from './static_components/SideBar';
import Header from './static_components/Header';
import "../../css/app.css"


function ShowEditUser({type,user}) {

  const { data, setData, post, processing, errors } = useForm({
    name: "",
    prenom: "",
    photo: "",
    email: ""
});

const cloudinaryRef = useRef();
const widgetRef = useRef();


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    post(`/adcom/users/update/${user.id}`);
};

 useEffect(()=>{
console.log(user)
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
              <i onClick={()=> widgetRef.current.open()} style={{position:"relative", top:-10,right:10 }} className='mdi mdi-square-edit-outline'></i>
              {data.photo.length > 0 && <img style={{backgroundColor:"black", borderRadius:40}} src={data.photo} alt='' />}
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
                  <label htmlFor="simpleinput" className="form-label">email</label>
                  <input style={{height:57}} disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.email} name="email" type="text" className="form-control" />
                  {errors.email && <h6 style={{color:"red"}}>{errors.email}</h6>}
              </div>

              </div>

                  {/*errors.client_id && <h6 style={{color:"red"}}>{errors.client_id}</h6>*/}
    </div>


  {/*   end  of the modal  body    */}

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
        </div>

  </form> 
</div>
</div> 
</div> 

);
}

export default ShowEditUser;
