const body = document.querySelector("body");

const background = () => {
  backgroundBubbles();
  bubbles();
};

const bubbles = () => {
  const container = document.createElement("div");
  container.classList.add("background");

  for (let x = 1; x <= 5; x++) {
    const div = document.createElement("div");
    div.classList.add("bubble");
    for (let y = 1; y <= 6; y++) {
      const span = document.createElement("span");
      div.appendChild(span);
    }
    container.appendChild(div);
  }
  body.appendChild(container);
};

const backgroundBubbles = () => {
  const container = document.createElement("div");
  const content = document.createElement("div");
  container.classList.add("container");
  content.classList.add("bubbles");

  for (let x = 1; x <= 45; x++) {
    const span = document.createElement("span");
    span.style.setProperty("--i", Math.floor(Math.random() * 45)) + 1;
    content.appendChild(span);
  }
  container.appendChild(content);
  body.appendChild(container);
};

background();

const inputFile = document.getElementById("uploadFile");
const btn = document.getElementById("btn");

inputFile.addEventListener("change", (e) => {
  archiveName = e.target.value.replace("C:\\fakepath\\", "");

  const span = document.getElementById("fileName");
  span.innerText = archiveName !== "" ? archiveName : "Nenhum arquivo escolhido";

  if (archiveName !== "") {
    btn.removeAttribute("disabled");
    btn.classList.add("hover");
    btn.style.cursor = "pointer";
  } else {
    btn.setAttribute("disabled", true);
    btn.classList.remove("hover");
    btn.style.cursor = "not-allowed";
  }
});
