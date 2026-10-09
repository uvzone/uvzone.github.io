// UV: add your own jokes here!
// Copy one line, paste it below the last one, and change the words.
// Keep the "q:" (question) and "a:" (answer) and the comma at the end.
const jokes = [
  { q: "Why did the cookie go to the doctor?", a: "Because it felt crummy!" },
  { q: "What do you call a sleeping dinosaur?", a: "A dino-snore!" },
  { q: "Why can't a bicycle stand up by itself?", a: "Because it's two-tired!" },
  { q: "What has hands but can't clap?", a: "A clock!" },
  { q: "Why did the math book look sad?", a: "It had too many problems." },
  { q: "What do you call a bear with no teeth?", a: "A gummy bear!" },
  { q: "Why are fish so smart?", a: "Because they live in schools!" },
  { q: "What did one plate say to the other?", a: "Dinner is on me!" },
  { q: "What kind of tree fits in your hand?", a: "A palm tree!" },
  { q: "Why did the banana go to the doctor?", a: "It wasn't peeling well!" },
];

let current = -1;

function nextJoke() {
  let pick = current;
  while (pick === current && jokes.length > 1) {
    pick = Math.floor(Math.random() * jokes.length);
  }
  current = pick;
  document.getElementById("question").textContent = jokes[current].q;
  document.getElementById("answer").textContent = "";
  document.getElementById("reveal").hidden = false;
}

function showAnswer() {
  if (current < 0) return;
  document.getElementById("answer").textContent = jokes[current].a;
  document.getElementById("reveal").hidden = true;
}

document.getElementById("next").addEventListener("click", nextJoke);
document.getElementById("reveal").addEventListener("click", showAnswer);
document.getElementById("count").textContent = jokes.length + " jokes in the machine";
nextJoke();
