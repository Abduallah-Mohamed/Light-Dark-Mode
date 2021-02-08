const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or Light Images
function images(color) {
    image1.src = `./img/undraw_conceptual_idea_${color}.svg`;
    image3.src = `./img/undraw_feeling_proud_${color}.svg`;
    image2.src = `./img/undraw_proud_coder_${color}.svg`;
}

// the function to Enhance the code a little bit 
function toggleDarkLightMode(isLight) {
    const RsunAmoon = toggleIcon.children[1].classList;

    // Deal with elements
    nav.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Dark Mode' : 'Light Mode';
    isLight ? RsunAmoon.replace('fa-sun', 'fa-moon') : RsunAmoon.replace('fa-moon', 'fa-sun');
    // add the dark images in the dark mode
    isLight ? images('dark') : images('light');
}

// switch to dark mode and vice versa
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
        toggleDarkLightMode(false);
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage
const currenttheme = localStorage.getItem('data-theme');
// console.log(currenttheme)
if (currenttheme) {
    document.documentElement.setAttribute('data-theme', currenttheme);

    if (currenttheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}
