let date = new Date().toLocaleDateString();

if (localStorage.getItem('date') === null){
    localStorage.setItem("lastvisit-ls", date);
}

let first = localStorage.getItem('lastvisit-ls');
let second = date;

function datediff(first, second) {        
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function parseDate(str) {
  var mdy = str.split('/');
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

let text = datediff(parseDate(first), parseDate(second));

document.getElementById("lastvisit").innerHTML = text + " days since your last visit.";

localStorage.setItem("lastvisit-ls", date);