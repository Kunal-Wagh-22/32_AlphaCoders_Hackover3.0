document.querySelectorAll('.alert').forEach(e => {
    e.addEventListener('click', () => {
        alert('You are now following this event');
    });
});