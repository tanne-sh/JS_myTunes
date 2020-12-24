export const radioPlayerInit = () => {
  const radio = document.querySelector('.radio');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioHeaderBig = document.querySelector('.radio-header__big');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioStop = document.querySelector('.radio-stop');
  const radioVolume = document.querySelector('.radio-volume');
  const radioMute = document.querySelector('.radio-mute');

  const audio = new Audio();
  audio.type = 'audio/aac';

 let prevVolume = audio.volume;

  radioStop.disabled = true;

  const chageIconPlay = () => {
      if(audio.paused){
        radio.classList.remove('play');
        radioStop.classList.add('fa-play');
        radioStop.classList.remove('fa-stop');
      }else{
        radio.classList.add('play')
        radioStop.classList.add('fa-stop');
        radioStop.classList.remove('fa-play');
      }
  }

  const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  }

  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parrent = target.closest('.radio-item');
    selectItem(parrent);

    const title = parrent.querySelector('.radio-name').textContent;
    radioHeaderBig.textContent = title;

    const urlImg = parrent.querySelector('.radio-img').src;
    radioCoverImg.src = urlImg;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
    chageIconPlay();

  });

  radioStop.addEventListener('click', () => {
    if(audio.paused){
      audio.play();
    } else{
      audio.pause();
    }
    chageIconPlay();
  });

  radioVolume.addEventListener('input', () => {
    audio.volume = radioVolume.value / 100;
    audio.muted = false;
  });

radioMute.addEventListener('click', () =>{
  audio.muted = !audio.muted;
});

  radioVolume.value = audio.volume * 100;

  radioPlayerInit.stop = () => {
    audio.pause();
    chageIconPlay();
  }

};
