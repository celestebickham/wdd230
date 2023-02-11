
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


const getDirectory = async (filter = filterval) => {
	let company = await jsonFetch(url);
    switch (filter) {
		case "gold":
			company = company.filter((seedata) => (seedata.level === "Gold" || seedata.level === "Silver"));
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

	company.forEach((seedata) => {
		let card = document.createElement("div");
        let stats = document.createElement("div");
		stats.classList.add("stats");
		let name = document.createElement("p");		
		let address = document.createElement("p");
		let phone = document.createElement("p");
		let url = document.createElement("p");
		let level = document.createElement("p");
		let length = document.createElement("p");
		//let other = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = `${seedata.name}`;
		address.innerHTML = ` ${seedata.address}`;
		phone.innerHTML = ` ${seedata.phone}`;
		url.innerHTML = `${seedata.url}`;
		level.innerHTML = `${seedata.level} Member`;
		//other.innerHTML = `<span class="label">Other:</span> ${seedata.other}`;

		image.setAttribute("src", seedata.image);
		image.setAttribute(
			"alt",
			`${seedata.name}`
		);
		image.setAttribute("loading", "lazy");
		image.setAttribute("width", "150");

		stats.appendChild(image);
		stats.appendChild(name);
		stats.appendChild(address);
		stats.appendChild(phone);
		stats.appendChild(url);
		stats.appendChild(level);
		//stats.appendChild(other);

		//card.appendChild(h2);
		card.appendChild(stats);

		cards.appendChild(card);
	});
};

getDirectory();