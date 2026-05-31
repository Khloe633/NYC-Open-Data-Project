let data, info, leftPanel, mapObj;

async function init(){   
  let link = "https://data.cityofnewyork.us/resource/8vwk-6iz2.json";
  info = await fetch(link);
  data = await info.json();

  let output = get("output");
  let build = "";

 for(let i = 0; i< data.length; i+=1){
    let farm = data[i];
    build+= card(farm);
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

//dropdown filters
  let dayoperation = fillDropDown("daysoperation");
  document.get("dayoperation").innerHTML = dayoperation;

  let hours = fillDropDown("hoursoperations");
  document.get("hours").innerHTML = hours;
  
  let boro = fillDropDown("borough");
  document.get("boro").innerHTML = boro;

  let ebt = fillDropDown("accepts_ebt");
  document.get("ebt").innerHTML = ebt;  
}


function filterbyboroandebt(){
  let boros= get("boro").value;
  let ebts= get("ebt").value;
  let build ="";


   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.borough == boros && farm.accepts_ebt == ebts){
      build+= card(farm);
    }
  }
  output.innerHTML=build;
}

//FIlter by Operating hours and days (use select)
function filterbyoperatingdayandhour(){
  let daysoperation= get("dayoperation").value;
  let hour= get("hours").value;
  let build ="";


   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.hoursoperations == hour && farm.daysoperation == dayoperation){
      build+= card(farm);
    }
  }
  output.innerHTML=build;
}

//showmap
function displayMap(){
  //Retrieve the latitude & longitude from the user via text inputs and pass it to the showMap() function to generate the map and display it.
  let lat = get("lat").value;
  let lon = get("lon").value;

  showMap(lat,lon);
  
}

//Analysis.html of  function 

//Data source：
async function onto(){
  let link = "https://data.cityofnewyork.us/resource/8vwk-6iz2.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function ByAgency(){
//Create and initialize variables:
let nypd = 0, dot = 0, hpd = 0, other = 0;

for(let i = 0; i < data.length; i++){
  let farm = data[i];


}
  }


function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, 
    data: {
      columns: data, 
      type: chart_type 
    }
  });
}