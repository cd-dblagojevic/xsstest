var paragraph = document.getElementById('xss');

const cookies = window.parent.document.cookie;
// Check if the element exists
if (paragraph) {
    // Add text to the <p> element
    paragraph.textContent = "Hello Cookies: " + cookies;
}

console.log("Hello Cookies: " + cookies);
