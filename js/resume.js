const radioBtns = document.querySelectorAll('input[type="radio"]');
const headerOfPart = document.querySelector('.resume__details h3');
const resumeDetails = document.querySelector('.resume__details-wrap');

radioBtns.forEach(radio => {
    radio.addEventListener('change', function() {
        const selectedRadio = this.value;

        if (selectedRadio === 'experience') {
            headerOfPart.textContent = 'My experience';
            resumeDetails.innerHTML = `
                <p>I am a motivated and passionate frontend developer with a solid understanding of modern web technologies. </p>
                <p>While I am new to the industry and currently lack commercial experience, I have completed educational projects that demonstrate my ability to create responsive and interactive web applications. </p>
                <p>These projects showcase my proficiency in HTML, CSS, JavaScript, and are available for review on <a href="./work.html" class="link-to-work">this page</a>.</p>
                <p>I am eager to contribute to a team and continue learning in a professional environment.</p>
            `;
        } else if (selectedRadio === 'education') {
            headerOfPart.textContent = 'My education';

            resumeDetails.innerHTML = `
            <div class="resume__details-wrap_about">
                <p class="resume__details-wrap_about-date">2023-2024</p>
                <p class="resume__details-wrap_about-position">FrontEnd developer</p>
                <p class="resume__details-wrap_about-place">IT mentor</p>
            </div>
            <div class="resume__details-wrap_about">
                <p class="resume__details-wrap_about-date">2022-2023</p>
                <p class="resume__details-wrap_about-position">FrontEnd developer</p>
                <p class="resume__details-wrap_about-place">RobotDreams</p>
            </div>
            <div class="resume__details-wrap_about">
                <p class="resume__details-wrap_about-date">2015-2019</p>
                <p class="resume__details-wrap_about-position">Bachelor Degree "Finance and credit"</p>
                <p class="resume__details-wrap_about-place">University of Banking</p>
            </div>
            `;
        } else if (selectedRadio === 'skills') {
            headerOfPart.textContent = 'My skills';

            resumeDetails.innerHTML = `
            <div class="resume__details-wrap_skill">
                <ion-icon name="logo-html5" class="icon"></ion-icon>
                <p>HTML</p>
            </div>
            <div class="resume__details-wrap_skill">
                <ion-icon name="logo-css3" class="icon"></ion-icon>
                <p>CSS</p>
            </div>
            <div class="resume__details-wrap_skill">
                <ion-icon name="logo-sass" class="icon"></ion-icon>
                <p>Sass</p>
            </div>
            <div class="resume__details-wrap_skill">
                <ion-icon name="logo-javascript" class="icon"></ion-icon>
                <p>JavaScript</p>
            </div>
            <div class="resume__details-wrap_skill">
                <ion-icon name="git-branch-outline" class="icon"></ion-icon>
                <p>Git</p>
            </div>
            <div class="resume__details-wrap_skill">
                <ion-icon name="logo-figma" class="icon"></ion-icon>
                <p>Figma</p>
            </div>
            <div class="resume__details-wrap_skill">
                <ion-icon name="logo-react" class="icon"></ion-icon>
                <p>React</p>
            </div>
            `;
        } else if (selectedRadio === 'languages') {
            headerOfPart.textContent = 'Languages';

            resumeDetails.innerHTML = `
                <div class="resume__details-wrap_lang">
                    <img src="./assets/icon/england.png" alt="">
                    <p>English - A2+</p>
                </div>
                <div class="resume__details-wrap_lang">
                    <img src="./assets/icon/poland.png" alt="">
                    <p>Polish - A1</p>
                </div>
                <div class="resume__details-wrap_lang">
                    <img src="./assets/icon/ukraine.png" alt="">
                    <p>Ukraine - native</p>
                </div>
            `;
        }
    })
})