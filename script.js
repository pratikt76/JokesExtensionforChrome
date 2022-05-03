fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");

    jokeElement.innerHTML = jokeText;
  });

const button = document.getElementById("refresh");
button.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/slack")
    .then((data) => data.json())
    .then((jokeData) => {
      const jokeText = jokeData.attachments[0].text;
      const jokeElement = document.getElementById("jokeElement");

      jokeElement.innerHTML = jokeText;
    });
});

const toggle = document.getElementById("toggle-btn");
toggle.addEventListener("click", () => {
  const body = document.getElementById("body");
  body.classList.toggle("dark");
  const dark_btn = document.getElementById("toggle");
  dark_btn.classList.toggle("uil-sun");
  dark_btn.classList.toggle("uil-moon");
});
