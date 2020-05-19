var numOfDrumKeys = document.querySelectorAll(".key").length;

// Detecting Button Press
for (var i = 0; i < numOfDrumKeys; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    var keyInner = this.innerText[0];
    makeSound(keyInner);
    keyAnimation(keyInner.toLowerCase());
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "A":
    case "a":
      var clap = new Audio("sounds/clap.wav");
      clap.play();
      keyAnimation(key.toLowerCase());
      break;

    case "S":
    case "s":
      var hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      keyAnimation(key.toLowerCase());
      break;

    case "D":
    case "d":
      var kick = new Audio("sounds/kick.wav");
      keyAnimation(key.toLowerCase());
      break;

    case "F":
    case "f":
      var openhat = new Audio("sounds/openhat.wav");
      openhat.play();
      keyAnimation(key.toLowerCase());
      break;

    case "G":
    case "g":
      var boom = new Audio("sounds/boom.wav");
      boom.play();
      keyAnimation(key.toLowerCase());
      break;

    case "H":
    case "h":
      var ride = new Audio("sounds/ride.wav");
      ride.play();
      keyAnimation(key.toLowerCase());
      break;

    case "J":
    case "j":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      keyAnimation(key.toLowerCase());
      break;

    case "K":
    case "k":
      var tom = new Audio("sounds/tom.wav");
      tom.play();
      keyAnimation(key.toLowerCase());
      break;

    case "L":
    case "l":
      var tink = new Audio("sounds/tink.wav");
      tink.play();
      keyAnimation(key.toLowerCase());
      break;

    default:
      console.log();
  }
}

function keyAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);

  activeKey.classList.add("playing");

  setTimeout(function () {
    activeKey.classList.remove("playing");
  }, 200);
}
