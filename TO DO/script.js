let table = document.getElementById("table");

let input = document.getElementById("input");
let submit = document.getElementById("submit");
let data = [];
const tableData = JSON.parse(localStorage.getItem("table"));

submit.addEventListener("click", () => {
  if (input.value === "") {
    alert("You didn't write anything, clown");
    return;
  }
  let newRow = table.insertRow();

  let idCell = newRow.insertCell(0);
  let todoCell = newRow.insertCell(1);
  let statusCell = newRow.insertCell(2);
  let actionCell = newRow.insertCell(3);

  let randomNumber = Math.random();
  let randomNumberStr = randomNumber.toString();
  let displayText =
    randomNumberStr.length > 3
      ? randomNumberStr.slice(0, 4) + "..."
      : randomNumberStr;

  idCell.textContent = displayText;
  todoCell.textContent = input.value;
  statusCell.textContent = "Not Done";
  //   (actionCell.innerHTML = btnEdit), btnDelete, btnstatusChange;
  // '<button class="edit-btn">Edit</button>' +
  // '<button class="delete-btn">Delete</button>' +
  // '<button class="status-btn">status change</button>';
  let rows = document.getElementsByTagName("tr");

  //   for (let index = 1; index < rows.length; index++) {
  //     let cells = rows[i].getElementsByTagName["td"];
  //
  //
  //   }
  data.push({
    id: idCell.textContent,
    task: todoCell.textContent,
    status: statusCell.textContent,
  });
  localStorage.setItem("table", JSON.stringify(data));

  let btnEdit = document.createElement("button");
  let btnDelete = document.createElement("button");
  let btnstatusChange = document.createElement("button");

  btnEdit.className = "edit-btn";
  btnDelete.className = "delete-btn";
  btnstatusChange.className = "status-btn";
  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Delete";
  btnstatusChange.textContent = "status change";

  actionCell.appendChild(btnEdit);
  actionCell.appendChild(btnDelete);
  actionCell.appendChild(btnstatusChange);

  //בלחיצה על כפתור עריכה
  btnEdit.addEventListener("click", () => {
    input.value = todoCell.textContent;
  });

  //בלחיצה על כפתור מחיקה
  btnDelete.addEventListener("click", () => {
    idCell.remove();
    todoCell.remove();
    statusCell.remove();
    actionCell.remove();

    input.value = "";
  });

  //בלחיצה על כפתור שינוי סטטוס
  btnstatusChange.addEventListener("click", () => {
    if (statusCell.textContent === "Not Done") {
      statusCell.textContent = "Done";
      todoCell.style.textDecoration = "line-through";
    } else {
      statusCell.textContent = "Not Done";
      todoCell.style.textDecoration = "none";
    }
  });

  input.value = "";
});
