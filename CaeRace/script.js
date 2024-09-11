const arr = [];
const MAX_AMOUNT_OF_CARS = 4;

const raceDiv = document.getElementsByClassName("raceDiv")[0];
const inputCars = document.getElementById("inputCars");

function addedDiv(num) {
  for (let i = 1; i <= num; i++) {
    const racer = document.createElement("div");
    racer.id = `racer${i}`;
    raceDiv.appendChild(racer);

    const image = document.createElement("img");
    image.src = `/images/car${i}.png`;
    image.id = `img${i}`;
    racer.appendChild(image);

    const redStripe = document.createElement("div");
    redStripe.className = "redStripe";
    racer.appendChild(redStripe);

    moveCars(i);
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  for (let i = 1; i <= MAX_AMOUNT_OF_CARS; i++) {
    const carElement = document.getElementById(`racer${i}`);
    const res = document.getElementById(i);
    if (carElement) {
      carElement.remove();
      res.remove();
    }
  }
  addedDiv(inputCars.value);
});

function moveCars(imgId) {
  let marginLeft = 0;
  const startTime = Date.now();

  const intervalID = setInterval(() => {
    const racer = document.getElementById(`img${imgId}`);
    marginLeft += Math.random() * 4;
    racer.style.marginLeft = `${marginLeft}%`;

    if (marginLeft > 94) {
      clearInterval(intervalID);
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000;
      printResult(imgId, timeTaken);
    }
  }, 200);
}

function printResult(carId, timeTaken) {
  const divResult = document.getElementById("results");
  let p = document.createElement("p");
  p.textContent = `car ${carId} has finished in ${timeTaken}!`;
  p.id = carId;
  divResult.appendChild(p);
}

document.getElementById("resetBtn").addEventListener("click", () => {
  for (let i = 1; i <= 4; i++) {
    const carElement = document.getElementById(`racer${i}`);
    const res = document.getElementById(i);
    if (carElement) {
      carElement.remove();
      res.remove();
    }
  }
});
