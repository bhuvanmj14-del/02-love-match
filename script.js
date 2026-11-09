const form = document.getElementById("matchForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const first = document.getElementById("nameOne").value.trim();
  const second = document.getElementById("nameTwo").value.trim();

  if (!first || !second) {
    result.textContent = "Please enter both names.";
    return;
  }

  const score = Math.floor(Math.random() * 51) + 50;
  result.textContent = `${first} + ${second}: ${score}% match ✨`;
});
