var paragraph = document.getElementById('xss');

function xssHover() {
	console.log(document.cookie);
}
// Check if the element exists
if (paragraph) {
    // Add text to the <p> element
	paragraph.addEventListener('mouseover', xssHover);
	paragraph.textContent = "Hello";
}

console.log("Hello");
