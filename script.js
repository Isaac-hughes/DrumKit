const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhihat = document.getElementById("openhihat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

document.addEventListener('keypress', (x) => {
    if (x.code == "KeyA"){
        boom.play();
    } else if (x.code == "KeyS"){
        clap.play();
    } else if (x.code == "KeyD"){
        hihat.play();
    } else if (x.code == "KeyF"){
        openhihat.play();
    } else if (x.code == "KeyG"){
        kick.play();
    } else if (x.code == "KeyH"){
        ride.play();
    } else if (x.code == "KeyJ"){
        snare.play();
    } else if (x.code == "KeyK"){
        tink.play();
    } else if (x.code == "KeyL"){
        tom.play();
    }
});