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
  }
})();

