document.getElementById('main-menu-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    const subMenu = document.getElementById('sub-menu');
    subMenu.classList.toggle('hidden');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.id !== 'main-menu-toggle') {
            event.preventDefault();
            document.querySelectorAll('main section').forEach(section => {
                section.classList.add('hidden');
            });
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.classList.remove('hidden');
            }
