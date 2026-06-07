function get(id){
  return document.getElementById(id);
}

function showMap(lat,lon){
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}


let $ = (selector) => document.querySelector(selector);
//Concept Source - https://www.w3schools.com/howto/howto_css_modals.asp

// Modal
/*function createModal(text, content, container) {
  const button = document.createElement("div");
  button.innerHTML = text;

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");

  const modal_content = document.createElement("div");
  modal_content.setAttribute("class", "modal-content");

  const modal_header = document.createElement("div");
  modal_header.setAttribute("class", "modal-header");

  const modal_body = document.createElement("div");
  modal_body.setAttribute("class", "modal-body");

  // FIX: Check the local variable 'content', not 'this.content'
  if (typeof content === "object" && content !== null) {
    modal_body.append(content);
  } else {
    modal_body.innerHTML = content;
  }
  
  const closeButton = document.createElement("span");
  closeButton.setAttribute("class", "close");
  closeButton.innerHTML = "&times;"; // FIX: Added missing semicolon

  // Event Listeners
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // DOM Assembly
  modal_header.append(closeButton);
  modal_content.append(modal_header);
  modal_content.append(modal_body);
  modal.append(modal_content);

  $(`#${container}`).append(button);
  $(`#${container}`).append(modal);

  // Return control methods like your other components
  return {
    open: () => modal.style.display = "block",
    close: () => modal.style.display = "none",
    element: modal
  };
}
*/




//card
function card( info ){
  let build = `<div class="cardfitted">
    <h2>${info.marketname}</h2>
              <hr>
              <p>Location: ${info.streetaddress}, ${info.borough}</p>
              <p>Year Opened: ${info.year}</p>
              <p>Community District: ${info.community_district}</p>
              <p>Operating hours: ${info.daysoperation}, ${info.hoursoperations}</p>
              <p>Open year round?:${info.open_year_round}</p>
              <p>Accepts EBT?: ${info.accepts_ebt}</p>`;
             
              if(info.latitude  && info.longitude){
                  build += `<input type="button" value="Map" onclick="showMap(${info.latitude},${info.longitude})">`;
                  }
     build +=   `</div>`;
return build;
}


//analysis


function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}


//map
// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}
// showMap() displays the map for a location [lat, lon] in the right panel
let mapObj;

function showMap(lat,lon){
  let location = [lat, lon];
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);
}