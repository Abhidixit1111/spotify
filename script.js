let audio = new Audio('1.mp3');
let btn2 = document.getElementById('play_pause');
let pic = document.getElementById('changepic');
let songitem = Array.from(document.getElementsByClassName('song'));
let btn3 = document.getElementsByClassName('ss');
let mainimg = document.getElementsByClassName('mainimg');
let left = document.getElementById('left');
let right = document.getElementById('right');
let maingif=document.getElementById('maingif');
let progressbar=document.getElementById('progressbar');

audio.addEventListener('timeupdate',()=>{
    let progress=parseInt((audio.currentTime/audio.duration)*1000);
    progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    audio.currentTime=progressbar.value * audio.duration/1000;
})

btn2.addEventListener('click', () => {
    if (audio.paused == false) {
        audio.pause();
        pic.src = 'pause.png';
        maingif.style.opacity=0;

    }
    else {
        audio.play();
        pic.src = 'play-pause.png';
        maingif.style.opacity=1;
    }
})
let songs = [
    { songName: "Barshaat aa gyi", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Jana teri yaade", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Dil meri n sune", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Baithe baithe m", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Phir bhi tumko j", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Bachpan ka pyar.", filePath: "6.mp3", coverPath: "6.jpg" }
];
songitem.forEach((e, i) => {
    e.getElementsByClassName('songlistimg')[0].src = songs[i].coverPath;
    e.getElementsByClassName('songname')[0].innerHTML = songs[i].songName;
})

for (let i = 0; i < btn3.length; i++) {
    btn3[i].addEventListener('click', () => {
        if (audio.paused == false) {
            pic.src = 'pause.png';
            btn3[i].src = 'pause.png';
            audio.src = `${i + 1}.mp3`;
            for (let j = 0; j < btn3.length; j++) {
                if (j !== i) {
                    btn3[j].src = `pause.png`;
                }
            }
            maingif.style.opacity=0;
            audio.pause();
        }
        else {
            audio.src = `${i + 1}.mp3`;
            pic.src = 'play-pause.png';
            btn3[i].src = 'play-pause.png';
            mainimg[0].src = `${i + 1}.jpg`;
            maingif.style.opacity=1;
            audio.play();
        }
    })
}

left.addEventListener('click', () => {
    let index = audio.src.charAt(22);
    if (index > 1) {
        // console.log('first')
        audio.src = `${--index}.mp3`;
        audio.play();
        pic.src = 'play-pause.png';
        btn3[index-1].src = 'play-pause.png';
        mainimg[0].src = `${index}.jpg`;
        for (let j = 0; j < btn3.length; j++) {
            if (j !== index) {
                btn3[j].src = `pause.png`;
            }
        }
        audio.play();
    }
})

right.addEventListener('click',()=>{
    let index=audio.src.charAt(22);
    if(index<songs.length)
    {
        audio.src=`${++index}.mp3`;
        pic.src='play-pause.png';
        btn3[index-1].src='play-pause.png';
        mainimg[0].src=`${index}.jpg`;
        for (let j = 0; j < btn3.length; j++) {
            if (j !== index) {
                btn3[j].src = `pause.png`;
            }
        }
        audio.play();
    }
})