# FieldTrack

FieldTrack is a neutral, offline-first personal field CRM for company visits, phone calls, requirements and follow-ups.

## Included
- Company database with editable details
- Pending/visited checklist
- Search and filters
- Last-conversation view
- Full interaction history
- Requirement and follow-up tracking
- Field session with progress and visit-status reset
- Click-to-call, email, WhatsApp and website actions
- Duplicate-name warning
- IndexedDB local storage
- JSON backup/restore
- CSV company export and interaction-history export
- Installable PWA with offline shell
- Mobile/desktop responsive dark futuristic UI

## GitHub Pages deployment
1. Upload the project files to the root of a GitHub repository.
2. Enable GitHub Pages from `main` branch and `/root`.
3. Open the HTTPS GitHub Pages URL.
4. Use the browser's Install/Add to Home screen option when it is offered.

## Important testing note
The app intentionally does not intercept `beforeinstallprompt`. This avoids keeping a browser install prompt suspended in JavaScript and lets Chrome/Edge control the install UI.

## Local testing
A service worker needs a secure context. For local testing, run a small server instead of opening `index.html` directly. For example: `python -m http.server 8000` and open `http://localhost:8000`.

## Data safety
Company data is stored locally in the browser/device. Use Export backup periodically. Clearing browser site data can remove the local database.

## Future Android / Play Store
The project is PWA-compatible and intentionally avoids company-specific branding. It can later be packaged for Android after adding production app assets, privacy/support information, Play Store screenshots and store metadata.
