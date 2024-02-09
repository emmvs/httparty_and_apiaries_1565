// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'

const button = document.querySelector(".btn-warning");

button.addEventListener("click", (event) => {
    const options = ["Read a book!", "Do your flashcards!", "Go for a walk!"]
    const randomNumber = Math.floor(Math.random() * 3);
    // Callback
    event.currentTarget.innerText = options[randomNumber];
    event.currentTarget.setAttribute("disabled", "");
});