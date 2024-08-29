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

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'عمل جديد';
            img.style.border = '2px solid #333';
            img.style.borderRadius = '10px';
            document.getElementById('work-gallery').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
