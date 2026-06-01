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

//card
function card( info ){
  let build = `<div class="card fitted center">
    <h2>${info.marketname}</h2>
              <hr>
              <p>Location: ${info.streetaddress}, ${info.borough}</p>
              <p>Year Opened: ${info.year}</p>
              <p>Community District: ${info.community_district}</p>
              <p>Operating hours:${info.daysoperation}, ${info.hoursoperations}</p>
              <p>Open year round?:${info.open_year_round}</p>
              <p>Accepts EBT?: ${info.accepts_ebt}</p>`;
             
              if(info.latitude  && info.longitude){
                  build += `<input type="button" value="Map" onclick="showMap(${info.latitude},${info.longitude})">`;
                  }
     build +=    `</div>`;
return build;
}

//analysis
function get(id){
  return document.getElementById(id);
}

function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}