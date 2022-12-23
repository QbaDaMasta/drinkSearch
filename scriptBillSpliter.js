const btn = document.querySelector(".count");
const err = document.querySelector(".error");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");
const price = document.querySelector("#price");
const people = document.querySelector("#people");
const chosenTip = document.querySelector("#tip");

const showBill = () => {
	if (price.value !== "" && people.value !== "" && chosenTip.value != 0) {
		countBill();
	} else {
		err.textContent = "Wprowadz wszystkie dane";
		costInfo.style.display = "none";
	}
};
const countBill = () => {
	// const price1 = Number(price.value);
	const price1 = parseFloat(price.value);

	// const people1 = Number(people.value);
	const people1 = parseInt(people.value);

	// const tip1 = Number(chosenTip.value);
	const tip1 = parseFloat(chosenTip.value);

	const bill = ((price1 + price1 * tip1) / people1).toFixed(2);
	costInfo.style.display = "block";
	cost.textContent = bill;
	err.textContent = "";
};

btn.addEventListener("click", showBill);
