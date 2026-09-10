# FieldTrack

A neutral, offline-first personal field CRM for company visits, calls, requirements and follow-ups.

## Included
- Add/edit/delete companies
- Company details and contacts
- Search and filters
- Visited/pending checklist
- Full interaction history
- Prominent last-conversation view
- Requirements and follow-up dates
- Follow-up due/upcoming queue
- Field session with progress and visit reset
- Phone, email, WhatsApp, website quick actions
- Duplicate-name warning
- IndexedDB offline storage
- JSON backup/restore + CSV exports
- Installable PWA
- Responsive futuristic dark UI

## Run
Use HTTPS/GitHub Pages or a local server such as `python -m http.server 8000`. Do not open directly as `file://` if you want the service worker/PWA functionality.

## GitHub Pages
Put the files in a repository and enable Settings → Pages → Deploy from branch. Open the Pages URL, then install the app from the browser if supported.

## Android / Play Store path
The project is intentionally PWA-friendly and can later be wrapped using a trusted Android approach such as Capacitor/TWA. Before publication, add a production Android icon set, privacy policy, screenshots, support contact, package ID, and Play Console metadata.

## Install behavior
The app listens for Chrome's install event and only calls the native install prompt after the user taps the install button. It does not force an automatic install prompt.
