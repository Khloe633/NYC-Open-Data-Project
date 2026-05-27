let data, info;

async function init(){   
  let link = "https://data.cityofnewyork.us/resource/8vwk-6iz2.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let farm = data[i];
    build += `<div class="fitted card">
                 <h3>Name: 
                 <br>${farm.marketname}</h3>
                 <hr>
              <p>Location: ${farm.streetaddress}, ${farm.borough}</p>
              <p>District: ${farm.community_district}</p>
              <p>Operating hours:${farm.daysoperation}, ${farm.hoursoperations}</p>
              <p>Open year round?:${farm.open_year_round}</p>
              <p>Accepts EBT?: ${farm.accepts_ebt}</p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterbyyear(){
  let year= get("year").value;
  let build ="";


   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.year == year){
      build+= card(farm);
    }
  }
  output.innerHTML=build;
}


function filterbyboroandebt(){
  let boro= get("boro").value;
  let ebt= get("ebt").value;
  let build ="";


   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.borough == boro && farm.accepts_ebt == ebt){
      build+= card(farm);
    }
  }
  output.innerHTML=build;
}


function filterbyoperatingdayandhour(){
  let day= get("day").value;
  let hours= get("hours").value;
  let build ="";


   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.hoursoperations == hours && farm.daysoperation == day){
      build+= card(farm);
    }
  }
  output.innerHTML=build;
}