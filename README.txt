# Portfolio project cards — quick instructions

**This update modifies only your portfolio project cards. It does not convert the Java Swing code into websites.**

## Copy these files into your existing `personal-portfolio-website` folder

- Replace your existing `index.html` and `projects.html` with these updated files (keep a backup first).
- Add `project-previews.css` and `project-previews.js` next to your existing CSS and `script.js`.
- Copy the 3 `.svg` files from the supplied `images` folder into your current `images` folder. **Do not delete the images already there.**
- Keep your existing `index.css`, `projects.css`, and `script.js` unchanged.

## Turn on the live preview for each web application

1. Build and publish the web app using HTML, CSS, and JavaScript (GitHub Pages works for a static front end).
2. In *both* `index.html` and `projects.html`, find its card by title and change `data-demo-url=""` to `data-demo-url="https://YOUR-PUBLISHED-WEB-APP-URL/"`.
3. Save, commit, and push. On hover, a live embedded view of the app loads; the **Click Here to Open Website** link opens the app in a new tab. On mobile, the preview appears below the project description.

Example only (not an existing URL):
`data-demo-url="https://riska997.github.io/todo-list-web/"`

Important: Many third-party sites prohibit embedding in an iframe. For GitHub Pages websites you control, embedding normally works. If the site refuses embedding, use a screenshot `<img>` instead of the iframe preview. Your real website link can still work.

The included SVG images are illustrations clearly labelled 'DESIGN CONCEPT'. They are not screenshots of finished websites. Until each URL is supplied, the cards display these concepts and **Live demo coming soon** rather than a broken link.

The new web cards also have class `web`, so they should work with the original `filterProjects()` behaviour, provided that function filters the `.web` and `.java` classes as indicated by your HTML.
