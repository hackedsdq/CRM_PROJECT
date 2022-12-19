import React,{useEffect, useState} from 'react'
import {useForm}  from "@inertiajs/inertia-react"
import MasterDetailOpportunities from "./master_details_components/MasterDetailOpportunities"
import { Autocomplete, TextField } from '@mui/material'
import { Inertia } from '@inertiajs/inertia'
import { saveAs } from 'file-saver';
import logoreactfac from'../../../public/assets/images/logoreactfac.png'
import {
  pdf,
  Document,
  Page,
  Image,
  StyleSheet,View, Text
} from '@react-pdf/renderer';
import { blue } from '@mui/material/colors'
import InvoiceTitle from './table/InvoiceTitle'
import InvoiceNo from './table/InvoiceNo'
import BillTo from './table/BillTo'
import InvoiceTableHeader from './table/InvoiceTableHeader'
import InvoiceTableBlankSpace from './table/InvoiceTableBlankSpace'
import InvoiceTableFooter from './table/InvoiceTableFooter'
import InvoiceTableRow from './table/InvoiceTableRow'
import InvoiceThankYouMsg from './table/InvoiceThankYouMsg'
import { render } from 'react-dom'

export default function ShowEditOpportunity({client,opportunity,type,products,opportunityProducts})  {
  let [filtredProducts, setFiltredProducts]=useState([])
  let [opp, setOpp]=useState(opportunity?.id)
  const { data, setData, post, processing, errors } = useForm({
    nom:"",
    montant :"",  
    Client_id:"", 
    date_de_clôture :"" , 
    étape:"",
    product_id:"",
    prix:"",
    quantité:"",
    opportunity_id:""
})
const [rows, setRows] = useState([])
 

useEffect(()=>{
  if(data?.nom === "")
  handleSetOpportunity()
  handleSetProducts()
  handleFilterProducts(products)
  handleSeoducts()
},[products])
const  handleSubmit = (e) => {
 e.preventDefault()
console.log(data)
post(`/adcom/opportunity/edit`) 
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
  setData(data.Client_id = opportunity?.Client_id)
  setData(data.date_de_clôture = opportunity?.date_de_clôture)
  setData(data.étape = opportunity?.étape)
  setData(data.opportunity_id = opportunity?.id.toString())
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
  Inertia.post(`/adcom/opportunities/edit/${opp}`),{
    product : product
  } 
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
    await Inertia.post(`/adcom/opprtunities/edit/${opp}`,
    {
      product_id : data?.product_id,
      quantité: data?.quantité,
    },{
      preserveState:false
    }
    )
    console.log("<<<<<<<<<<<<<< damn >>>>>>>>>>>>>>>>>>>")
  }
}
const  createData = (id, nom, description, prix, quantité) => {
  return{
    id,
    nom,
    description,
    prix,
    quantité,
  };
}
const handleSetProducts = () =>{
  console.log(opportunityProducts)
  opportunityProducts?.map((data)=>rows.push(
    createData(data.id, data.nom, data.description, data.prix, data.quantité)
  ))
  
/*   createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356) 
   disabled={opportunity?.étape==="four" ? false : true }*/
}
const  createData2 = (id, société, téléphone, adresse, site_web) => {
  return{
    id,
    société,
    téléphone,
    adresse,
    site_web,
  };
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
  <div className="row justify-content-center">
    <div className="col-xxl-6 col-lg-5">
      <div className="card">
        <div className="card-header pt-4 pb-4 text-center bg-primary">
              <h4 style={{color:"#fff"}}>editopportunity</h4>
        </div>
    <form onSubmit={(e)=>handleSubmit(e)} >
      <div className="modal-content">
        <div className="modal-body">

  {/*   bodyyyyy of the modal    */}

              <div className="mb-3">
                  <label htmlFor="simpleinput" className="form-label">First Name</label>
                  <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.nom} name="nom"  type="text" className="form-control" />
                  {errors.nom && <h6 style={{color:"red"}}>{errors.nom}</h6>}
              </div>
              <div className="mb-3">
                  <label htmlFor="simpleinput" className="form-label">Montant</label>
                  <input disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.montant} name="montant" type="text" className="form-control" />
                  {errors.montant && <h6 style={{color:"red"}}>{errors.montant}</h6>}
              </div>

              <div className="mb-3">
                  <label htmlFor="example-select" className="form-label">Étape</label>
                  <select disabled={type==="edit" ? false : true } onChange={e => handleChange(e)} value={data?.étape} name="étape" className="form-select" id="example-select">
                    <option value="one">Proposition/Devis</option>
                    <option value="two">Négotiation/Vérification</option>
                    <option value="three">Cloturé/Ganée</option>
                    <option value="four">Cloturé/Perdue</option>
                  </select>
              </div>

              <div className="mb-3">                
              <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>  
              <div style={{marginTop:0,}}>
              <label htmlFor="simpleinput" className="form-label">produits</label>
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
                  <label htmlFor="simpleinput" className="form-label">quantité</label>
                  <input style={{height:57}} disabled={type==="edit" ? false : true } onChange={(e)=>handleChange(e)} value={data?.quantité} name="quantité" type="text" className="form-control" />
                  {errors.quantité && <h6 style={{color:"red"}}>{errors.quantité}</h6>}
              </div>
              <div className="mb-3">
              <label htmlFor="simpleinput" className="form-label"></label>
                <button style={{marginTop:30}} onClick={addProduct} type="button" className="btn btn-secondary" >Add Product</button>
              </div>

              </div>

                  {/*errors.Client_id && <h6 style={{color:"red"}}>{errors.Client_id}</h6>*/}
              </div>


              <MasterDetailOpportunities rows={rows}/>
  {/*   end  of the modal  body    */}

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Save changes</button>
          <button  type="button" className="btn btn-primary" disabled={opportunity?.étape==="four" ? false : true } onClick={async () => {
      let props = await getProp();
      
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
  </button>

  <button  type="button" className="btn btn-primary" disabled={opportunity?.étape==="three" ? false : true } onClick={ async() => {
         let props = await getProp();
      
         let doc = <DocumentPdf titre="Devis" filtredProducts={opportunityProducts} opp={opp} />;
         let asPdf = pdf(); // {} is important, throws without an argument
         asPdf.updateContainer(doc);
         let blob = await asPdf.toBlob();
         saveAs(blob, 'Devis.pdf')
    } } >
    Generer Devis
  </button>
        </div>
      
         
      </div>{/* /.modal-content */}

  </form> 
</div>
</div>   
</div>
)
}

