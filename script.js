let parent = document.parent;
let paragraph = parent.document.getElementById('xss');

function xssHover() {
	console.log(document.cookie);
}

if (paragraph) {
	paragraph.addEventListener('mouseover', xssHover);
	paragraph.textContent = "Hello";
}

console.log("Hello");
