const images = ["workplace.jpeg","workplace2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * (images.length))];

document.body.style.backgroundImage = `url(img/${chosenImage})`;  