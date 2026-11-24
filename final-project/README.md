# My Personal Website (Next.js)

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit

- `app/page.js` – all the content (Home, Education, About, Skills, Contact)
- `app/globals.css` – colors and styling (change the variables at the top)
- `app/layout.js` – page title and description (browser tab)
- `public/` – put your photo here as `me.jpg`, then swap the avatar `<div>` in `page.js` for:
  `<img className="avatar" src="/me.jpg" alt="Your Name" />`
