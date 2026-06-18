const tick = document.querySelector(".tick");
const task = document.querySelector(".task");
const taskStatus = document.querySelector(".status");

let status = false;

tick.addEventListener("click", () => {
  if (!status) {
    tick.innerHTML = `
    <i class="ri-check-line">
    </i>`;

    task.style.textDecoration = "line-through";

    taskStatus.style.backgroundColor = "lightGreen";
    taskStatus.style.borderColor = "darkGreen";
    taskStatus.style.color = "darkGreen";
    taskStatus.innerText = "Completed";

    status = true;
  } else {
    tick.innerHTML = "";

    task.style.textDecoration = "none";
    taskStatus.style.backgroundColor = "rgba(253, 169, 95, 0.443)";
    taskStatus.style.borderColor = "rgb(139, 63, 0)";
    taskStatus.style.color = "rgb(139, 63, 0)";
    taskStatus.innerText = "Pending";

    status = false;
  }
});
