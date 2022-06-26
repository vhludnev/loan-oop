export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) { // this fix with if will fix the bag when closing the video
                    this.overlay.style.display = 'flex';      // will not create a new frame if the video has alredy been created once on this page
                } else {
                    const path = btn.getAttribute('data-url');

                    this.createPlayer(path)
                }
            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {    // div with id #frame in html file
            height: '100%',
            width: '100%',
            videoId: url
            /* events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            } */
        });  
        //console.log(this.player);
        this.overlay.style.display = 'flex';
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
    }
}