var paragraph = document.getElementById('xss');

// Check if the element exists
if (paragraph) {
    // Add text to the <p> element
    paragraph.textContent = document.cookie;
}

console.log(document.cookie);
