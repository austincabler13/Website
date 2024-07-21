document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('Thank you for your interest! More information coming soon.');
});

document.getElementById('learn-more-btn').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.highlight').offsetTop,
        behavior: 'smooth'
    });
});
