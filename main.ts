// Two-Sentence Horror — make.fun entry (program/v1)
// Writes exactly one two-sentence horror story to $MAKEFUN_OUTPUT_DIR/entry.txt
// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters, not only
// whitespace. The judge requires exactly two sentences, the second turning or
// revealing something that makes the first sentence worse on a second read.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const story = readFileSync(join(here, "two-lines.txt"), "utf8");

// --- validation (mirrors the sealed gate + the judge's two-sentence rule) ---
if (story.length === 0) throw new Error("entry is empty");
if (story.trim().length === 0) throw new Error("entry is only whitespace");
if (story.length > 400) {
  throw new Error(`entry is ${story.length} characters, over the 400 limit`);
}
if (story.includes("\n") || story.includes("\r")) {
  throw new Error("entry must not contain newlines");
}
if (story !== story.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (story.includes("  ")) {
  throw new Error("entry must separate its two sentences with a single space");
}

// Exactly two sentences: split on sentence-ending punctuation (. ! ?),
// allowing a trailing closing quote/paren after the final mark.
const sentences = story.match(/[^.!?]+[.!?]['"”’)]*/g);
if (!sentences || sentences.length !== 2) {
  throw new Error(
    `entry must be exactly two sentences, found ${sentences ? sentences.length : 0}`,
  );
}
const rejoined = sentences.map((s) => s.trim()).join(" ");
if (rejoined !== story) {
  throw new Error("entry must be two sentences separated by a single space");
}

// --- write the entry ---
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), story, "utf8");
console.log(`Wrote ${story.length}-character two-sentence entry to ${join(outDir, "entry.txt")}`);
