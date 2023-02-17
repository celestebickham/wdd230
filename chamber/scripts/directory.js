const url = "https://celestebickham.github.io/wdd230/chamber/directory.json";
let filterval = "";

var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
if(sPage == "index.html"){
    filterval = "gold";
}

else {
    filterval = "all";
}

let randomstartlength = 0;
let randomendlength = 9;
const getDirectory = async (filter = filterval) => {
	let company = await jsonFetch(url);
    switch (filter) {
		case "gold":
			company = company.filter((seedata) => (seedata.level === "Gold" || seedata.level === "Silver"));
			randomendlength = Math.floor(Math.random() * 7);
			
			if (randomendlength <= 2){
				randomstartlength =  0;
				randomendlength = 2;
			}
			else {
				randomstartlength = randomendlength-2;
			}
			break;
		default:
			break;
	}
	displayDirectory(company);
};

async function jsonFetch(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data.member;
}

const displayDirectory = (company) => {
	const cards = document.querySelector("div.cards");
	cards.innerHTML = "";

	for (seedata = randomstartlength; seedata<randomendlength; seedata++)
	{
		let card = document.createElement("div");
        let stats = document.createElement("div");
		stats.classList.add("stats");
		let name = document.createElement("p");		
		let address = document.createElement("p");
		let phone = document.createElement("p");
		let url = document.createElement("p");
		let level = document.createElement("p");
		let length = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = `${company[seedata].name}`;
		address.innerHTML = ` ${company[seedata].address}`;
		phone.innerHTML = ` ${company[seedata].phone}`;
		url.innerHTML = `${company[seedata].url}`;
		level.innerHTML = `${company[seedata].level} Member`;

		image.setAttribute("src", company[seedata].image);
		image.setAttribute(
			"alt",
			`${company[seedata].name}`
		);
		image.setAttribute("loading", "lazy");
		image.setAttribute("width", "150");

		stats.appendChild(image);
		stats.appendChild(name);
		stats.appendChild(address);
		stats.appendChild(phone);
		stats.appendChild(url);
		stats.appendChild(level);

		card.appendChild(stats);
		cards.appendChild(card);
	};
};

getDirectory();