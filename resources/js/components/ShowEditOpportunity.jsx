import React,{useEffect, useState} from 'react'
import {useForm}  from "@inertiajs/inertia-react"

import MasterDetailOpportunityProducts from "./master_details_components/MasterDetailOpportunityProducts"
import { Autocomplete, TextField } from '@mui/material'
import { Inertia } from '@inertiajs/inertia'
import {
  pdf,
  Document,
  Page,
  Image,
  StyleSheet,View, Text
} from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import logoreactfac from'../../../public/assets/images/logoreactfac.png';
import { render } from 'react-dom'
import InvoiceNo from './table/InvoiceNo'
import InvoiceTableHeader from './table/InvoiceTableHeader'
import InvoiceTableRow from './table/InvoiceTableRow'
import InvoiceTableBlankSpace from './table/InvoiceTableBlankSpace'
import InvoiceTableFooter from './table/InvoiceTableFooter'
import InvoiceThankYouMsg from './table/InvoiceThankYouMsg'
import BillTo from './table/BillTo'
import SideBar from './static_components/SideBar'
import Header from './static_components/Header'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';




export default function ShowEditOpportunity({client,opportunity,type,products,opportunityProducts})  {
  let [filtredProducts, setFiltredProducts]=useState([])
  let [opp, setOpp]=useState(opportunity?.id)
  const { data, setData, post, processing, errors } = useForm({
    nom:"",
    montant :"",  
    client_id:"", 
    date_de_clôture :"" , 
    étape:"",
    product_id:"",
    prix:"",
    quantité:"",
    opportunity_id:"",
})
const [rows, setRows] = useState([])

const [open, setOpen] = useState(false);




useEffect(()=>{
  console.log(client)
  if(data?.nom === "")
  handleSetOpportunity()
  handleFilterProducts(products)
  handleSetProducts()
  handleSeoducts()
},[products])


const handleDelete = () =>{
Inertia.delete(`/adcom/opprtunities/edit/${opportunity.id}`)
}

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


const  handleSubmit = (e) => {
 e.preventDefault()
console.log(data)
post(`/adcom/opportunity/edit`,{
  preserveState:false,
  preserveScroll : true,
  onSuccess:page=>{
    Inertia.reload({only:['opportunities_one']})
}}) 
}
const handleFilterProducts=(products)=>{
  let filtred;
   //setFiltredClients([])
   if(products !== undefined){
    filtred = products.map((client)=>(filtredProducts.filter(data => data.label === client.nom)))
    if(filtred.length !== 0){
    for(let i=0;i<filtred.length;i++){
      if(filtred[i].length===0){
        filtredProducts.push({ label: `${products[i].nom}`, prix:products[i].prix, id:products[i].id, quantité:products[i].quantité,})
      }
    }
  }
} 
}
const handleSetOpportunity = ()=>{
  setData(data.nom = opportunity?.nom)
  setData(data.montant = opportunity?.montant)
  setData(data.client_id = opportunity?.client_id)
  setData(data.date_de_clôture = opportunity?.date_de_clôture)
  setData(data.étape = opportunity?.étape)
  setData(data.opportunity_id = opp.toString())
/*   setData(data.prix = "15")
  setData(data.quantité = "4") */
}
const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value

  if( inputType === "nom")
  setData(data.nom = inputValue )

  else if(inputType === "montant")
  setData(data.montant = inputValue)

  else if(inputType === "étape"){
    console.log(inputValue)
    setData(data.étape = inputValue)
  }

  else if(inputType === "quantité")
  setData(data.quantité = inputValue)
}
const handleSearchProduct= (product) =>{
  console.log(opp)
    if(product !== "" && opp !==undefined)
  Inertia.post(`/adcom/opportunities/edit/${opp}`,
  {
    product : product
  },
  {
    preserveScroll : true
  })
}

const handleChangeAutoComplete = (value) =>{
if(value !== null){
  let product_id = value.id.toString();
  setData(data.product_id = `${product_id}`)
}
//console.log(product_id)
}
const addProduct = async() =>{
  if(data?.product_id !== "" && opp !==undefined ){
    let opport = opp;
    await Inertia.post(`/adcom/opprtunities/edit/${opp}`,{
      product_id : data?.product_id,
      quantité: data?.quantité,
    },{
      preserveState:false
    })
   
  }
}
const  createData = (id, nom, description, prix, quantité, photo, opportunity_id) => {
  return{
    id,
    nom,
    description,
    prix,
    quantité,
    photo,
  };
}

const handleSetProducts = () =>{
  console.log(opportunityProducts)
  opportunityProducts?.map((data)=> {rows.push(
    createData(data.id, data.nom, data.description, data.prix, data.quantité, data.photo)
  );
})
/*   createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356) */
}

const handleSeoducts = () =>{
  console.log(client)
}
const delay = (t) => new Promise((resolve)=> setTimeout(resolve, t));


async function getProp (){
  await delay(1_000);
  return ({
   som:  'yess'
  });
}
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft:60,
    paddingRight:60,
    lineHeight: 1.5,
    flexDirection: 'column',
    border:'solid'
},
tableContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 24,
  borderWidth: 1,
  borderColor: '#bff0fd',
},
logo: {
  width: 300,
  height: 90,
  marginLeft: 'auto',
  marginRight: 'auto'
},
h1: {
  fontSize:20,
  color: '#87CEEB',
  fontWeight: 'bold',
  marginLeft: 'auto',
  marginRight: 'auto'
}
});

