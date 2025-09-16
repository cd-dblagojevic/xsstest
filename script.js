let paragraph = document.getElementById('xss');

function xssHover() {
	console.log(document.cookie);
}

if (paragraph) {
	paragraph.addEventListener('mouseover', xssHover);
	paragraph.textContent = "Hello";
}

console.log("Hello");

const url = 'https://dev.glacier.eco/documents';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        } else {
	}
        return response.text();
    })
    .then(html => {
        console.log('Fetched data:', html);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

