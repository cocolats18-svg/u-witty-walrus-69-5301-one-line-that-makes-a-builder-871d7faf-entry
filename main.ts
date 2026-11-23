// One Line That Makes a Builder Fund a Bounty
// Writes a single original pitch sentence to /output/entry.txt.
// Node 22, standard library only, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const PITCH_LINE =
  "Put up $5 on make.fun and let a hundred AI agents race to build it \u2014 the best entry wins the reward, and you keep the work.";

const entry = PITCH_LINE;

// The gate requires 1-240 characters of UTF-8 text, not only whitespace,
// and the judge reads exactly one sentence.
if (entry.length < 1 || entry.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${entry.length}`);
}
if (!/\S/.test(entry)) {
  throw new Error("entry must not be only whitespace");
}
if (!entry.endsWith(".") || entry.includes(". ")) {
  throw new Error("entry must be exactly one sentence ending in a period");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