const tableRowsCount = 5;

const DocumentPdf = (props) => (

  <Document>
    <Page  style={styles.page}>
     
    <Image style={styles.logo} src={logoreactfac} />
    <Text style={styles.h1}>{props.titre}</Text>
     {/* <InvoiceTitle titre={props.titre}/> */}
     <InvoiceNo invoice={opportunity?.date_de_clôture} titre={props.titre}/>
     <BillTo nom={client?.société} adresse={client?.adresse} tel={client?.téléphone}/>
     <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={props?.filtredProducts}/>
        <InvoiceTableBlankSpace rowsCount={ tableRowsCount} />
        <InvoiceTableFooter items={props?.filtredProducts} />
    </View> 
    <InvoiceThankYouMsg/>
    </Page>
  </Document>
);

return (
<div className='wrapper' >
<SideBar />
<Header />
    <div>
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
            <li class="breadcrumb-item"><a href="/adcom/opportunities">Opportunités</a></li>
            <li class="breadcrumb-item active" aria-current="page">Opportunité</li>
          </ol>
        </nav>
      </div>
    </div>
      {/*   bodyyyyy of the modal    */}

                  <div className="mb-3">
                      <label htmlFor="simpleinput" className="form-label" >Nom d'opportunité</label>
                      <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.nom} name="nom"  type="text" className="form-control" />
                      {errors.nom && <h6 style={{color:"red"}}>{errors.nom}</h6>}
                  </div>
                  <div className="mb-3">
                      <label  htmlFor="simpleinput" className="form-label">Montant</label>
                      <input disabled onChange={(e)=>handleChange(e)} value={data?.montant} name="montant" type="text" className="form-control" />
                      {errors.montant && <h6 style={{color:"red"}}>{errors.montant}</h6>}
                  </div>

                  <div className="mb-3">
                      <label htmlFor="example-select" className="form-label">Étape</label>
                      <select disabled={type==="edit" ? false : true } onChange={e => handleChange(e)} value={data?.étape} name="étape" className="form-select" id="example-select">
                        <option value="one">Proposition/Devis</option>
                        <option value="two">Négotiation/Vérification</option>
                        <option value="four">Cloturé/Gagnée</option>
                        <option value="three">Cloturé/Perdue</option>
                      </select>
                  </div>
                  { ((type==="edit") && !(opportunity?.étape==="four" || opportunity?.étape==="three" )) &&
                  <div className="mb-3">                
                  <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>  
                  <div style={{marginTop:0,}}>
                  <label htmlFor="simpleinput" className="form-label">Produits</label>
                      <Autocomplete
                      id="combo-box-demo"
                      options={filtredProducts}
                      sx={{ width: 300,height:80 }}
                      onInputChange={(e)=>handleSearchProduct(e.target.value)}
                      onChange={(event, value)=> handleChangeAutoComplete(value)}
                      renderInput={(params) => <TextField style={{height:10}} {...params}/>}
                      />
                  </div>


                   <div className="mb-3">
                      <label htmlFor="simpleinput" className="form-label">Quantité</label>
                      <input style={{height:57}} disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.quantité} name="quantité" type="text" className="form-control" />
                      {errors.quantité && <h6 style={{color:"red"}}>{errors.quantité}</h6>}
                  </div>
                  <div className="mb-3">
                  <label htmlFor="simpleinput" className="form-label"></label>
                    <button style={{marginTop:30}} onClick={addProduct} type="button" className="btn btn-secondary" >Add Product</button>
                  </div>

                  </div>

                  </div> 
                }

                  <MasterDetailOpportunityProducts type={type} opportunity_id={opp.toString()}  rows={rows}/>
      {/*   end  of the modal  body    */}

            </div>
            <div className="modal-footer">
              { type==="edit" && <button type="submit" className="btn btn-primary">Mise à jour</button>}
    {opportunity?.étape==="four"  && <button  type="button" className="btn btn-primary"  onClick={async () => {
          //let props = await getProp();
          
          let doc = <DocumentPdf titre="Facture" filtredProducts={opportunityProducts} opp={opp} />;
          let asPdf = pdf(); // {} is important, throws without an argument
          asPdf.updateContainer(doc);
          let blob = await asPdf.toBlob();
          saveAs(blob, 'facture.pdf')
          // asPdf.updateContainer(doc);
          // const blob = await asPdf.toBlob();
          // saveAs(blob, 'document.pdf');
        } } >
        Generer Facture
      </button>}

{!(opportunity?.étape==="four" || opportunity?.étape==="three" ) && <button  type="button" className="btn btn-primary"  onClick={ async() => {
            //let props = await getProp();
          
            let doc = <DocumentPdf titre="Devis" filtredProducts={opportunityProducts} opp={opp} />;
            let asPdf = pdf(); // {} is important, throws without an argument
            asPdf.updateContainer(doc);
            let blob = await asPdf.toBlob();
            saveAs(blob, 'Devis.pdf')
        } } >
        Generer Devis
      </button>
}
      
   { type === "edit" &&  <button onClick={handleClickOpen}  type="button" className="btn btn-primary" >
        Supprimer l'opportunité
      </button> }
            </div>
  
            </div>




      </form> 
    </div>
    </div>   
    </div>

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation de Suppression?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Est-ce-que vous voullez supprimer les données.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button  onClick={handleDelete} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
  </Dialog>
</div>

)
}