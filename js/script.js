// script.js
function changeLanguage(language) {
    fetch(`translations/${language}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('summary-text').innerText = data.summary;
            document.getElementById('linkedin-text').innerText = data.linkedin;
            // Update other elements similarly
        })
        .catch(error => console.error('Error fetching translation:', error));
}
