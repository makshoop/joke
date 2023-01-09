import { modalView } from "./view";
import { mainPageView } from "./view";

let btn = document.getElementById("btn-op");
let count = 0;

btn.onclick = () => {
	modalView.open();
	modalView.btnNoElement.addEventListener("mouseover", mouseOverHandler);
};

export function getRandomPx(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomPosition(modalPosition) {
	return modalPosition[Math.floor(Math.random() * modalPosition.length)];
}

export function getRandomCount(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getRandomBoolean() {
	return Math.random();
}

function mouseOverHandler() {
	let randomBoolean = getRandomBoolean();

	count = ++count;
	modalView.move();

	if (count >= 5 && randomBoolean >= 0.8) {
		modalView.moveToCenter();
		modalView.changeTextToYes();
		modalView.btnNoElement.removeEventListener("mouseover", mouseOverHandler);
	}
}

modalView.btnNoElement.addEventListener("click", () => {
	modalView.moveToCenter();
	modalView.close();
	modalView.changeTextToNo();
	mainPageView.changetTitleText();
	mainPageView.changeQuestionText();
	mainPageView.changeOpenBtnText();
	mainPageView.addGif();
});

// const obj = {
// 	word: "hello",
// };

// const obj2 = obj;

// console.log(obj.word); // "hello"
// console.log(obj2.word); //

// const obj3 = obj;

// obj3.word = "хуй";

// console.log(obj.word); // "хуй"
// console.log(obj2.word); // "хуй"
// console.log(obj3.word); // "хуй"
