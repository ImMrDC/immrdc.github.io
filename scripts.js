
document.addEventListener("DOMContentLoaded", (event) => {
    // Vanilla JS to insert email    
    const email = document.querySelector('.load-email');
    email.innerHTML = `<a href="mailto:${email.dataset.u}@${email.dataset.d}">${email.dataset.u}@${email.dataset.d}</a>`;

    // const phone = document.querySelector('.load-phone');
    // phone.innerHTML = `<a href="tel:${phone.dataset.a}${phone.dataset.b}">${phone.dataset.c}${phone.dataset.d}</a>`;
});