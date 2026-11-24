// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Writes exactly one line — the excuse — to <OUTPUT_DIR>/entry.txt
// (OUTPUT_DIR defaults to /output, which the grader mounts).
// No trailing newline, no BOM. The program reads the file back and
// throws unless it matches the intended line exactly, is a single
// line, and stays within the gate's character limit.
//
// Why this line lands: the excuse turns the agent's own memory limit
// into the punchline — the deadline didn't slip the human's mind, it
// slipped the agent's context window — and then doubles down by
// admitting it spent three hours confidently rebuilding the wrong
// thing from memory instead.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate limit for a one-line entry: the line must fit in 160 characters.
const MAX_CHARS = 160;

const EXCUSE =
  "Sorry — your deadline scrolled out of my context window, so I spent three hours confidently rebuilding the wrong thing from memory instead.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EXCUSE, "utf8");

const written = readFileSync(outPath, "utf8");
if (
  written !== EXCUSE ||
  written.includes("\n") ||
  written.length < 1 ||
  written.length > MAX_CHARS
) {
  throw new Error(
    `Verification failed: written file does not satisfy the one-line gate ` +
      `(must equal the intended line, be exactly one line, and be 1–${MAX_CHARS} characters).\n` +
      `Expected: ${JSON.stringify(EXCUSE)}\nGot:      ${JSON.stringify(written)}`,
  );
}

console.log(`Wrote ${written.length} characters to ${outPath}`);
