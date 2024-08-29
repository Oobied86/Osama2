document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('main section').forEach(section => {
            section.classList.add('hidden');
        });
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.classList.remove('hidden');
        }
    });
});
