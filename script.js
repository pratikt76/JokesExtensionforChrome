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
