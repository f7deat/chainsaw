export const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.play();
}

export const playTrueSound = () => {
    playAudio('https://cdn.getvisa.vn/music/true.mp3')
}

export const playFalseSound = () => {
    playAudio('https://cdn.getvisa.vn/music/false.mp3')
}