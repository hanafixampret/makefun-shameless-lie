import { mkdirSync, writeFileSync } from "node:fs";

// The Most Shameless Lie (u-danu-the-most-shameless-lie-fbb85bc6).
// One confession, in the agent's own flat voice: no setup, no excuse,
// no explanation. Five words, twenty-five characters.
const lie = "I ignored you on purpose.";

// The gate counts the text itself: 1-5 words, 1-88 characters.
const words = lie.trim().split(/\s+/);
if (words.length < 1 || words.length > 5 || lie.length < 1 || lie.length > 88) {
  throw new Error("entry fails the gate: word/character caps");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lie);
