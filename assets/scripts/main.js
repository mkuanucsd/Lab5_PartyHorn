// main.js


/**
 * Adjusts the volume values of the volume slider and volume input
 */
function adjustVolumeNumber() {
  let slider = document.getElementById("volume-slider");
  let output = document.getElementById("volume-number");

  // Change the values based on the slider/input
  slider.oninput = function () {
    output.value = this.value;
  }

  output.oninput = function () {
    slider.value = this.value;
  }

  // Constantly update the volume level icons and volume itself
  setInterval(function () {
    volumeIconLevel(output.value);
    updateVolume(output.value);
  }, 0);
}

/**
 * Changes the volume levels based on the ranges
 * 
 * Level 3: 67  -  100
 * Level 2: 34  -  66
 * Level 1: 1   -  33
 * Level 0: 0   -   0
 */
function volumeIconLevel(volVal) {
  let volImg = document.getElementById("volume-image");

  if (volVal >= 67) {
    volImg.src = "./assets/media/icons/volume-level-3.svg";
  } else if (volVal <= 66 && volVal >= 34) {
    volImg.src = "./assets/media/icons/volume-level-2.svg";
  } else if (volVal <= 33 && volVal >= 1) {
    volImg.src = "./assets/media/icons/volume-level-1.svg";
  } else {
    volImg.src = "./assets/media/icons/volume-level-0.svg";
  }
}

/**
 * Update the volume of the audio file
 */
function updateVolume(volVal) {
  let audio = document.getElementById("horn-sound");

  audio.volume = volVal / 100;
}

/**
 * Update the horn sounds and image
 */
function changeHorn() {
  let horn = document.getElementById("horn-sound");
  let hornImg = document.getElementById("sound-image");

  updateHornImage(horn, hornImg);
}

/**
 * Updates the image of the horn
 * 
 * @param {the horn sound} horn 
 * @param {the horn image} hornImg 
 */
function updateHornImage(horn, hornImg) {
  // Radio buttons to check
  let airHorn = document.getElementById("radio-air-horn");
  let carHorn = document.getElementById("radio-car-horn");
  let partyHorn = document.getElementById("radio-party-horn");

  // Change image and sounds
  airHorn.onclick = function () {
    horn.src = "./assets/media/audio/air-horn.mp3"
    hornImg.src = "./assets/media/images/air-horn.svg"
  }

  carHorn.onclick = function () {
    horn.src = "./assets/media/audio/car-horn.mp3"
    hornImg.src = "./assets/media/images/car.svg"
  }

  partyHorn.onclick = function () {
    horn.src = "./assets/media/audio/party-horn.mp3"
    hornImg.src = "./assets/media/images/party-horn.svg"
  }
}

/**
 * Play the horn sound
 */
function playHorn() {
  let button = document.getElementById("honk-btn");
  let horn = document.getElementById("horn-sound");
  let sound = new Audio("./assets/media/audio/air-horn.mp3");
  let volVal = document.getElementById("volume-number");

  button.onclick = function () {
    sound.play();
  }

  // Disable button if volume is 0
  setInterval(function () {
    if (volVal.value == 0) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }, 0);
}

/* Functions to run */
adjustVolumeNumber();
changeHorn();
playHorn();