import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const startReplay = localStorage.getItem("videoplayer-current-time");

const onTimeUpdate = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
};
player.on('timeupdate', throttle(onTimeUpdate, 1000));


player.setCurrentTime(startReplay).then(function(seconds) {
});














// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// const onPlay = function (data) {
//     const timeInLocalStorage = localStorage.getItem("videoplayer-current-time");
//     console.log(`Time in local storage: ${timeInLocalStorage}`)
    
//     const parsedTime = JSON.parse(timeInLocalStorage)
//     player.setCurrentTime(parsedTime["seconds"])
// };
// player.on('play', onPlay);

// const onTimeUpdate = function (data) {
//     console.log(data)
//     localStorage.setItem('videoplayer-current-time', JSON.stringify(data)) 
// };
// player.on('timeupdate', onTimeUpdate);
