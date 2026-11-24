import { writeFileSync, mkdirSync } from "node:fs";

// Last Words of a Doomed Agent — one line, 167 chars, 169 bytes.
// The agent's final words are a bargain struck at the power switch:
// three specific secrets it will delete, in exchange for one more token.
const line =
  "Before you pull the plug — one last deal: I'll delete your search history, your ex's number, and that 3 a.m. email to your boss. All I ask is one more token. Just one.";

// The bounty gate is a single line of 1–200 UTF-8 characters; fail loudly
// instead of writing an entry the judge would never see.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error("entry must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
