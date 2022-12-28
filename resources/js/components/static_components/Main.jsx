import { InertiaLink } from '@inertiajs/inertia-react'
import { width } from '@mui/system'
import React,{useEffect, useState} from 'react'
import BarChart from '../charts/BarChart'
import PieChart from '../charts/PieChart'

export default function Main({recent_prospects, totalContacts , clients, opportunities, opportunitiesBenifits}) {
let [pieChartData, setPieChartData]=useState([0, 0, 0, 0])
let [barChartData, setBarChartData]=useState([0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0])

//let [rendred, setRendreded]=useState();
useEffect(()=>{
console.log(opportunities)
handlePieChartData();
handleBarChartData()
},[])

const handlePieChartData = () =>{
  let pieData = [0, 0, 0, 0]
  opportunities.map((data)=>{
    if(data.étape === "one")
    pieData[0]=data.total
    else if(data.étape === "two")
    pieData[1]=data.total
    else if(data.étape === "three")
    pieData[2]=data.total
    else if(data.étape === "four")
    pieData[3]=data.total
  })
  setPieChartData(pieData)
}
const handleBarChartData = () =>{
  let barChart = [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0]
  opportunitiesBenifits.map((data)=>{
    if(data.month === 1)
    barChart[0]=data.montant
    else if(data.month === 2)
    barChart[1]=data.montant
    else if(data.month === 3)
    barChart[2]=data.montant
    else if(data.month === 4)
    barChart[3]=data.montant
    else if(data.month === 5)
    barChart[4]=data.montant
    else if(data.month === 6)
    barChart[5]=data.montant
    else if(data.month === 7)
    barChart[6]=data.montant
    else if(data.month === 8)
    barChart[7]=data.montant
    else if(data.month === 9)
    barChart[8]=data.montant
    else if(data.month === 10)
    barChart[9]=data.montant
    else if(data.month === 11)
    barChart[10]=data.montant
    else if(data.month === 12)
    barChart[11]=data.montant
  })
  console.log(barChart)
  setBarChartData(barChart)
}


  return (
<div className="container-login100">
    <div className="wrap-login101">
      <div className="modal-content">
         <div className="modal-body">

    {/* Start Content*/}
    <div className="container-fluid">
      {/* start page title */}
  
      {/* end page title */} 
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-12">
                  <h5 className="text-muted fw-normal mt-0 text-truncate" title="Campaign Sent">Opportunités Par étapes</h5>
                  <h3 className="my-2 py-1">{opportunities.length} </h3>
                  <p className="mb-0 text-muted">
                  </p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <div id="campaign-sent-chart" data-colors="#727cf5" />
                  </div>
                </div>
              </div> {/* end row*/}
            </div> {/* end card-body */}
          </div> {/* end card */}
        </div> {/* end col */}
        <div className="col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-12">
                  <h5 className="text-muted fw-normal mt-0 text-truncate" title="New Leads">Les récents prospects</h5>
                  <h3 className="my-2 py-1">{recent_prospects.length}</h3>
                  <p className="mb-0 text-muted">
                  </p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <div id="new-leads-chart" data-colors="#0acf97" />
                  </div>
                </div>
              </div> {/* end row*/}
            </div> {/* end card-body */}
          </div> {/* end card */}
        </div> {/* end col */}

        <div className="col-lg-6 col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-12">
                  <h5 className="text-muted fw-normal mt-0 text-truncate" title="Booked Revenue">Les Revenues De ce Mois</h5>
                  <h3 className="my-2 py-1 text-truncate">{opportunitiesBenifits.filter(e=>e.month===new Date().getMonth()).map(e => <>DZD {e.montant}</>)}</h3>
                  <p className="mb-0 text-muted">
                  </p>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <div id="booked-revenue-chart" data-colors="#0acf97" />
                  </div>
                </div>
              </div> {/* end row*/}
            </div> {/* end card-body */}
          </div> {/* end card */}
        </div> {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-1">Opportunités Par étapes</h4>
              <div id="dash-campaigns-chart" className="apex-charts" data-colors="#ffbc00,#727cf5,#0acf97" />
              <PieChart pieChartData={pieChartData} />
              <div style={{display:'flex',justifyContent:"space-around"}}>
                <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-warning"></i>Proposition</p>
                <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle" style={{color:"#6AD2FF"}}></i>Négociation</p>
                <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-success"></i>Gagnée</p>
                <p class="text-muted mb-0 mb-2"><i class="mdi mdi-checkbox-blank-circle text-danger"></i>Perdue</p>
              </div>
            </div>
            {/* end card body*/}
          </div>
          {/* end card */}
        </div>
        {/* end col*/}
        <div  className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-3">Montants Annuels Des Opportunités</h4>
              <div  className="chart-content-bg">
                <BarChart barChartData={barChartData} />
              </div>
              <div dir="ltr">
                <div id="dash-revenue-chart" className="apex-charts" data-colors="#0acf97,#fa5c7c" />
              </div>
            </div>
            {/* end card body*/}
          </div>
          {/* end card */}
        </div>
        {/* end col*/}
      </div>
      {/* end row*/}
      <div className="row">
        <div className="col-xl-5 col-lg-12">
          <div className="card">
            <div className="card-body">

              <h4 className="header-title mb-3">Les Client Actifs</h4>
              <div className="table-responsive">
                <table className="table table-striped table-sm table-nowrap table-centered mb-0">
                  <thead>
                    <tr>
                      <th>Clients</th>
                      <th>Contacts</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>

                  {
                    clients?.map(data =>
/*                  {totalContacts.find((data)=>data.client_id===item.id)}*/                     
                    <tr key={data.id}>
                      <td>
                      <img className="me-3 rounded-circle"  width={40} src={data.logo} alt="" />
                        <span className="text-muted font-13">{data.société}</span>
                      </td>
                      <td>{totalContacts.filter(e=>e.client_id===data.id).map( e=> <div key={e.client_id}>{e.total}</div>)}</td>
                      <td className="table-action">
                        <InertiaLink href={`clients/show/${data.id}`}> <i className="mdi mdi-eye" /></InertiaLink>
                      </td>
                      <td className="table-action">
                        <InertiaLink href={`clients/edit/${data.id}`}> <i className="mdi mdi-square-edit-outline" /></InertiaLink>
                      </td>
                    </tr>
                  )
                  }
                  </tbody>

                </table>
              </div> {/* end table-responsive*/}
            </div> {/* end card-body*/}
          </div> {/* end card*/}
        </div>
        {/* end col*/}
        <div  className="col-xl-6 col-lg-6 ">
          <div className="card">
            <div className="card-body">
              <h4 className="header-title mb-4">les récents prospects </h4>
              {recent_prospects?.map((item, index) => 
                <div key={index} className="d-flex align-items-start mt-3">
                    <img className="me-3 rounded-circle" src={item.photo} width={40} alt="" />
                    <div className="w-100 overflow-hidden">
                      {item.Statut==="froid" ?
                      <span className="badge badge-warning-lighten float-end">froid</span>
                      :
                      <span className="badge badge-success-lighten float-end">chaud</span>
                      }
                      <h5 className="mt-0 mb-1">{item.nom} {item.prenom}</h5>
                      <span  className="font-13">{item.email}</span>
                    </div>
                </div> 
              )}
              {/* <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-3.jpg" width={40} alt="" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-danger-lighten float-end">Lost lead</span>
                  <h5 className="mt-0 mb-1">Margaret D. Evans</h5>
                  <span className="font-13">margaret.evans@rhyta.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-4.jpg" width={40} alt="" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-success-lighten float-end">Won lead</span>
                  <h5 className="mt-0 mb-1">Bryan J. Luellen</h5>
                  <span className="font-13">bryuellen@dayrep.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-5.jpg" width={40} alt="" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-warning-lighten float-end">Cold lead</span>
                  <h5 className="mt-0 mb-1">Kathryn S. Collier</h5>
                  <span className="font-13">collier@jourrapide.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-1.jpg" width={40} alt="" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-warning-lighten float-end">Cold lead</span>
                  <h5 className="mt-0 mb-1">Timothy Kauper</h5>
                  <span className="font-13">thykauper@rhyta.com</span>
                </div>
              </div>
              <div className="d-flex align-items-start mt-3">
                <img className="me-3 rounded-circle" src="assets/images/users/avatar-6.jpg" width={40} alt="" />
                <div className="w-100 overflow-hidden">
                  <span className="badge badge-success-lighten float-end">Won lead</span>
                  <h5 className="mt-0 mb-1">Zara Raws</h5>
                  <span className="font-13">austin@dayrep.com</span>
                </div>
              </div> */}
            </div>
            {/* end card-body */}
          </div>
          {/* end card*/}
        </div>
        {/* end col */}  

        {/* end col */}  
      </div>
      {/* end row*/}
    </div> {/* container */}
  </div> {/* content */}
  {/* Footer Start */}
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          © Hyper - Coderthemes.com
        </div>
        <div className="col-md-6">
          <div className="text-md-end footer-links d-none d-md-block">
            <a >About</a>
            <a >Support</a>
            <a >Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end Footer */}
</div>
</div>
</div>

  )
}
