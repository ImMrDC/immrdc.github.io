
document.addEventListener("DOMContentLoaded", (event) => {
    // Vanilla JS to insert email    
    const email = document.querySelector('.load-email');
    const link = document.createElement('a');
link.href = `mailto:${email.dataset.u}@${email.dataset.d}`;

// Move existing content inside the <a>
link.append(...email.childNodes);

// Replace the original content with the link
email.appendChild(link);

    // const phone = document.querySelector('.load-phone');
    // phone.innerHTML = `<a href="tel:${phone.dataset.a}${phone.dataset.b}">${phone.dataset.c}${phone.dataset.d}</a>`;
});