var paragraph = document.getElementById('xss');

// Check if the element exists
if (paragraph) {
    // Add text to the <p> element
    paragraph.textContent = 'hi';
}

console.log("hello");
