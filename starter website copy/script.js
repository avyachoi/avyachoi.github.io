
function setup() {
	let sketchCanvas = createCanvas(450,450);
	sketchCanvas.parent("myCanvas");

}
function draw(){
	background(255,0,255);
}

window.onload = (event) => {
	let paragraph = document.querySelector("p")
console.log(paragraph)
paragraph.classList.add("magenta-text");



let text = document.querySelector("p#myText")

console.log(text)
console.log(text.innerHTML)


let container = document.querySelector("div#ok-container")
console.log(container)
for(let i = 0; i<10; i++){
	container.innerHTML += "<p>" + text.innerText + "</p>"
}

const btn = document.querySelector("button#dont");

btn.addEventListener("click", () =>{
	container.innerHTML += "<p>" + text.innerText + "</p>"
	let header = document.querySelector("h1")
	header.classList.add("magenta-text");
})
};
