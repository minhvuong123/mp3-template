(function handleMainPageScroll() {
  let timerEvent = null;
  const trackScroll = document.querySelector('.zing-content .scroll-track');
  if (trackScroll) {
    trackScroll.addEventListener('mouseover', () => {
      const zingContentElement = document.querySelector('.zing-content');
      if (zingContentElement) {
        zingContentElement.style.setProperty('--scrollbarThumbBC', '#ffffff4d');
        clearTimeout(timerEvent);
      }
    })

    trackScroll.addEventListener('mouseout', () => {
      clearTimeout(timerEvent);
      timerEvent = setTimeout(() => {
        const zingContentElement = document.querySelector('.zing-content');
        if (zingContentElement) {
          zingContentElement.style.setProperty('--scrollbarThumbBC', 'transparent');
        }
      }, 3000)
    })

    let scrollTop = 0;
    const zingContentElement = document.querySelector('.zing-content');
    zingContentElement.addEventListener('scroll', (event) => {
      const trackScroll = document.querySelector('.zing-content .scroll-track');
      if (scrollTop < event.target.scrollTop) {
        console.log('scrolling to bottom')
        const trackHeight = event.target.clientHeight;
        trackScroll.style.height = trackHeight + event.target.scrollTop + 'px';
      } else {
        console.log('scrolling to top')
        if (event.target.scrollTop === 0) {
          scrollTop = 0;
          const trackHeight = event.target.clientHeight;
          trackScroll.style.height = trackHeight + 'px';
        }
      }
      scrollTop = event.target.scrollTop;
    })
  }
})();

(function handlePlayListScroll() {
  let timerEvent = null;
  const trackScroll = document.querySelector('.zing-playlist .scroll-track');
  if (trackScroll) {
    trackScroll.addEventListener('mouseover', () => {
      const zingContentElement = document.querySelector('.zing-playlist');
      if (zingContentElement) {
        zingContentElement.style.setProperty('--scrollbarThumbBC', '#ffffff4d');
        clearTimeout(timerEvent);
      }
    })

    trackScroll.addEventListener('mouseout', () => {
      clearTimeout(timerEvent);
      timerEvent = setTimeout(() => {
        const zingContentElement = document.querySelector('.zing-playlist');
        if (zingContentElement) {
          zingContentElement.style.setProperty('--scrollbarThumbBC', 'transparent');
        }
      }, 3000)
    })

    let scrollTop = 0;
    const zingContentElement = document.querySelector('.zing-playlist');
    zingContentElement.addEventListener('scroll', (event) => {
      const trackScroll = document.querySelector('.zing-playlist .scroll-track');
      if (scrollTop < event.target.scrollTop) {
        console.log('scrolling to bottom')
        const trackHeight = event.target.clientHeight;
        trackScroll.style.height = trackHeight + event.target.scrollTop + 'px';
      } else {
        console.log('scrolling to top')
        if (event.target.scrollTop === 0) {
          scrollTop = 0;
          const trackHeight = event.target.clientHeight;
          trackScroll.style.height = trackHeight + 'px';
        }
      }
      scrollTop = event.target.scrollTop;
    })
  }
})();

(function calculateValue(){
  const progressThumb = document.querySelector('.progress-thumb');

  progressThumb.addEventListener('click', (e) => {
    if (e) {
      e.stopPropagation();
      const boundingClient = e.target.getBoundingClientRect();
      const percentage = (e.clientX - boundingClient.left) / boundingClient.width * 100;
      const progressBar = document.querySelector('.progress-bar');
      if (progressBar) {
        progressBar.style.setProperty('--progressValue', percentage + '%');
      }
    }
  })
})()


function handlePlayList(){
  const playlistControl = document.querySelector('.playlist-control');

  playlistControl.addEventListener('click', () => {
    const zingPlaylist = document.querySelector('.zing-playlist');
    if (zingPlaylist) {
      if (zingPlaylist.style.display === 'none') {
        zingPlaylist.style.setProperty('display', 'inline-block');
      } else {
        zingPlaylist.style.setProperty('display', 'none');
      }
    }
  })
}

handlePlayList();


function handleCreatePlayList() {
  const createPlayListEl = document.querySelector('.zing-create-playlist');

  createPlayListEl.addEventListener('click', () => {
    const playListPopup = document.querySelector('.playlist-popup');
    playListPopup.classList.toggle('active');
  })

   const closIcon = document.querySelector('.playlist-popup .icon-close');

  closIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    const playListPopup = document.querySelector('.playlist-popup');
    playListPopup.classList.toggle('active');
  })
}
handleCreatePlayList();

