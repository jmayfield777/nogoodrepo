// function showVideo() {
//     const textEl = document.querySelector('.clickable-text');
//     textEl.style.opacity = 0;

//     setTimeout(() => {
//         const videoContainer = document.getElementById('videoContainer');
//         const video = document.getElementById('video');
//         const videoSource = './NOGOODDREAM_WEB.mp4';

//         video.src = videoSource;
//         videoContainer.style.display = 'flex';

//         setTimeout(() => {
//             video.style.opacity = 1;
//         }, 100);
//     }, 1000);
// }

// function closeVideo(event) {
//     const videoContainer = document.getElementById('videoContainer');
//     const video = document.getElementById('video');
//     const textEl = document.querySelector('.clickable-text');
    
//     video.src = '';
//     videoContainer.style.display = 'none';

//     if (event) event.stopPropagation();
// }

const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const text = document.querySelector('.clickable-text');
const closeButton = document.getElementById('closeButton');
const videoSource = './NOGOODDREAM_WEB.mp4';
const creditsBtn = document.getElementById('creditsBtn');
const creditsContainer = document.getElementById('creditsContainer');
const credits = document.getElementById('creditsImg');
const creditSource = './Credits stills_5.1.1.webp';
const closeCredits = document.getElementById('closeCreditsButton');
const playPausebutton = document.getElementById('playPauseButton');


text.addEventListener('click', function() {
    videoContainer.style.display = 'flex'; // Show video container
    videoContainer.style.flexDirection = 'column';
    videoContainer.style.opacity = '1'; // Fade in video

    setTimeout(() => {
        video.style.opacity = '1'
        video.src = videoSource; // Start the video
        video.play();
    }, 1000);
        text.classList.add('hidden'); // Fade out text
        creditsBtn.classList.add('hidden');
});

closeButton.addEventListener('click', function() {
    video.src = ''; // Stop the video
    videoContainer.style.opacity = '0'; // Fade out video

    setTimeout(() => {
        videoContainer.style.display = 'none'; // Hide video container after fade out
        text.classList.remove('hidden'); // Fade text back in
        creditsBtn.classList.remove('hidden');
}, 1000); // Wait for the fade out transition to finish
});

// creditsBtn.addEventListener('click', function() {
//     creditsContainer.style.display = 'flex';
//     creditsContainer.style.opacity = '1';

//     setTimeout(() => {
//         credits.style.opacity = '1';
//         credits.src = creditSource;
//     }, 1000);
//     text.classList.add('hidden');
//     creditsBtn.classList.add('hidden');
// });

creditsBtn.addEventListener('click', function() {
    loadingContainer.style.display = 'flex';
    credits.style.display = 'none';

    credits.style.opacity = '0';

    credits.src = creditSource;

    creditsContainer.style.display = 'flex';
    creditsContainer.style.opacity = '1';

    credits.onload = function() {
        loadingContainer.style.display = 'none';
        credits.style.display = 'flex';

        setTimeout(() => {
            credits.style.opacity = '1';
        }, 1000);
    };

    text.classList.add('hidden');
    creditsBtn.classList.add('hidden');
});

closeCredits.addEventListener('click', function() {
    credits.src = '';
    creditsContainer.style.opacity = '0';

    setTimeout(() => {
        creditsContainer.style.display = 'none';
        text.classList.remove('hidden');
        creditsBtn.classList.remove('hidden');
    },1000);
});

// playPausebutton.addEventListener('click', () => {
//     if (video.paused) {
//         video.play();
//         playPausebutton.textContent = 'Pause';
//     } else {
//         video.pause();
//         playPausebutton.textContent = 'Play';
//     }
// });