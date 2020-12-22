export const radioPlayerInit = () => {
  const radio = document.querySelector('.radio');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioHeader = document.querySelector('.radio-header');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioStop = document.querySelector('.radio-stop');

  const audio = new Audio();
  audio.tipy = 'audio/aac';

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



  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parrent = target.closest('.radio-item');

    radioItem.forEach(item => item.classList.remove('select'));
    parrent.classList.add('select');

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

};
