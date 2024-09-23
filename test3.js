const title = document.getElementById("title");
const postsBtn = document.getElementById("posts-btn");
const photosBtn = document.getElementById("photos-btn");
const albumsBtn = document.getElementById("albums-btn");
const dataList = document.getElementById("data-list");

let activeButton = "posts";

function fetchData(type) {
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then((response) => response.json())
    .then((data) => {
      dataList.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        dataList.appendChild(li);
      });
    });
}

function highlightButton(button) {
  const buttons = document.querySelectorAll(".buttons button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

postsBtn.addEventListener("click", () => {
  activeButton = "posts";
  highlightButton(postsBtn);
  fetchData("posts");
  title.textContent = "Type: " + activeButton;
});

photosBtn.addEventListener("click", () => {
  activeButton = "photos";
  highlightButton(photosBtn);
  fetchData("photos");
  title.textContent = "Type: " + activeButton;
});

albumsBtn.addEventListener("click", () => {
  activeButton = "albums";
  highlightButton(albumsBtn);
  fetchData("albums");
  title.textContent = "Type: " + activeButton;
});

fetchData("posts");
highlightButton(postsBtn);
