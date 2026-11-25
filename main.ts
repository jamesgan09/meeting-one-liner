// The Meeting That Should Have Been an Email — a one-line entry for
// make.fun's u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
// bounty. The program writes the line to /output/entry.txt (the grader's
// container mounts /output; MAKEFUN_OUTPUT_DIR stands in for it locally).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "This meeting could have been an email, but then we'd need a meeting to discuss the email.";

// The bounty caps a line at 200 characters; fail loudly instead of
// submitting an over-long entry the gate would refuse.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line);
process.stdout.write(`wrote ${join(outDir, 'entry.txt')} (${line.length} characters)\n`);
