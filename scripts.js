
document.addEventListener("DOMContentLoaded", (event) => {
    AOS.init({
        offset: getAOSOffset(),
        duration: 600,
        once: true
    });
    // Handle both click and keyboard (Enter/Space)
    emailElem.addEventListener('click', openEmailLink);
    emailElem.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openEmailLink();
        }
    });
});
function base64Decode(str) {
    try {
        return atob(str);
    } catch (e) {
        return '';
    }
}

const emailElem = document.querySelector('.load-email');

function openEmailLink() {
    const user = base64Decode(emailElem.dataset.u);
    const domain = base64Decode(emailElem.dataset.d);
    const email = `${user}@${domain}`;

    window.location.href = `mailto:${email}`;
}
function getAOSOffset() {
    // tweak the breakpoint and values to taste
    return window.matchMedia('(max-width: 768px)').matches ? 40 : 120;
}