let data, info, leftPanel, mapObj;

async function init(){
  //Challenge 1: Provide the API link to the 311 data.
  let link ="farm.json"; 
  info = await fetch(link);
  data = await info.json();
  //console.log(data);
  leftPanel = get("leftPanel");
  let build = "";

  // generate cards
  for(let i = 0; i < data.length; i+=1) {
    let farm = data[i];
    build += card(farm);
  }
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
  leftPanel = get("leftPanel");
  let year= get("year").value;
  let build ="";

   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.year == year){
      build+= card(farm);
    }
  }
  leftPanel.innerHTML=build;
}

function filterbyboroandebt(){
  leftPanel = get("leftPanel");
  let boros= get("boro").value;
  let ebts= get("ebt").value;
  let build ="";

   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.borough == boros && farm.accepts_ebt == ebts){
      build+= card(farm);
    }
  }
 leftPanel.innerHTML = build; 
}
  

//FIlter by Operating hours and days (use select)
function filterbyoperatingdayandhour(){
  leftPanel = get("leftPanel");
  let day= get("days").value;
  let hour= get("hours").value;
  let build ="";

   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.hoursoperations == hour && farm.daysoperation == day){
      build+= card(farm);
    }
  }
  leftPanel.innerHTML=build;
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
    if(farm.borough == "Queens"){
      q++;
    }else if(farm.borough == "Manhattan"){
      m++;
    }else if(farm.borough == "Brooklyn"){
      bk++;
    }else if(farm.borough == "Bronx"){
      bx++;
    }else if(farm.borough == "Staten Island"){
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

//map

function displayMap(){
    let lat = parseFloat(get("lat").value);
    let lon = parseFloat(get("lon").value);
  showMap(lat,lon);
}
