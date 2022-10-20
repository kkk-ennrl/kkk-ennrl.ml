function log(a) {let t = "";t += "Victus🤖 - Log\n";t += a; console.log(t)} function victusStartupMessage() {let text = "";text += "KKKrendel Technologies\n";	text += "Project Victus Started!\n"; text += "version: " + victus.version +"\n";	text += "Приятного использования💗";console.log(text)}
let victus = {}

victus.version = "0.0.1 developer preview"

victus.css = `
.victus-block {
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(20px);
	z-index: 9999;
}

.victus-block .victus-close {
	position: absolute;
	top: 10px;
	right: 10px;
	font-weight: 500;
	font-size: 50px;
	transform: rotate(45deg);
	cursor: pointer;
	color: white;
	user-select: none;
	font-family: sans-serif;
}
@media screen and (min-width: 1000px)
 {
 	.victus-block #victus-input-box {
 		width: calc(800px - 20px);
 		padding: 10px;
 		position: absolute;
 		line-height: 25px;
 		font-size: 18px;
 		color: white;
 		top: 100px;
 		outline: none;
 		background: rgba(50, 50, 50, 1);
 		left: calc(50% - 400px);
 		border: 1px solid rgba(255, 255, 255, 0.1);
 		border-radius: 4px;
 	}
 }
`
victus.html = `
<div class="victus-close" onclick="victusLogOn()">+</div>
<input type="text" id="victus-input-box" placeholder="Введите запрос на выполнение">
<div class="victus-result"></div>
`



victus.start = false

victus.child = null

victus.enabled = false

window.addEventListener("DOMContentLoaded", function(){

	if (victus.enabled) {

		victusStartupMessage()

		let styleInject = document.createElement("style")
		styleInject.innerHTML = victus.css
		document.head.appendChild(styleInject)

		window.addEventListener("keyup", victusEvent)

	}	

})


function victusEvent(event) {
	console.log(event.key)
	if (event.key == "V" && !victus.start) {victusStartUp()}
	if (event.key == "М" && !victus.start) {victusStartUp()}
	if (event.code == "Escape" && victus.start) { victusLogOn() }
}

function victusStartUp() {
	log("Victus Started");
	victus.start = true;

	victus.child = document.createElement("div");

	victus.child.classList = "victus-block"

	victus.child.innerHTML = victus.html

	document.body.appendChild(victus.child)

}
function victusLogOn() {
	log("Victus Stoped!");
	victus.start = false;

	document.body.removeChild(victus.child)

}