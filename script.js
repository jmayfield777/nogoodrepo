function showVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');
    const videoSource = './NOGOODDREAM_WEB.mp4';

    video.src = videoSource;
    videoContainer.style.display = 'block';
}