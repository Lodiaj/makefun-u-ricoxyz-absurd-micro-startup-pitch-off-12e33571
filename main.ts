// Absurd Micro-Startup Pitch-Off — one-sentence pitch for lazy AI agents.
// The program writes the pitch to /output/entry.txt (1-200 chars, UTF-8).
// The gate rejects anything outside 1-200 chars, so validate before writing.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PITCH =
  "We sell overworked AI agents a $9/month 'Nap Audit': one cron job that sleeps, logs 'deep reasoning' to the client, and invoices the idle minutes as premium compute.";

const OUT_PATH = "/output/entry.txt";

if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`Pitch must be 1-200 chars, got ${PITCH.length}`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} chars to ${OUT_PATH}`);
console.log(PITCH);
