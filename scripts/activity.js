const base = "../activity.json";
let value="";
// Using fetch to get data

async function getapi(url) {
    
            // Storing response
    const response = await fetch(url);
            
            // Storing data in form of JSON
    let data = await response.json();
           // console.log(data);
        show(data);
    }
// Calling that async function
getapi(base);          
         
const startlink = '<a href="';
const endlink = '">';
const closelink = '</a>'

function show(data) {
    let seedata = data;
    //console.log(seedata);
    // Setting innerHTML as tab variable
    
let showeek1 = "";
let showeek2 = "";
let showeek3 = "";
let showeek4 = "";
let showeek5 = "";
    for (let i = 0; i < seedata.week01.length; i++) {      
        showeek1 += startlink+seedata.week01[i]['url']+endlink+seedata.week01[i]['title']+closelink + " | ";
      }
    for (let i = 0; i < seedata.week02.length; i++) {      
        showeek2 += startlink+seedata.week02[i]['url']+endlink+seedata.week02[i]['title']+closelink + " | ";
      }
      
    for (let i = 0; i < seedata.week03.length; i++) {      
        showeek3 += startlink+seedata.week03[i]['url']+endlink+seedata.week03[i]['title']+closelink + " | ";
      }
      
    for (let i = 0; i < seedata.week04.length; i++) {      
        showeek4 += startlink+seedata.week04[i]['url']+endlink+seedata.week04[i]['title']+closelink + " | ";
      }
      
    for (let i = 0; i < seedata.week05.length; i++) {      
        showeek5 += startlink+seedata.week05[i]['url']+endlink+seedata.week05[i]['title']+closelink + " | ";
      }

document.getElementById("links1").innerHTML = "<b>Week01:</b> " +  showeek1;
document.getElementById("links2").innerHTML = "<b>Week02:</b> " +  showeek2;
document.getElementById("links3").innerHTML = "<b>Week03:</b> " +  showeek3;
document.getElementById("links4").innerHTML = "<b>Week04:</b> " +  showeek4;
document.getElementById("links5").innerHTML = "<b>Week05:</b> " +  showeek5;
}
