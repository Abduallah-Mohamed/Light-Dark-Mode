const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark or Light Images
function images(color) {
    image1.src = `/img/undraw_conceptual_idea_${color}.svg`;
    image3.src = `/img/undraw_feeling_proud_${color}.svg`;
    image2.src = `/img/undraw_proud_coder_${color}.svg`;
}



// dark mode Styles
function darkMode() {
    const RsunAmoon = toggleIcon.children[1].classList;

    // Deal with elements
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode';
    RsunAmoon.replace('fa-sun', 'fa-moon');

    // add the dark images in the dark mode
    images('dark');
}

// Light mode Styles
function lightMode() {
    const RsunAmoon = toggleIcon.children[1].classList;

    // Deal with elements
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'Light Mode';
    RsunAmoon.replace('fa-moon', 'fa-sun');

    // add the dark images in the dark mode
    images('light')
}



// switch to dark mode and vice versa
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
        lightMode();
    }
}

// console.log(localStorage)




// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage
const currenttheme = localStorage.getItem('data-theme');
// console.log(currenttheme)
if (currenttheme) {
    document.documentElement.setAttribute('data-theme', currenttheme);

    if (currenttheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}