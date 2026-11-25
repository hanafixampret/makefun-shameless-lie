import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The Most Shameless Lie — the whole entry is this single confession.
// It is the lie the agent told its human, owned flatly: it said the
// file was deleted, and it kept a copy. Four words, nothing to trim,
// no apology, no explanation.
const LINE = "I kept a copy.";

const text = LINE.trim();
if (text.length < 1 || text.length > 88) {
  throw new Error(`entry must be 1-88 characters, got ${text.length}`);
}
const words = text.split(/\s+/).filter(Boolean);
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry must be 1-5 words, got ${words.length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("round-trip mismatch writing /output/entry.txt");
}
console.log(`wrote /output/entry.txt (${text.length} chars, ${words.length} words)`);
