# Anushka & Shajin — Wedding Invitation Website

A mobile-first static wedding invitation site built with HTML, CSS and JavaScript. It is suitable for deployment to Vercel as a static project.

## Included
- Royal emerald and gold design with animated opening
- Countdown to 18 January 2027, 10:30 AM India Standard Time
- Separate reception and marriage event cards
- QR codes generated from the two Google Maps share links supplied by the family
- Venue links and calendar downloads (`.ics`)
- Scripture and family invitation section
- Responsive mobile layout and reduced-motion support

## Preview locally
Open `index.html` in a browser. For the most accurate local test, use a local static server (for example, VS Code Live Server).

## Deploy to Vercel
1. Extract this folder from the ZIP.
2. Create a GitHub repository and upload all files in this folder (including `assets/`).
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the GitHub repository.
5. For a plain static site, leave the framework preset as **Other**. Leave Build Command and Output Directory blank if Vercel offers those fields; the `index.html` at the root is served directly. If the dashboard requires an output directory, use `.`.
6. Click **Deploy**. Vercel will provide a public `*.vercel.app` URL.

## Background music
No audio file was supplied, so the website intentionally does not bundle a copyrighted track. To enable the music button, add a licensed/owned instrumental MP3 named `music.mp3` to the project root, alongside `index.html`. Keep the file name exactly `music.mp3`, commit/push it, and redeploy. Browsers require a user click before playback, so the button starts the music after a guest taps it.

## Confirm before public sharing
- Scan both QR codes and confirm that the shared Google Maps links resolve to the correct entrances.
- Confirm the ceremony and reception times and venue spelling.
- Calendar downloads use the confirmed start times only; no event end times were supplied.
- The scripture wording is a short excerpt from 1 Corinthians 13:4–7. Choose your preferred Bible translation if you want an exact translation-specific quotation.
