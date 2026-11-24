// One excuse, no frills — the whole entry lives in this single line.
// I picked the feature-flag angle because every team has that one
// "temporary" toggle that quietly became part of the architecture.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "That 'temporary' feature flag from 2023 finally expired — turns out it was load-bearing, and it was holding up all of auth.";

// The bounty gate is strict about size, so fail loudly here rather
// than hand in something the checker would bounce anyway. It also
// has to stay on one line: a stray newline would break the format.
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
