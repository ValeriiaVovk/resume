let burger = document.querySelector('.burger-menu');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
const header = document.querySelector('.header');

const currentPath = window.location.pathname;

function getActiveClass(linkPath) {
    return currentPath.includes(linkPath) ? 'active' : '';
}

burger.addEventListener('click', (e) => {
    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        burger.classList.add('close');

        mobileMenu.classList.remove('active');
        setTimeout(() => {
            if (header.contains(mobileMenu)) {
                header.removeChild(mobileMenu);
            }
        }, 1000);
    } else {
        burger.classList.remove('close');
        burger.classList.add('open');
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
        <ul>
            <li><a href="index.html" class="${getActiveClass('index.html')}">Home</a></li>
            <li><a href="resume.html" class="${getActiveClass('resume.html')}">Resume</a></li>
            <li><a href="work.html" class="${getActiveClass('work.html')}">Work</a></li>
            <li><a href="contact.html" class="${getActiveClass('contact.html')}">Contact</a></li>
        </ul>
        `;

        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 10);
    }
})