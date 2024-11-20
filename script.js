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
    text.style.opacity = '0';
    creditsBtn.style.opacity = '0';

    videoContainer.style.display = 'flex'; // Show video container
    videoContainer.style.flexDirection = 'column';
    // videoContainer.style.opacity = '1'; // Fade in video

    setTimeout(() => {
        video.style.opacity = '1'
        video.src = videoSource; // Start the video
        video.play();

        closeButton.style.opacity = '1';
    }, 1000);

    setTimeout(() => {
        text.classList.add('hidden');
        creditsBtn.classList.add('hidden');
    }, 1000);
});

closeButton.addEventListener('click', function() {
    video.style.opacity = '0';
    closeButton.style.opacity = '0';

    setTimeout(() => {
        video.src = '';
        videoContainer.style.display = 'none'; // Hide video container after fade out

        text.style.opacity = '1';
        creditsBtn.style.opacity = '1';

        text.classList.remove('hidden'); // Fade text back in
        creditsBtn.classList.remove('hidden');
    }, 1000); // Wait for the fade out transition to finish
});

// creditsBtn.addEventListener('click', function() {
//     text.style.opacity = '0';
//     creditsBtn.style.opacity = '0';

//     setTimeout(() => {
//         text.classList.add('hidden');
//         creditsBtn.classList.add('hidden');
//     }, 1000);

//     // loadingContainer.style.display = 'flex';
//     credits.style.display = 'none';

//     credits.style.opacity = '0';
//     credits.src = creditSource;

//     creditsContainer.style.display = 'flex';
//     creditsContainer.style.opacity = '1';

//     // credits.onload = function() {
//     //     loadingContainer.style.display = 'none';
//     //     credits.style.display = 'flex';

        
//     // };

//     setTimeout(() => {
//         credits.style.opacity = '1';
//     }, 1000);

//     setTimeout(() => {
//         closeCredits.style.opacity = '1';
//     }, 1000);
// });

creditsBtn.addEventListener('click', function() {
    creditsBtn.style.opacity = '0';
    text.style.opacity = '0';

    setTimeout(() => {
        text.classList.add('hidden');
        creditsBtn.classList.add('hidden');

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

        text.classList.remove('hidden');
        creditsBtn.classList.remove('hidden');

        text.style.opacity = '1';
        creditsBtn.style.opacity = '1';
    },1000);
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