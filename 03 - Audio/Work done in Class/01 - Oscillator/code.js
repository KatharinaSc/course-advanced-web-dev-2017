
// Web Audio API

let context = new window.AudioContext();
let oscillator = context.createOscillator();


// change frequency
oscillator.type = 'sine'; // sine | square | triangle | sawtooth
oscillator.frequency.value = 200;

//oscillator.connect(context.destination);
//oscillator.start();


// change volume
let gain = context.createGain();
oscillator.connect(gain);
gain.connect(context.destination);

// set volumne
let now = context.currentTime;
gain.gain.setValueAtTime(.001, now);
gain.gain.exponentialRampToValueAtTime(1, now + 1);

oscillator.start();



// when user moves mouse
function onMouseMove(event) {
    let x = event.pageX;
    let y = event.pageY;
    
    console.log(x, y);

    // x axis - change frequency
    oscillator.frequency.value = x;

    // y axis - change volume
    gain.gain.setValueAtTime(1, context.currentTime);
}

$(window).mousemove(onMouseMove);
















