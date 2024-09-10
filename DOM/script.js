const h1 = document.getElementById("h1");
h1.addEventListener("mouseover", () => {
  h1.innerText = "In Mouse";
});
h1.addEventListener("mouseout", () => {
  h1.innerText = "Out Mouse";
});
h1.addEventListener("click", () => {
  h1.style.color = "red";
  h1.style.backgroundColor = "green";
  h1.style.textDecoration = "yello";
});

const blockDiv = document.createElement("div");
document.body.appendChild(blockDiv);
blockDiv.style.height = "200px";
blockDiv.style.width = "450px";
blockDiv.style.backgroundColor = "red";

const btnToChangeBlockDiv = document.createElement("button");
document.body.appendChild(btnToChangeBlockDiv);
btnToChangeBlockDiv.style.height = "40px";
btnToChangeBlockDiv.style.width = "80px";
btnToChangeBlockDiv.innerText = "Change color";
btnToChangeBlockDiv.addEventListener("click", () => {
  blockDiv.style.backgroundColor = op.innerText;
});

const select = document.createElement("select");
document.body.appendChild(select);
const colors = ["red", "green", "blue"];
colors.forEach((color) => {
  const op = document.createElement("option");
  op.innerText = color;
  op.value = color;
  select.appendChild(op);
  //   op.addEventListener("click", () => {
  //     blockDiv.style.backgroundColor = color;
  //   });
});

const cars = [
  {
    model: "Toyota Corolla",
    year: 2022,
    color: "White",
  },
  {
    model: "Honda Civic",
    year: 2021,
    color: "Black",
  },
  {
    model: "Ford Mustang",
    year: 2023,
    color: "Red",
  },
  {
    model: "Chevrolet Camaro",
    year: 2020,
    color: "Blue",
  },
  {
    model: "Tesla Model 3",
    year: 2024,
    color: "Silver",
  },
  {
    model: "BMW 3 Series",
    year: 2022,
    color: "Gray",
  },
  {
    model: "Audi A4",
    year: 2021,
    color: "Black",
  },
  {
    model: "Mercedes-Benz C-Class",
    year: 2023,
    color: "White",
  },
  {
    model: "Mazda 6",
    year: 2020,
    color: "Blue",
  },
  {
    model: "Volkswagen Passat",
    year: 2022,
    color: "Red",
  },
  {
    model: "Subaru Impreza",
    year: 2021,
    color: "Green",
  },
  {
    model: "Hyundai Elantra",
    year: 2020,
    color: "Silver",
  },
  {
    model: "Kia Optima",
    year: 2023,
    color: "Silver",
  },
];

const input = document.querySelector("input");
const carsContainer = document.querySelector("Cars-search");
let currentCarList = [...cars];

const filterCarById = (e) => {
  const currentText = e.target.value.toLowerCase();

  const currentCarList = cars.filter((car) => {
    return car.model.toLowerCase().includes(currentText);
  });

  renderList(currentCarList);
};

const setButtonEventLitiner = (btn, idx) => {
  btn.addEventListener("click", (e) => {
    alert(
      currentCarList[idx].model +
        " " +
        currentCarList[idx].year +
        " " +
        currentCarList[idx].color
    );
  });
};

const renderList = (cars) => {
  carsContainer.innerHTML = "";

  cars.forEach((car, idx) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    carsContainer.appendChild(itemContainer);

    const para = document.createElement("p");
    para.textContent = car.model;

    const btn = document.createElement("button");
    btn.textContent = "Info";

    itemContainer.appendChild(para);
    itemContainer.appendChild(btn);

    setButtonEventLitiner(btn, idx);
  });
};

input.addEventListener("input", filterCarById);
