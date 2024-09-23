const title = document.getElementById("title");
const postsId = document.getElementById("postsid");
const photosId = document.getElementById("photosid");
const albumsId = document.getElementById("albumsid");
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

postsId.addEventListener("click", () => {
  activeButton = "posts";
  highlightButton(postsId);
  fetchData("posts");
  title.textContent = "Type: " + activeButton;
});

photosId.addEventListener("click", () => {
  activeButton = "photos";
  highlightButton(photosId);
  fetchData("photos");
  title.textContent = "Type: " + activeButton;
});

albumsId.addEventListener("click", () => {
  activeButton = "albums";
  highlightButton(albumsId);
  fetchData("albums");
  title.textContent = "Type: " + activeButton;
});

fetchData("posts");
highlightButton(postsId);
