let image_slider = document.getElementById('images-container');
let main_image = document.getElementById('main_image');
let image_paths = [
    "Images/Certificates/C Introduction.jpg",
    "Images/Certificates/cmd udemy.jpg",
    "Images/Certificates/Flask Python.jpg",
    "Images/Certificates/Javascript SoloLearn introduction.jpg",
    "Images/Certificates/Js Udemy Pro.jpg",
    "Images/Certificates/Js Udemy.jpg",
    "Images/Certificates/Networks Eddrak.jpg",
    "Images/Certificates/Networks Udemy Basics.jpg",
    "Images/Certificates/Networks Udemy.jpg",
    "Images/Certificates/python crash course.jpg",
    "Images/Certificates/python pro sololearn.jpg",
    "Images/Certificates/python sololearn.jpg",
    "Images/Certificates/Python Terocoures.jpg",
    "Images/Certificates/Web Scraping.jpg",
];

function change(image_name, circle_unique) {
    main_image.src = image_name;
    let circles = document.querySelectorAll('#images-container span');
    for (let circle of circles) {
        circle.style.backgroundColor = 'grey';
    }
    circle_unique.style.backgroundColor = 'lime';
}

function getRandomImagePath() {
    const randomIndex = Math.floor(Math.random() * image_paths.length);
    change(image_paths[randomIndex],document.querySelectorAll('#images-container span')[randomIndex])
    return image_paths[randomIndex];
}

for (let counter = 0; counter < image_paths.length; counter++) {
    let circle = document.createElement('span');
    circle.id = 'circle' ; 
    (function(counter) {
        circle.addEventListener('click', () => {
            change(image_paths[counter], circle);
        });
    })(counter); // Using IIFE to capture the value of counter
    image_slider.appendChild(circle);
}

let invterval = setInterval(() => {

        main_image.src = getRandomImagePath();
}, 3000);
