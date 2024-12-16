if (submit && reviewForm) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();

        let review = parseInt(localStorage.getItem('reviewCount')) || 0;

        review++;

        localStorage.setItem('reviewCount', review);

        reviewForm.reset();

        window.location.href = 'confirmation.html';
    });
}


if (reviewCount) {
    const reviews = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount.textContent = reviews;
}

