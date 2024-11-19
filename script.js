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

text.addEventListener('click', function() {
    videoContainer.style.display = 'flex'; // Show video container
    videoContainer.style.opacity = '1'; // Fade in video

    setTimeout(() => {
        video.style.opacity = 1
        video.src = videoSource; // Start the video
    }, 1000);
        text.classList.add('hidden'); // Fade out text
});

closeButton.addEventListener('click', function() {
    video.src = ''; // Stop the video
    videoContainer.style.opacity = '0'; // Fade out video

    setTimeout(() => {
        videoContainer.style.display = 'none'; // Hide video container after fade out
        text.classList.remove('hidden'); // Fade text back in
}, 1000); // Wait for the fade out transition to finish
});