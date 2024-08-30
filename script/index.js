const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
function updateHeroText() {
    const heroText = document.getElementById('heroText');
    if (window.innerWidth < 576) {
        heroText.textContent = "Full Stack Developer";
    } else if (window.innerWidth < 768) {
        heroText.textContent = "I'm a Full Stack Developer";
    } else {
        heroText.textContent = "A Full Stack Developer from Hyderabad";
    }
}
updateHeroText();
window.addEventListener('resize', updateHeroText);
