// TODO - Fetch an activity with the Bored API - Let's pseudocode!
// All of your variables at the top of the file ♥️
const url = 'https://www.boredapi.com/api/activity/';
const button = document.querySelector("button");
const activities = ["go to vote (secrectly)", "sleep A LOT!!!", "got eat ramen!!"];const randomIndex = Math.floor(Math.random() * 3 )
const activityHeader = document.querySelector("#activity")

// Console log everything!!!!!!!
// console.log(button);

// Event Listener that creates hard coded activities 📞
button.addEventListener("click", (event) => {
    // button.innerHTML = activities[randomIndex];
    event.currentTarget.innerHTML = activities[randomIndex];
    event.currentTarget.setAttribute("disabled", "")
});

// Event Listener that fetches data from the API and then displays it on the page 🪄
button.addEventListener('click', () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const activityText = data["activity"]
    // console.log(activityText);
    activityHeader.innerText = activityText;
  })
});
