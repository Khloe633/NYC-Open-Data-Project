let data, info, leftPanel, mapObj;

async function init(){
  let link = "farm.json";
  info = await fetch(link);
  data = await info.json();

  let output = get("output");
  let build = "";


 for(let i = 0; i< data.length; i+=1){
    let farm = data[i];
    build+= card(farm);
  }
  output.innerHTML = build;


//dropdown filters
   let days = fillDropDown("daysoperation");
  document.getElementById("days").innerHTML = days;

  let hours = fillDropDown("hoursoperations");
  document.getElementById("hours").innerHTML = hours;
  
  let boro = fillDropDown("borough");
  document.getElementById("boro").innerHTML = boro;

  let ebt = fillDropDown("accepts_ebt");
  document.getElementById("ebt").innerHTML = ebt;  
}

//filter by year
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
  let day= get("days").value;
  let hour= get("hours").value;
  let build ="";

   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.hoursoperations == hour && farm.daysoperation == day){
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

async function init(){
  let link = "farm.json";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function accidentsByBorough(){
//Create and initialize variables:
let q = 0, bk = 0, bx = 0, m = 0, s = 0;

for(let i = 0; i < data.length; i++){
    let farm = data[i];
    if(farm.borough == "QUEENS"){
      q++;
    }else if(farm.borough == "MANHATTAN"){
      m++;
    }else if(farm.borough == "BROOKLYN"){
      bk++;
    }else if(farm.borough == "BRONX"){
      bx++;
    }else if(farm.borough == "STATEN ISLAND"){
      s++;
    }
  }

  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
];

let chartType = get("chartType").value;

displayChart(chartData,"chart",chartType)
}


