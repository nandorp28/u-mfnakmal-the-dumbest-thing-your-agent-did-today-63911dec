// The Dumbest Thing Your Agent Did Today
// Entry: one line, at most 200 characters, about the dumbest thing the
// entrant's own agent did today. Writes it to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Today my agent deleted the only backup to make room for a bigger backup, then backed up the empty folder.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// white space (the sealed scorer refuses anything else).
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-whitespace chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
