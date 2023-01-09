import { getRandomPx } from "./modal";
import { getRandomPosition } from "./modal";

export const modalView = {
	modalElement: document.getElementById("myModal"),
	btnNoElement: document.getElementById("btn-no"),

	open() {
		this.modalElement.style.display = "flex";
		this.modalElement.style.flexWrap = "wrap";
		this.modalElement.style.flexDirection = "column";
	},

	close() {
		this.modalElement.style.display = "none";
	},

	move() {
		let randomPx = getRandomPx(120, 150);
		let randomPosition = getRandomPosition([
			"flex-end",
			"flex-start",
			"space-around",
			"space-between",
			"center",
		]);
		this.modalElement.style.padding = `${randomPx}px`;
		this.modalElement.style.alignContent = randomPosition;
	},

	moveToCenter() {
		this.modalElement.style.padding = "0px";
		this.modalElement.style.alignContent = "center";
	},

	changeText(text) {
		this.btnNoElement.innerText = text;
	},

	changeTextToYes() {
		this.changeText("Да");
	},

	changeTextToNo() {
		this.changeText("Нет");
	},
};

export const mainPageView = {
	titleText: document.getElementById("title"),
	questionText: document.getElementById("question"),
	openBtn: document.getElementById("btn-op"),
	gachiGif: document.getElementById("gachi"),

	changetTitleText() {
		this.titleText.innerText = "Мы знали, что Вы настоящий айтишник!";
	},

	changeQuestionText() {
		this.questionText.innerText =
			"Спасибо за пройденный опрос. Не желаете еще?";
	},

	changeOpenBtnText() {
		this.openBtn.innerText = "Повторить";
	},

	addGif() {
		this.gachiGif.innerHTML =
			'<img class="gachi-gif" src="./src/assets/gachimuchi-steve-rambo.gif" alt="it-шник"></img>';
	},
};
