// import React,{useEffect} from 'react'
// import * as ReactDOM from 'react-dom';
// import { useState } from 'react';
// import { ScheduleComponent,ViewsDirective, Schedule,
//   ViewDirective, Inject, Day, Month, Week, Agenda ,DragAndDrop, Resize} from '@syncfusion/ej2-react-schedule'
// import PageTitle from './static_components/PageTitle';
// import Header from './static_components/Header';
// import SideBar from './static_components/SideBar';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
// import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// //import {L10n} from '@syncfusion/ej2-base';
// import { Button } from '@syncfusion/ej2-buttons';
// import { get } from 'lodash';
// export default function Calendar() {
// let title = "Calendar"
// // L10n.load({
// //    'en-US':{
// //     'schedule':{
// //       'saveButton':'Add'

// //     }
// //    }
// // });

// let items = [
//   {
//     text: 'Paste',
//     iconCss: 'e-btn-icons e-paste'
//   },
//   {
//     text: 'Paste Special',
//     iconCss: 'e-btn-icons e-paste-special'
//   },
//   {
//     text: 'Paste as Formula',
//     iconCss: 'e-btn-icons e-paste-formula'
//   },
//   {
//     text: 'Paste as Hyperlink',
//     iconCss: 'e-btn-icons e-paste-hyperlink'
//   }
// ];



// useEffect(()=>{
//   document.getElementById('js-licensing').style.display = 'none';
// },[])

// let ScheduleData = [{
//   Id: 1,
//   Subject: 'Explosion of Betelgeuse Star',
//   StartTime: new Date(2018, 1, 15, 9, 30),
//   EndTime: new Date(2018, 1, 15, 11, 0),
//   }, {
//   Id: 2,
//   Subject: 'Thule Air Crash Report',
//   StartTime: new Date(2018, 1, 12, 12, 0),
//   EndTime: new Date(2018, 1, 12, 14, 0)
// }, {
//   Id: 3,
//   Subject: 'Blue Moon Eclipse',
//   StartTime: new Date(2018, 1, 13, 9, 30),
//   EndTime: new Date(2018, 1, 13, 11, 0)
// }, {
//   Id: 4,
//   Subject: 'Meteor Showers in 2018',
//   StartTime: new Date(2018, 1, 14, 13, 0),
//   EndTime: new Date(2018, 1, 14, 14, 30)
// }];

//   function  onEditClick() {
//     let Data = {
//         Id: 3,
//         Subject: 'Testing-edited',
//         StartTime: new Date(2018, 1, 11, 10, 0),
//         EndTime: new Date(2018, 1, 11, 11, 0),
//         IsAllDay: false
//     };
//     this.scheduleObj.saveEvent(Data);
//     this.buttonObj.element.setAttribute('disabled', 'true');
  
// }




//     function editorTemplate(props) {
//         return ((props !== undefined) ? <table className="custom-event-editor" style={{ width: '100%' }} cellPadding={5}><tbody>
//       <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
//         <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }}/>
//       </td></tr>
//       <tr><td className="e-textlabel">Status</td><td colSpan={4}>
//         <DropDownListComponent id="EventType" placeholder='Choose status' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']}></DropDownListComponent>
//       </td></tr>
//       <tr><td className="e-textlabel">From</td><td colSpan={4}>
//         { <DateTimePickerComponent id="StartTime" format='dd/MM/yy hh:mm a' data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent> }
//       </td></tr>
//       <tr><td className="e-textlabel">To</td><td colSpan={4}>
//         {<DateTimePickerComponent id="EndTime" format='dd/MM/yy hh:mm a' data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent> }
//       </td></tr>
//       <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
//         <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
//       </td></tr></tbody></table> : <div></div>);
//     }
//     const onPopupOpen=(args)=> {
      
//           let dialogObj = args.element.ej2_instances[0];
//           dialogObj.footerTemplate = '<input id="add" type="button" value="Add" /><input id="save" type="button" value="Save" /><input id="print" type="button" value="Print" /><input id="delete" type="button" value="Delete" /><input id="cancel" type="button" value="Cancel" />';
//             dialogObj.dataBind();
//             let addButtonObj = new Button();
//             addButtonObj.appendTo('#add');
//             addButtonObj.element.onclick = () => {
//              // this.eventAdd();
//            //  console.log(1);
//             };
//           }
            
//           //  var isApp = args.target.classList.contains('e-appointment');
//           //  if (isApp) {
//             //  this.currentEvent = this.scheduleObj.getEventDetails(args.target);
//             //}
          
       
//               //console.log(1);
//              /* const data = scheduleObj.getCellDetails(
//                 scheduleObj.getSelectedElements()
//               );*/
//             //  console.log(data)
//              /* var isApp = args.target.classList.contains('e-appointment');
//               if (isApp) {
//                 this.currentEvent = this.scheduleObj.getEventDetails(args.target);
//               }
//               args.element.querySelector('#save').style.display = isApp ? '' : 'none';
//               args.element.querySelector('#delete').style.display = isApp
//                 ? ''
//                 : 'none';
//               args.element.querySelector('#add').style.display = isApp ? 'none' : '';
//     }
//            /* 
//            // console.log("addButtonObj")
//              // addButtonObj.element.onclick = () => {
//                // eventAdd();
//               console.log("test") 
//         };*/
//        /* let CancelButtonObj= new Button();
//             CancelButtonObj.appendTo("#cancel");
//             addButtonObj.element.onclick = () => {
//               dialogClose();
//       };
//       let saveButtonObj = new Button();
//       saveButtonObj.appendTo('#save');
//       saveButtonObj.element.onclick = () => {
//         this.editEvent();
//       };
//       let printButtonObj = new Button();
//       printButtonObj.appendTo('#print');
//       printButtonObj.element.onclick = () => {
//         alert('Print button called');
//       };
//       let deleteButtonObj = new Button();
//       deleteButtonObj.appendTo('#delete');
//       deleteButtonObj.element.onclick = () => {
//         this.eventDelete();
//       };
//       let cancelButtonObj = new Button();
//       cancelButtonObj.appendTo('#cancel');
//       cancelButtonObj.element.onclick = () => {
//         this.dialogClose();
//       }; */
          
