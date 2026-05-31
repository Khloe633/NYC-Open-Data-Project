function get(id){
  return document.getElementById(id);
}


function card( info ){
  let build = `<div class="card fitted center">
    <h2>Market Name: ${info.marketname}</h2>
              <hr>
              <p>Location: ${info.streetaddress}, ${info.borough}</p>
              <p>Year Opened: ${info.year}</p>
              <p>Community District: ${info.community_district}</p>
              <p>Operating hours:${info.daysoperation}, ${info.hoursoperations}</p>
              <p>Open year round?:${info.open_year_round}</p>
              <p>Accepts EBT?: ${info.accepts_ebt}</p>`;
              if(info.latitude && info.longitude){
               build += `<input type=“button” value=“Map” onclick=“showMap( ${info.latitude}, ${info.longitude})">`;
                  }
     build +=    `</div>`;
return build;
}
