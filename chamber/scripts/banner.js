
function showhideBanner() {
    let d = new Date();
	
	let checkday = d.getDay();
	if (checkday > 0 && checkday < 4){
		checkday = 3;
	}	

	let s = document.getElementById(3);
	if (checkday == 3){
    	s.style.display = (s.style.display == 'block') ? 'none' : 'block';		
	}
  }
showhideBanner();