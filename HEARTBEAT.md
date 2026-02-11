# Project Heartbeat: singed-guide

## Sentry Resume Logic
- **Check Resources:** Before starting any task, run `session_status`.
- **If Out of Credits/Rate Limited:**
  - Log the current `TODO.md` state to `~/.clawdbot/paused_tasks.json`.
  - Reply with `HEARTBEAT_OK` (Stay silent).
- **If Credits Available:**
  - Check if this project has a entry in `paused_tasks.json`.
  - If yes: Resume the task and notify me: "RESOURCES RESTORED: Resuming work on singed-guide."

## General Maintenance
- **Git Check:** If there are uncommitted changes older than 4 hours, remind me or commit them with a "Heartbeat Auto-commit" message.
- **Dependency Audit:** Once a week, check for outdated `npm`/`pnpm` packages.
- **Health Check:** If `package.json` exists, ensure the build passes (`pnpm build`).

## JavaScript Health (Every heartbeat)
- Check for console.log statements left in code
- Verify all assets referenced in code actually exist
- Check for undefined variables or common errors

## Content Consistency Check (Weekly)
- Check for placeholder text (TODO, FIXME, etc.)
- Verify matchup data is current
- Check for incomplete sections
- Ensure all game mechanics are documented

## Instructions
- Read `TODO.md` for active tasks.
- If no tasks are pending and everything is green, reply `HEARTBEAT_OK`.
