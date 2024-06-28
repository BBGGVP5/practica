function playVideo() {
        document.querySelector('.video-placeholder').style.display = 'none';
        document.getElementById('video').style.display = 'block';
        var video = document.getElementById('video');
        video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}