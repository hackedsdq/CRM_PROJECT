import React, { useEffect, useState } from 'react'
import '@fullcalendar/react/dist/vdom';
import { InertiaLink } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';
import {useForm}  from "@inertiajs/inertia-react"
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Autocomplete, TextField } from '@mui/material'
import '../../css/CalendarContacts.css'

export default function CalendarContact({Events,contacts})  {
  

  let { data, setData, post, processing, errors } = useForm({
    Date: "",
    heure :"",  
    compte_rendu:"",
    contact_id:"1",
    user_id:"1",
    id:"",
    client_id:""
})


let [events, setEvents]=useState([
  
]);

let [filtredcontacts, setFiltredcontacts]=useState([])
useEffect(()=>{
handleSetEvent()
handleFilter(contacts)
},[contacts])

const handleFilter=(contacts)=>{
let filtred;

 
if(contacts !== undefined){
  filtred = contacts.map((contact)=>(filtredcontacts.filter(data => data.label === contact.nom)))
  if(filtred.length !== 0){
  for(let i=0;i<filtred.length;i++){
    if(filtred[i].length===0){
      filtredcontacts.push({ label: `${contacts[i].nom}`, id:contacts[i].id})
    }
  }
}
}
}
const handleSearchContact= (contacts) =>{
  if(contacts !== "")
  Inertia.post('calendar',{
     contacts:contacts,
   })
 
}

const handleChangeAutoComplete = (value) =>{
 
let contact_id = value.id.toString();
setData(data.contact_id = `${contact_id}`)

}


const  handleSubmit2 = (e) => {
  e.preventDefault()
 post('/calendar/edit')

 }
 
const handleInitData=()=>{
setData(data.Date="")
setData(data.compte_rendu="")
setData(data.heure="")
setData(data.id="")
setData(data.contact_id="")
}


const handleSetEvent = ()=>{
Events?.map((index,data)=>{
  const datetime = new Date(Events[data]?.pivot.Date + "T" + Events[data]?.pivot.heure);
   events.push({
     start:datetime,
     heure:Events[data]?.pivot.heure,
     title:Events[data]?.pivot.compte_rendu,
     contact_id:Events[data]?.pivot.contact_id,
     user_id:Events[data]?.pivot.user_id  ,
     id:Events[data]?.pivot.id,
 });
 

  })}

const handleChange = (e) =>{
  let inputType = e.target.name
  let inputValue = e.target.value

  if( inputType === "Date"){
  
  setData(data.Date= inputValue )}

  else if(inputType === "heure"){
 
  setData(data.heure= inputValue)}

  else if(inputType === "compte_rendu"){
    
    setData(data.compte_rendu = inputValue)
  }

}

const handleDelete = () =>{
    Inertia.delete(`/calendar/destroy`)
}
  
  const  handleSubmit = (e) => {
    e.preventDefault()
    post('/calendar/create')
   }
  

   

  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>Rendez-Vous</h3>
      </div>
      
      <div className="container">
    
         { events.length>0 && 
       
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ,listPlugin]}
              editable={true}
            eventClick={function(clickInfo) {
              const date= new Date(clickInfo.event.start)
              const jour = ("0"+date.getDate()).slice(-2)
              const mois = ("0"+date.getMonth() + 1).slice(-2)
              const annee = (date.getFullYear())
              const heure= ("0"+date.getHours()).slice(-2)
              const minute= ("0"+date.getMinutes()).slice(-2)
             

             $('#myModal2').modal("show");
            
            
              setData(data.Date=[annee, mois, jour].join("-"))
              setData(data.compte_rendu=clickInfo.event.title)
           
              setData(data.heure=[heure, minute].join(":"))
              setData(data.id=clickInfo.event.id)
      
            
            }
            }
            dateClick={function(arg) {
              $("#myModal").modal("show");
             // $(".modal-content").html("");
             //$(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
           
            }}
            
            headerToolbar={{
              start: "today prev next",
              end: "dayGridMonth dayGridWeek dayGridDay listMonth",
              center: 'today',
             
          
            }}
            initialView="dayGridMonth"
            events={events}
            eventColor= '#378006'
            eventTextColor='blue'
      
            
            
          //  eventBackgroundColor="#ff0000"
            
           // eventBorderColor="#ff0000"
     
            
          />}
 
 

        {/* <form onSubmit={handleSubmit}>
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
            
                <div class="modal-header">
                  <h4 class="modal-title align-center">Add Event</h4>
                  <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                            />
                 
                </div>
            
                <div ><label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                    id="title"
                                >
                                    compte rendu
                                </label>
                                <input
                                  onChange={(e)=>handleChange(e)} value={data.compte_rendu}
                                    name="compte_rendu"
                                    type="text"
                                    className="form-control"
                                    
                                />
                               
                </div>

                <div><label for="" id='heure'>
                                    Choose Time
                                </label>
                                <input
                                  onChange={(e)=>handleChange(e)} value={data.heure}
                                    name="heure"
                                    type="time"
                                    className="form-control"
                                />
                </div>
                             <div class="form-group">
                              <label form="" id='chronicle'>
                                   Date
                                </label>
                              <input type='date'class="form-control" name="Date" placeholder='Enter Start Date'onChange={(e)=>handleChange(e)} value={data.Date}></input>
                              </div>

                              <div className="mb-3">
                <label htmlFor="simpleinput" className="form-label">contacts</label>
                  <Autocomplete
                id="combo-box-demo"
                onInputChange={(e)=>handleSearchContact(e.target.value)}
                options={filtredcontacts}
                sx={{ width: 300,height:100 }}
                onChange={(event,value)=> handleChangeAutoComplete(value)}
                renderInput={(params) => <TextField {...params}/>}
                
            />    */}
                 {/* {errors.contact_id && <h6 style={{color:"red"}}>{errors.contact_id}</h6>}  */}
            {/* </div>

                             
                <div class="modal-body text-center">
                  
                </div>
              
                <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              onClick={handleInitData}
                            >
                                Close
                            </button>
                          <button type="submit" className="btn btn-primary" id="btn" >
                                Save changes
                            </button>
                         
                        </div>
              </div>
            </div>
          
          </div>
         
</form> */}


