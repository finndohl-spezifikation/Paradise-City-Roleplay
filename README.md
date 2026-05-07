# Paradise City Roleplay Discord Bot

  Ein Discord Bot für den Paradise City Roleplay Server.

  ## Befehle

  | Befehl | Antwort |
  |--------|---------|
  | `!Hallo` | Begrüßt den Nutzer |

  ## Setup

  1. Dependencies installieren:
     ```bash
     npm install
     ```

  2. `.env` Datei erstellen (aus `.env.example`):
     ```bash
     cp .env.example .env
     ```

  3. Discord Bot Token in `.env` eintragen

  4. Bot starten:
     ```bash
     npm start
     ```

  ## Railway Deployment

  1. Repo mit Railway verbinden
  2. Umgebungsvariable `DISCORD_TOKEN` in Railway setzen
  3. Deploy starten — Railway erkennt alles automatisch
  