let mainVideo = document.querySelector(".video-player video");
let gridVideo = document.querySelectorAll(".video-grid .vid");

gridVideo.forEach((video) => {
    video.onclick = () => {
        gridVideo.forEach((vid) => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
        }
    }
});