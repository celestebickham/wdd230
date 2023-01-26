const rating = document.getElementById("ratingval");
const rangevalue = document.getElementById("rating");

function displayRatingValue() {
    ratingval.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

const un1 = document.querySelector("#username");
const un2 = document.querySelector("#username2");
const message = document.querySelector("#formmessage");

un2.addEventListener("focusout", checkSame);

function checkSame() {
	if (un1.value !== un2.value) {
		message.textContent = "Usernames DO NOT MATCH!";
		message.style.display = "block";
		un2.style.backgroundColor = "#aa3333";
		un2.style.color = "#fff";
		un2.focus();
		un2.value = "";
	} else {
		message.style.display = "none";
		un2.style.backgroundColor = "#fff";
		un2.style.color = "#000";
	}
}

function displayForm()
{
document.getElementById("displayform").style.display = "block";
document.getElementById("displayarea1").innerHTML = document.getElementById("fullname").value; 
document.getElementById("fullname").value = "";
document.getElementById("displayarea2").innerHTML = document.getElementById("email").value; 
document.getElementById("email").value = "";
document.getElementById("displayarea3").innerHTML = document.getElementById("rating").value; 
document.getElementById("rating").value = "";
document.getElementById("displayarea4").innerHTML = document.getElementById("username").value; 
document.getElementById("username").value = "";
}