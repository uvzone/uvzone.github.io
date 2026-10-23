# UV Zone

UV's own website. Plain HTML + CSS + a little JavaScript, no build step.

| File | What it is |
|---|---|
| `index.html` | Home page |
| `jokes.html` + `jokes.js` | Joke Machine — add jokes to the list in `jokes.js` |
| `about.html` | About Me — fill in favourites |
| `arcade.html` | Mega Arcade — 12 mini games |
| `yash.html` + `yash-data/questions.xlsx` | Prabhas — Aptitude Mock Tests (with error log); edit questions in the Excel file, results go to a Google Sheet (setup: `yash-data/RESULTS-SETUP.md`) |
| `style.css` | Colours and fonts for every page |

## Put it on GitHub Pages
1. Create a free GitHub Organization named `uvzone` (Settings → Organizations → New organization → Free).
2. In that org, create a **public** repo named `uvzone.github.io`.
3. Upload these files (Add file → Upload files) to the `main` branch.
4. Repo Settings → Pages → Source: Deploy from branch → `main` / root.
5. Site goes live at `https://uvzone.github.io` in a minute or two.

## Add a new page
Copy `about.html`, rename it (e.g. `animals.html`), change the words, and add a link to it in the `<nav>` of every page.

## Safety rule
No real name, school, address or photos of UV on the site.
