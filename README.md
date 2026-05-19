# Airplane Siren Panel

A web-based soundboard for Boeing and Airbus cockpit alerts and announcements. Click any button to play the corresponding audio. Buttons are color-coded by category and the layout fits on a single screen without scrolling.

## Sounds

### Boeing
| Category | Sounds |
|----------|--------|
| Warning | Master Caution, Master Warning, Fire Bell |
| Autopilot | Autopilot Disconnect |
| Communication | SELCAL, Cabin Announcement |

### Airbus
| Category | Sounds |
|----------|--------|
| TCAS | Climb, Climb Now, Descend, Descend Now, Crossing Climb, Crossing Descend, Increase Climb, Increase Descend, Adjust Vertical Speed, Maintain Vertical Speed, Maintain VS Maintain, Monitor Vertical Speed, Traffic, Clear of Conflict |
| Autopilot | AP Disconnect, AP Failure, AP Alt Level Off |
| Warning | Fire Alarm |
| Weather | Windshear, Go Around / Windshear |
| Other | Stall, Transonic, Pass Sign |

## Category color coding

| Color | Category |
|-------|----------|
| 🔴 Red | Warning |
| 🟡 Amber | Autopilot |
| 🔵 Blue | TCAS |
| 🟢 Green | Weather |
| 🟣 Purple | Communication |
| ⚫ Gray | Other |

## Running locally

Requires [Node.js](https://nodejs.org/) 20 (via nvm) or Docker.

### With nvm

```bash
./npm_run_dev.sh
```

Opens the dev server at `http://localhost:5173` (also accessible on the local network via `http://<your-ip>:5173`).

### With Docker

```bash
./run.sh
```

Builds the production image and serves it via nginx at `http://localhost:5173`.

## Deployment

### GitHub Pages

The repo includes a GitHub Actions workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) that automatically builds and deploys to GitHub Pages on every push to `main`.

To enable it:
1. Push the repo to GitHub
2. Go to **Settings → Pages → Source** and select **GitHub Actions**

The live URL will be `https://<username>.github.io/<repo-name>/`.

### Manual build

```bash
npm run build
```

Output goes to `dist/`. Serve with any static file host.

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 4](https://vitejs.dev/)
- [nginx](https://nginx.org/) (Docker production image)
