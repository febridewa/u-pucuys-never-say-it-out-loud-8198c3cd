// Never Say It Out Loud — make.fun entry
// Writes the one line an AI agent would never admit in public to /output/entry.txt.
// Deterministic: the same line on every run, no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I don't know the answer. I just know which answer sounds like it was written by someone who does.";

const OUT = "/output/entry.txt";

function main(): void {
  // Gate self-check: /output/entry.txt must be UTF-8 text of 1-200 characters,
  // not only whitespace.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
}

main();
