import React from 'react';
import {useForm}  from "@inertiajs/inertia-react"


export default function EditModalContacts(props) {
  const { data, setData, post, processing, errors } = useForm({
    nom: "",
    prenom :"",  
    password:'', 
    email : "" , 
    téléphone:'',
    fonction:""
})
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
  setData(data.téléphone = inputValue)

  else if(inputType === "fonction")
  setData(data.adresse = inputValue)

}
/*by soundouss*/
/* const navigate = useNavigate();

  const { id } = useParams()

  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword]=useState("")
  const [fonction,setFonction]=useState("")
  const [telephone,setTelephone]=useState("")
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchContacts()
  },[])

  const fetchContact = async () => {
    await axios.get(`adcom/contacts/${id}`).then(({data})=>{
      const { nom, prenom,email,password,fonction,telephone } = data.product
      setNom(nom)
      setPrenom(prenom)
      setEmail(email)
      setPassword(password)
      setFonction(fonction)
      setTelephone(telephone)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const updateContacts = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('nom', nom)
    formData.append('prenom', prenom)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('fonction', fonction)
    formData.append('telephone', telephone)

    await axios.post(`adcom/contacts/${id}`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }
*/
  return (
<div>
<div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="scrollableModalTitle">Add Contacts</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
      </div>
      <div className="modal-body">
 
 {/*   bodyyyyy of the modal    */}

        
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">First Name</label>
                <input type="text"  className="form-control" onChange={(e)=>handleChange(e)} value={data.nom} name="nom"/>
            </div>
            <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">Last Name</label>
                <input type="text"  className="form-control" onChange={(e)=>handleChange(e)} value={data.prenom} name="prenom"/>
            </div>
            <div className="mb-3">
                <label htmlFor="example-palaceholder" className="form-label">Telephone</label>
                <input type="text" className="form-control" placeholder="Telephone"onChange={(e)=>handleChange(e)} value={data.téléphone} name="téléphone" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-textarea" className="form-label">Email</label>
                <textarea className="form-control"  placeholder="Adress..." onChange={(e)=>handleChange(e)} value={data.email} name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="example-password" className="form-label">Password</label>
                <input type="password" className="form-control" defaultValue="password" onChange={(e)=>handleChange(e)} value={data.password} name="password"/>
            </div>
           
            
          
            
           
          

 {/*   end  of the modal  body    */}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>{/* /.modal-content */}
  </div>{/* /.modal-dialog */}
</div>
</div>

  )
}
