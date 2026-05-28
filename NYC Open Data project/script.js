let data, info, leftPanel, mapObj;

async function init(){   
  let link = "https://data.cityofnewyork.us/resource/8vwk-6iz2.json";
  info = await fetch(link);
  data = await info.json();
  
   let leftPanel = get("leftPanel");
  let build = "";

 for(let i = 0; i< data.length; i+=1){
    let farm = data[i];
    build+= card(farm);
  }
  leftPanel.innerHTML = build;
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

//FIlter by Operating hours and days (use select)
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

//Analysis.html of  function 

//Function that accepts the data, an id to the div to display the chart, and the type of chart
function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, 
    data: {
      columns: data, 
      type: chart_type 
    }
  });
}


function budgetChart(){
  displayChart(budget, "chart", "pie");
}


function chart(type){
  data = [];
  displayChart(data, "chart",type);
}

  

