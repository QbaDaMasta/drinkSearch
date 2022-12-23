const search = document.querySelector(".search");
// const drinkList = document.querySelector("ul");
const drinkItems = document.querySelectorAll("li");
// const letters = /[a-z]/i;

// console.log(drinkItems);
// const searchDrink1 = () => {
// 	let letter = input.value;
// 	if (letter === drinkList.indexOf()) {
// 		console.log(letter);
// 	} else {
// 		console.log("nie ok");
// 	}
// };

const searchDrink = (e) => {
	const text = e.target.value.toLowerCase();

	drinkItems.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

// searchDrink();

search.addEventListener("keyup", searchDrink);
