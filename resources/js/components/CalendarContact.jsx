import React, { useEffect, useState } from 'react'
import '@fullcalendar/react/dist/vdom';
import { InertiaLink } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';
import {useForm}  from "@inertiajs/inertia-react"
import Header from './static_components/Header';
import FullCalendar, { formatDate } from '@fullcalendar/react'
//import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Autocomplete, TextField } from '@mui/material'
import SideBar from './static_components/SideBar';
import '../../css/Calendar.css'
//import { INITIAL_EVENTS, createEventId } from './event-utils'

export default function CalendarContact({Events,contacts})  {
  

  let { data, setData, post, processing, errors } = useForm({
    Date: "",
    heure :"",  
    compte_rendu:"",
    contact_id:"",
    id:"",
    client_id:""
})


let [events, setEvents]=useState([]);

let [filtredcontacts, setFiltredcontacts]=useState([])


useEffect(()=>{
console.log(Events)
//handleSetEvent()
}, [Events])

useEffect(()=>{
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
 post('/adcom/calendar/edit',{
  onSuccess : () =>{
    Inertia.reload({only:['Events']})
            $('#myModal2').hide();
            $('.modal-backdrop').remove(); 
            document.body.style.overflow = 'scroll'
  }
 })
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
  console.log(datetime)
  setEvents(oldArray => [...oldArray,{
    start:datetime,
    heure:Events[data]?.pivot.heure,
    title:Events[data]?.pivot.compte_rendu,
    contact_id:Events[data]?.pivot.contact_id,
    user_id:Events[data]?.pivot.user_id  ,
    id:Events[data]?.pivot.id,
} ])

/*    events.push({
     start:datetime,
     heure:Events[data]?.pivot.heure,
     title:Events[data]?.pivot.compte_rendu,
     contact_id:Events[data]?.pivot.contact_id,
     user_id:Events[data]?.pivot.user_id  ,
     id:Events[data]?.pivot.id,
 }); */
 

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
    //console.log(data)
    Inertia.delete(`/adcom/calendar/${data.id}`,{
      preserveState:true,
      onSuccess:page=>{
          Inertia.reload({only:['Events']})
          $('#myModal2').modal('hide')
          $('.modal-backdrop').remove(); 
          document.body.style.overflow = 'scroll'
      },
    })
}
  
  const  handleSubmit = (e) => {
    e.preventDefault()
    post('/adcom/calendar/create',{
      preserveState:true,
      onSuccess:page=>{
          Inertia.reload({only:['Events']})
          $('#myModal').modal('hide')
          //$('.modal-backdrop').remove(); 
          //document.body.style.overflow = 'scroll'
      },
    })
  }
  
  

   

  return (
    <div  className='wrapper' >

        
    <div  className="">
      <div className="">
        <div className="">
         <div onClick={()=>{
          if(!$('#myModal2').is(':visible')){
            handleInitData()
            }
          }} 
          className="modal-body">

          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ,listPlugin, ]}
            editable={true}
            eventClick={(clickInfo) => {
              const date= new Date(clickInfo.event.start)
              const jour = ("0"+date.getDate()).slice(-2)
              const mois = ("0"+date.getMonth() + 1).slice(-2)
              const annee = (date.getFullYear())
              const heure= ("0"+date.getHours()).slice(-2)
              const minute= ("0"+date.getMinutes()).slice(-2)

             $('#myModal2').modal('toggle');
            //alert('hacked')
            
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
              center: 'today myCustomButton',
             
          
            }}
            initialView="dayGridMonth"
            events={Events}
            eventColor= '#378006'
            eventTextColor='blue'
      
            
            
          //  eventBackgroundColor="#ff0000"
            
           // eventBorderColor="#ff0000"
            customButtons={{
              myCustomButton: {
                text: 'Add Event',

                click: function() {
                  $("#myModal").modal("show");
                 
                 
  
               //  $(".modal-body").html("");
             // $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
                },
               
              },
            }}
            
          />
 
 

    </div></div>
    </div>
    </div>

{/* modal modifier l'evenement */}
<form>
          <div class="modal" id="myModal2">
            <div class="modal-dialog">
              <div class="modal-content">
            
                <div class="modal-header">
                  <h4 class="modal-title align-center">infos d'évenement</h4>
                  <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                            />
                 
                </div>
            
                <div className="modal-body">

                <div className="mb-3"><label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                    id="title"
                                >
                                    Compte rendu
                                </label>
                                <input
                                  
                                    name="compte_rendu"
                                    type="text"
                                    className="form-control"
                                  disabled={true} 
                                    value={data.compte_rendu}
                                />
                {errors.compte_rendu && <h6 style={{color:"red"}}>{errors.compte_rendu}</h6>}  
                </div>

                <div className="mb-3"><label for=""  id="date">
                                    Heure
                                </label>
                                <input
                                
                                    name="heure"
                                    type="time"
                                    className="form-control"
                                    disabled={true} 
                                    value={data.heure}
                                />
                {errors.heure && <h6 style={{color:"red"}}>{errors.heure}</h6>}  
                </div>
                             <div class="form-group mb-3">
                              <label form="" id='chronicle'>
                                   Date
                                </label>
                              <input type='date'
                              class="form-control"
                               name="Date" 
                              placeholder='Enter Start Date'
                              disabled={true} 
                              value={data.Date}
                              ></input>
                                {errors.Date && <h6 style={{color:"red"}}>{errors.Date}</h6>}  
                              </div>
                              
                              <div class="form-group mb-3">
                              <label form="">
                                   Contact
                                </label>
                              <input class="form-control" name="contact" ></input>
                              </div> 
                             
                  </div>
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
                          <button type="submit" className="btn btn-primary" id="btn"
                           >
                                Update
                            </button>
                            <div onClick={()=>handleDelete()}  className="btn btn-primary" id="btn" >
                                Delete
                            </div>
                        </div>
              </div>
            </div>
          
          </div>
         
</form>
    </div>
  );
}