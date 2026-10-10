// UV: the themes you can pick. To add one, put a new line here
// and a matching block at the bottom of style.css.
var LOOKS = [
  { id: "sketch",   emoji: "✏️", name: "Sketchbook" },
  { id: "forest",   emoji: "🌲", name: "Forest" },
  { id: "ocean",    emoji: "🌊", name: "Ocean" },
  { id: "desert",   emoji: "🌵", name: "Desert" },
  { id: "mountain", emoji: "🏔️", name: "Mountain" },
  { id: "night",    emoji: "🌙", name: "Night Sky" }
];

function setLook(id) {
  if (id === "sketch") document.documentElement.removeAttribute("data-look");
  else document.documentElement.setAttribute("data-look", id);
  try { localStorage.setItem("uvzone-look", id); } catch (e) {}
  document.querySelectorAll(".looks button").forEach(function (b) {
    b.classList.toggle("here", b.dataset.id === id);
  });
}

// Use the saved theme straight away so the page doesn't flash.
var savedLook = "sketch";
try { savedLook = localStorage.getItem("uvzone-look") || "sketch"; } catch (e) {}
setLook(savedLook);

// Add the theme buttons under the menu on every page.
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");
  if (!nav) return;
  var box = document.createElement("div");
  box.className = "looks";
  box.innerHTML = '<span data-t="theme_label">Theme:</span>';
  LOOKS.forEach(function (t) {
    var b = document.createElement("button");
    b.innerHTML = t.emoji + ' <span data-t="look_' + t.id + '">' + t.name + "</span>";
    b.dataset.id = t.id;
    b.onclick = function () { setLook(t.id); };
    box.appendChild(b);
  });
  nav.after(box);
  setLook(savedLook);
});