//        function eventAdd (e)  {
        
//         const data = this.scheduleObj
//        const eventData = this.scheduleObj.eventWindow.getObjectFromFormData('e-schedule-dialog');

//         this.scheduleObj.eventWindow.convertToEventData(data, eventData);
//         eventData.Id = this.scheduleObj.eventBase.getEventMaxID() + 1;
//         this.scheduleObj.addEvent(eventData);
//         this.dialogClose();
//        // console.log(data)
//         /*const eventData = scheduleObj.eventWindow.getObjectFromFormData(
//           'e-schedule-dialog'
//         );
//         scheduleObj.eventWindow.convertToEventData(data, eventData);
//         eventData.Id = scheduleObj.eventBase.getEventMaxID() + 1;
//         scheduleObj.addEvent(eventData);*/
//         }
//         const dialogClose=()=> {
//           let dialogObj = document.querySelector('.e-schedule-dialog')
//             .ej2_instances[0];
//           dialogObj.hide();
//         }
//         const eventDelete=(e)=>{
//           const eventData = this.scheduleObj.activeEventData.event;
//           this.scheduleObj.deleteEvent(eventData);
//           this.dialogClose();
//         }
//         const editEvent=(e)=> {
//           const eventData = this.scheduleObj.eventWindow.getObjectFromFormData(
//             'e-schedule-dialog'
//           );
//           eventData.Id = this.currentEvent.Id;
//           this.scheduleObj.saveEvent(eventData);
//           this.dialogClose();
//         }
//         const onActionBegin=(args)=> {
//           if (
//             args.requestType === 'eventCreate' ||
//             args.requestType === 'eventChange'
//           ) {
//             let data = args.data instanceof Array ? args.data[0] : args.data;
//             if (!this.scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
//               args.cancel = true;
//             }
//           }
//         }
      
//         const onEventRendered=(args)=> {
//           switch (args.data.EventType) {
//             case 'Requested':
//               args.element.style.backgroundColor = '#F57F17';
//               break;
//             case 'Confirmed':
//               args.element.style.backgroundColor = '#7fa900';
//               break;
//             case 'New':
//               args.element.style.backgroundColor = '#8e24aa';
//               break;
//           }
//         }
    
//     return (
// <div className='wrapper' >
//         <SideBar />
//         <Header />
        
//         <div className="content-page">
//           <div className="content">
//             {/* Start Content*/}
//             <div className="container-fluid">
//               {/* start page title */}
//               <PageTitle title={title} />
//               {/* end page title */} 
             
//               {/* ------------------------ calendar ------------------ */}
//               <ScheduleComponent height='550px'
//                selectedDate={new Date(2018, 1, 14, 14, 30)}
               
//               // actionBegin={this.onActionBegin.bind(this)}
//               //scheduleObj={}
//                 eventSettings={{ dataSource: ScheduleData }}
//                  editorTemplate={editorTemplate.bind(this)}  
//                  eventRendered={onEventRendered.bind(this)}
//                  popupOpen={onPopupOpen.bind(this)}>
//                   { <Inject services={[Day, Week, Agenda, Month,Resize,DragAndDrop]}/> }
//               </ScheduleComponent>
//               {/* end row */}
//             </div> {/* container */}
//           </div> {/* content */}
//         </div>

//     </div>
//   )
// }



import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
//import { INITIAL_EVENTS, createEventId } from './event-utils'

export default function Calendar()  {

 
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center">
          <h3>Rendez-Vous</h3>
      </div>
      
      <div className="container">
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ,listPlugin]}
            //Dayclick open sweetalert
            dateClick={function(arg) {
            //  $("#myModal").modal("show");
            //  $(".modal-body").html("");
             // $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
           
            headerToolbar={{
              start: "today prev next",
              end: "dayGridMonth dayGridWeek dayGridDay listMonth",
              center: 'today myCustomButton',
          
            }}
            initialView="dayGridMonth"
            events={[
              { title: 'event 1', date: '2022-11-01' },
              { title: 'event 2', date: '2022-11-02' }
            ]}
            
            customButtons={{
              myCustomButton: {
                text: 'Add Event',
                click: function() {
                  $("#myModal").modal("show");
                },
              },
            }}
           
          />
        
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
                <div><label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                >
                                    Event Title
                                </label>
                                <input
                                  
                                    name="Event title"
                                    type="text"
                                    className="form-control"
                                />
                </div>

                <div><label for="">
                                    Choose Time
                                </label>
                                <input
                                  
                                    name="Time"
                                    type="time"
                                    className="form-control"
                                />
                </div>
                             <div class="form-group">
                              <label form="">
                                  Start Date
                                </label>
                              <input type='date'class="form-control" name="start_Date" placeholder='Enter Start Date'></input>
                              </div>
                              <div class="form-group">
                              <label form="">
                                  End Date
                                </label>
                              <input type='date'class="form-control" name="End_Date" placeholder='Enter End Date'></input>
                              </div>
                <div class="modal-body text-center">
                  
                </div>
              
                <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                          <button type="submit" className="btn btn-primary">
                                Save changes
                            </button>
                         
                        </div>
              </div>
            </div>
        
          </div>
         



    </div></div>
   
  );
}



