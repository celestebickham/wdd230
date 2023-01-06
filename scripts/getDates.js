const d = new Date();
let currentDay = d.getDay();
let copyright = d.getFullYear();
let lastmodified = document.lastModified;

document.querySelector('#copyright').textContent = '\u00A9' + copyright + " Celeste Bickham, Iowa";
document.querySelector('#lastmodified').textContent = "Last Modified On: " + lastmodified;

 