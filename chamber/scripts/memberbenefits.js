
function memberBenefits(value){
	document.getElementById("displayform").style.display = "block";
	document.getElementById("level").innerHTML = "<i style='text-transform:uppercase; color:"+value+";'>"+value+" </i>";

	if(value === "npmembership"){
		document.getElementById("membercost").innerHTML = "No Fee";
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
		document.getElementById("membercost").innerHTML = "$50.00/Year";
		document.getElementById("memberinfo").innerHTML = "Bronze level gives you access to all of the member luncheons each month";
		document.getElementById("level").innerHTML = "<i style='text-transform:uppercase; color:#cd7f32;'>"+value+"</i>";
	}
	else{
		document.getElementById("memberinfo").innerHTML = "Please select a member level";
		document.getElementById("membercost").innerHTML = "A billion dollars	";
	}
}

// uses the getdates.js to set the field value
document.getElementById('loadtime').value =  lastmodified;