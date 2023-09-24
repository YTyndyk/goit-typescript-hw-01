// import { concatenation } from "./concatenation";

// const button = document.querySelector("button")!;
// const input = document.querySelector("input")!;

// if (button && input) {
// 	button.addEventListener("click", () => {
// 		concatenation(input.value, "hello!");
// 	});
// }
const enum Days {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

const weekend = {
	saturday: Days.Saturday,
	sanday: Days.Sunday,
};

function isWeekend(day: Days) {
	if (weekend) {
		return true;
	}
}
isWeekend(Days.Saturday);
