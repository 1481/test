// Background Music
var bgm = new Audio("resource/audio/Nocturne in B flat minor, Op. 9 no. 1.mp3?static=1");
bgm.loop = true;
bgm.play();
document.body.addEventListener("touchstart", function(){bgm.play()});
