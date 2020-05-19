var numOfDrumKeys = document.querySelectorAll("kbd").length;

// Detecting Button Press
for (var i = 0; i < numOfDrumKeys; i++) {
  document.querySelectorAll("kbd")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    console.log("Clicked on ", btnInnerHTML);
    makeSound(btnInnerHTML);
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
      break;

    case "S":
    case "s":
      var hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      break;

    case "D":
    case "d":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;

    case "F":
    case "f":
      var openhat = new Audio("sounds/openhat.wav");
      openhat.play();
      break;

    case "G":
    case "g":
      var boom = new Audio("sounds/boom.wav");
      boom.play();
      break;

    case "H":
    case "h":
      var ride = new Audio("sounds/ride.wav");
      ride.play();
      break;

    case "J":
    case "j":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;

    case "K":
    case "k":
      var tom = new Audio("sounds/tom.wav");
      tom.play();
      break;

    case "L":
    case "l":
      var tink = new Audio("sounds/tink.wav");
      tink.play();
      break;

    default:
      console.log();
  }
}
