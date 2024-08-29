document.addEventListener('contextmenu', event => event.preventDefault()); // لمنع قائمة السياق
document.addEventListener('keydown', event => {
    if (event.key === 'PrintScreen') {
        event.preventDefault();
        alert('تصوير الشاشة غير مسموح.');
    }
});
