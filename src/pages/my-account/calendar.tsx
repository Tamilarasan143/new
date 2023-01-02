import React from 'react';

//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//jquery, popper.js libraries for bootstrap modal
import 'jquery/dist/jquery.min.js';

import $ from 'jquery';
 
//Here are the modules for fullcalendar and dayclick event
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default function Calendar() {
  return (
    <div className="MainDiv">
      <div className="jumbotron text-center">
          <h3>Therichpost.com</h3>
      </div>
      
      <div className="container">
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            //Dayclick open sweetalert
            dateClick={function(arg) {
              $("#myModal").modal("show");
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
            initialView="dayGridMonth"
            events={[
              { title: 'event 1', date: '2020-11-01' },
              { title: 'event 2', date: '2020-11-02' }
            ]}
          />
        </div>
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
              
                <div className="modal-header">
                  <h4 className="modal-title align-center">Add Event</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div className="modal-body text-center">
                  
                </div>
              
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      
    </div>
  );
}

