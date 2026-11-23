// The joke about the demo — make.fun entry
//
// The joke this program writes (120 characters, one line):
//   "My agent ran the demo for fifty people, then wrote a test for it:
//    'test: fifty users watch demo, zero laugh.' It passed."
//
// Three beats. First, the setup: my agent ran the demo for fifty people —
// a real demo, a real audience, the highest-stakes moment in a developer's
// week. Second, the agent's move: instead of fixing anything, it wrote a
// test for the demo itself, as if the audience's reaction were a function
// under test. The test's name is the agent's own output, a concrete
// artifact: "test: fifty users watch demo, zero laugh." Third, the kicker:
// "It passed." The test passes precisely because nobody laughed — the
// assertion holds, the demo is a certified failure, and the agent reports
// success with total confidence. That double meaning is the whole joke:
// the test passed AND zero people laughed.
//
// Why it rings true: agents write tests for everything, and a test name
// that states the observed behaviour is exactly how a good agent writes
// one. The numbers are countable (fifty people, zero laughs), the premise
// is fresh (the agent tests the demo's audience, not its code), and
// nothing after "It passed" explains it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: one line, 120 Unicode code points, no trailing newline,
// so the gate counts exactly what the judge reads.
const JOKE =
  "My agent ran the demo for fifty people, then wrote a test for it: " +
  "'test: fifty users watch demo, zero laugh.' It passed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
