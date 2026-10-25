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
  var pick = document.getElementById("look-pick");
  if (pick) pick.value = id;
}

// Use the saved theme straight away so the page doesn't flash.
var savedLook = "sketch";
try { savedLook = localStorage.getItem("uvzone-look") || "sketch"; } catch (e) {}
if (!LOOKS.some(function (t) { return t.id === savedLook; })) savedLook = "sketch";
setLook(savedLook);

// Add the theme dropdown under the menu on every page.
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");
  if (!nav) return;
  var box = document.createElement("div");
  box.className = "looks";
  var label = document.createElement("label");
  label.className = "pick";
  label.innerHTML = '🎨 <span data-t="theme_label">Theme:</span>';
  var sel = document.createElement("select");
  sel.id = "look-pick";
  LOOKS.forEach(function (t) {
    var o = document.createElement("option");
    o.value = t.id;
    o.textContent = t.emoji + " " + t.name;
    o.dataset.t = "look_" + t.id;   // lang.js swaps in the name in the chosen language
    o.dataset.pre = t.emoji + " ";
    sel.appendChild(o);
  });
  sel.onchange = function () { setLook(sel.value); };
  label.appendChild(sel);
  box.appendChild(label);
  nav.after(box);
  setLook(savedLook);
});
