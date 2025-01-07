const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";
titles[3].textContent = "Fourth Title";

titles.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = "green";
    title.style.backgroundColor = "pink"
  } else {
    title.style.color = "red";
    title.style.backgroundColor = "black"
  }
});

const body = document.querySelector(".container")
body.style.backgroundColor="lightblue"