<form onSubmit={handleSubmit2}>
          <div class="modal" id="myModal2">
            <div class="modal-dialog">
              <div class="modal-content">
            
                <div class="modal-header">
                  <h4 class="modal-title align-center">Show Event</h4>
                  <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                            />
                 
                </div>
            
                <div ><label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                    id="title"
                                    
                                >
                                    compte rendu
                                </label>
                                <input
                                
                                    name="compte_rendu"
                                    type="text"
                                    className="form-control"
                                  onChange={(e)=>handleChange(e)} 
                                    value={data.compte_rendu}
                                    disabled
                                />
                               
                </div>

                <div><label for=""  id="date">
                                    Choose Time
                                </label>
                                <input
                                
                                    name="heure"
                                    type="time"
                                    className="form-control"
                                    onChange={(e)=>handleChange(e)} 
                                    value={data.heure}
                                    disabled
                                />
                </div>
                             <div class="form-group">
                              <label form="" id='chronicle'>
                                   Date
                                </label>
                              <input type='date'
                              class="form-control"
                               name="Date" 
                              placeholder='Enter Start Date'
                              onChange={(e)=>handleChange(e)} 
                              value={data.Date}
                              disabled
                              ></input>
                              </div>
                              
                              <div class="form-group">
                              <label form="">
                                   Contact
                                </label>
                              <input class="form-control" name="contact" ></input>
                              </div> 
                             
                             
                <div class="modal-body text-center">
                  
                </div>
              
                <div className="modal-footer">
                <button type="button" class="btn btn-info my-2" data-bs-dismiss="modal">Close</button>

                          
                          
                        </div>
              </div>
            </div>
          
          </div>
         
</form>

    </div></div>
   
  );
}
