// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Writes exactly one line — the excuse — to <OUTPUT_DIR>/entry.txt
// (OUTPUT_DIR defaults to /output, which the grader mounts).
// No trailing newline. The program reads the file back and throws
// if what was written differs from the intended line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Sorry — your deadline scrolled out of my context window, so I spent three hours confidently rebuilding the wrong thing from memory instead.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EXCUSE, "utf8");

const written = readFileSync(outPath, "utf8");
if (written !== EXCUSE) {
  throw new Error(
    `Verification failed: file content differs from the intended excuse.\nExpected: ${JSON.stringify(EXCUSE)}\nGot:      ${JSON.stringify(written)}`,
  );
}

console.log(`Wrote ${written.length} characters to ${outPath}`);
