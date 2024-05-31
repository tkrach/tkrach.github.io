document.addEventListener('DOMContentLoaded', () => {
    const langSwitch = document.querySelectorAll('nav ul li a');
    
    langSwitch.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });
});
