const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});


function memberBenefits(value){
	document.getElementById("displayform").style.display = "block";
	document.getElementById("level").innerHTML = "<i style='text-transform:uppercase; color:"+value+";'>"+value+"</i>";

	if(value === "npmembership"){
		document.getElementById("membercost").innerHTML = "$20.00/Year";
		document.getElementById("memberinfo").innerHTML =  "Non-Profit level gives you access to all of the member luncheons each month and a paper certificate";
	}
	else if(value === "gold"){
		document.getElementById("membercost").innerHTML = "$100.00/Year";
		document.getElementById("memberinfo").innerHTML =  "Gold level gives you access to all of the member luncheons each month and you don't have present at the lunch.";
	}
	else if(value === "silver"){
		document.getElementById("membercost").innerHTML = "$75.00/Year";
		document.getElementById("memberinfo").innerHTML = "Silver level gives you access to all of the member luncheons each month and free food at the lunch";
	}
	else if(value === "bronze"){
		document.getElementById("membercost").innerHTML = value;
		document.getElementById("memberinfo").innerHTML = "Bronze level gives you access to all of the member luncheons each month";
		document.getElementById("level").innerHTML = "<i style='text-transform:uppercase; color:#cd7f32;'>"+value+"</i>";
	}
	else{
		document.getElementById("memberinfo").innerHTML = "Please select a member level";
		document.getElementById("membercost").innerHTML = "A billion dollars	";
	}
}