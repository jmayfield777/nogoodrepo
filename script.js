const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const image = document.querySelector('.clickable-image');
const closeButton = document.getElementById('closeButton');
const videoSource = './NOGOODDREAM_WEB.mp4';
const creditsBtn = document.getElementById('creditsBtn');
const creditsContainer = document.getElementById('creditsContainer');
const credits = document.getElementById('creditsImg');
const creditSource = './Credits stills_5.1.1.webp';
const closeCredits = document.getElementById('closeCreditsButton');
const playPausebutton = document.getElementById('playPauseButton');
const infoBtn = document.getElementById('infoButton');
const infoContainer = document.getElementById('infoContainer');
const laurelOne = document.getElementById('laurelImageOne');
const laurelTwo = document.getElementById('laurelImageTwo');
const closeInfo = document.getElementById('closeInfoButton');
const email = document.getElementById('email');
const emailContainer = document.getElementById('emailContainer');
const laurelSourcOne = './image0.png';
const laurelSourcTwo = './image1.png';

image.addEventListener('click', function() {
    image.style.opacity = '0';
    creditsBtn.style.opacity = '0';
    infoBtn.style.opacity = '0';

    videoContainer.style.display = 'flex';
    videoContainer.style.flexDirection = 'column';

    setTimeout(() => {
        video.src = videoSource;
        video.style.opacity = '1';
        video.play();

        closeButton.style.opacity = '1';
    }, 1000);

    setTimeout(() => {
        image.classList.add('hidden');
        creditsBtn.classList.add('hidden');
        infoBtn.classList.add('hidden');
    }, 1000);
});

closeButton.addEventListener('click', function() {
    video.style.opacity = '0';
    closeButton.style.opacity = '0';

    setTimeout(() => {
        video.src = '';
        videoContainer.style.display = 'none'; // Hide video container after fade out

        image.style.opacity = '1';
        creditsBtn.style.opacity = '1';
        infoBtn.style.opacity = '1';

        image.classList.remove('hidden');
        creditsBtn.classList.remove('hidden');
        infoBtn.classList.remove('hidden');
    }, 1000);
});

creditsBtn.addEventListener('click', function() {
    creditsBtn.style.opacity = '0';
    image.style.opacity = '0';
    infoBtn.style.opacity = '0';

    setTimeout(() => {
        image.classList.add('hidden');
        creditsBtn.classList.add('hidden');
        infoBtn.classList.add('hidden');

        creditsContainer.style.display = 'flex';

        credits.src = creditSource;

        setTimeout(() => {
            credits.style.opacity = '1';
            closeCredits.style.opacity = '1';
        }, 100);

    }, 1000);
});

closeCredits.addEventListener('click', function() {
    credits.style.opacity = '0';
    closeCredits.style.opacity = '0';

    setTimeout(() => {
        creditsContainer.style.display = 'none';

        image.classList.remove('hidden');
        creditsBtn.classList.remove('hidden');
        infoBtn.classList.remove('hidden');

        image.style.opacity = '1';
        creditsBtn.style.opacity = '1';
        infoBtn.style.opacity = '1';
    }, 1000);
});

infoBtn.addEventListener('click', function() {
    infoBtn.style.opacity = '0';
    image.style.opacity = '0';
    creditsBtn.style.opacity = '0';

    setTimeout(() => {
        image.classList.add('hidden');
        infoBtn.classList.add('hidden');
        creditsBtn.classList.add('hidden');

        infoContainer.style.display = 'flex';
        emailContainer.style.display = 'flex';
        

        laurelOne.src = laurelSourcOne;
        laurelTwo.src = laurelSourcTwo;

        setTimeout(() => {
            laurelOne.style.opacity = '1';
            laurelTwo.style.opacity = '1';
            email.style.opacity = '1';
            closeInfo.style.opacity = '1';
        }, 100);
    }, 1000);
});

closeInfo.addEventListener('click', function() {
    laurelOne.style.opacity = '0';
    laurelTwo.style.opacity = '0';
    email.style.opacity = '0';
    
    closeInfo.style.opacity = '0';

    setTimeout(() => {
        infoContainer.style.display = 'none';
        image.classList.remove('hidden');
        creditsBtn.classList.remove('hidden');
        infoBtn.classList.remove('hidden');

        image.style.opacity = '1';
        creditsBtn.style.opacity = '1';
        infoBtn.style.opacity = '1';
    }, 1000);
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});