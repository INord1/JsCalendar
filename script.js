
// ready function
$(document).ready(function() {

 

  // selecting div with id calndar to display a calendar 
$("#calendar").fullCalendar({
    header: {
      // navigation buttons
      left: "prev,next today",
      //using bootstrap as a theam
      themeSystem: 'bootstrap',
      //displaying current week range
      center: "title",
     right: "",
    },
    defaultView: "agendaWeek",
    //preventing overpaling events
    eventOverlap: false,
    selectable: true,
    allDaySlot: false,
    selectHelper: false,
    editable: true,
    eventLimit: true, 


    // creating a promt windowd and values for an event
    select: function(start, end) {
      var title = prompt("Provide Description:");
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end,
          
        
        };
       //rendering an event
        $("#calendar").fullCalendar("renderEvent", eventData, true); 
      }
      $("#calendar").fullCalendar("unselect");
    },
    


    
      //creating a delete button and adding logic
    eventRender: function(event, element) {
      element
        .find(".fc-content")
        .prepend("<span class='closeBtn material-icons'>&#xe5cd;</span>");
      element.find(".closeBtn").on("click", function() {
        $("#calendar").fullCalendar("removeEvents", event._id);
      });  
    },

    eventClick: function(calEvent) {
      var title = prompt("Edit Description:", calEvent.title);
      calEvent.title = title;
      $("#calendar").fullCalendar("updateEvent", calEvent);
      
    },  
      
  });
  
});

//function to show time
function showDateTime() {
  var myDiv = document.getElementById("dateTime");

  var date = new Date();
  // geting values from a date object
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
//stroing values inside of variable
  var time = hour + ":" + min + ":" + sec;
  //displaying values
  myDiv.innerText = time;
}
//setiing interval
setInterval(showDateTime, 1000);


//fadeIn function
$( "#fadeIn" ).click(function() {
  $( ".faq" ).fadeIn( "slow", function() {
  });
});

//fadeOut function
$( "#fadeOut" ).click(function() {
  $( ".faq" ).fadeOut( "slow", function() {
    
  });
});


//toogle and display faq items
const itemHeaders = document.querySelectorAll(".faq-item-header");

itemHeaders.forEach(itemHeader => {
  itemHeader.addEventListener("click", event => {
    
    itemHeader.classList.toggle("active");
    const itemBody = itemHeader.nextElementSibling;
    if(itemHeader.classList.contains("active")) {
      itemBody.style.maxHeight = itemBody.scrollHeight + "px";
    }
    else {
      itemBody.style.maxHeight = 0;
    }
    
  }
  );
});