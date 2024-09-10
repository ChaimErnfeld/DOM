const raceDiv = document.getElementsByClassName("raceDiv")[0];
const inputCars = document.getElementById("inputCars");

function addedDiv(num) {
  for (let i = 0; i < num; i++) {
    const recaer = document.createElement("div");
    recaer.id = `racer${i + 1}`;
    raceDiv.appendChild(recaer);

    const image = document.createElement("img");
    image.src = `/images/car${i + 1}.png`;
    image.id = `img${i + 1}`;
    recaer.appendChild(image);

    const redStripe = document.createElement("div");
    redStripe.className = "redStripe";
    recaer.appendChild(redStripe);

    moveCars(i);
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  for (let i = 1; i <= 4; i++) {
    if (document.getElementById(`racer${i}`)) {
      document.getElementById(`racer${i}`).remove();
    }
  }
  addedDiv(inputCars.value);
});

function moveCars(imgId) {
  let marginLeft = 0;

  const intervalID = setInterval(() => {
    const racer = document.getElementById(`img${imgId + 1}`);
    marginLeft += Math.random() * 500;
    racer.style.marginLeft = `${marginLeft}px`;

    if (marginLeft > 900) {
      clearInterval(intervalID);
    }
  }, 500);
}
