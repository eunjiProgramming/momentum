const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;
bgImage.style.position = 'fixed';
bgImage.style.top = '0';
bgImage.style.left = '0';
bgImage.style.width = '100%';
bgImage.style.height = '100vh';
bgImage.style.zIndex = '-1';

document.body.appendChild(bgImage);
