import Player from '@vimeo/player';
console.log(Player);
import throttle from 'lodash.throttle';
const video = document.querySelector('#vimeo-player');
console.log(video);
const player = new Player(video);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer', `${seconds}`);
  }, 1000)
);

playerTime = localStorage.getItem('videoplayer');
console.log(playerTime);

player
  .setCurrentTime(playerTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
