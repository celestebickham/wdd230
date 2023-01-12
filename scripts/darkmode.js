const modeButton = document.querySelector("#mode");
const darkness = document.querySelector("section");
const body = document.getElementsByTagName("body")[0];
const darkness1 = document.getElementById("darkmode1");
const darkness2 = document.getElementById("darkmode2");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
        body.style.background = "#fff"
		darkness.style.background = "#fff";
		darkness1.style.background = "#fff";
		darkness2.style.background = "#fff";
		darkness.style.color = "#000";
		darkness1.style.color = "#000";
		darkness2.style.color = "#000";
		modeButton.textContent = "❎ Dark Mode Off";
	} else {
        body.style.background = "#000"
		darkness.style.background = "#000";
		darkness1.style.background = "#000";
		darkness2.style.background = "#000";
		darkness.style.color = "#fff";
		darkness1.style.color = "#fff";
		darkness2.style.color = "#fff";
		modeButton.textContent = "☑️ Dark Mode On";
	}
});