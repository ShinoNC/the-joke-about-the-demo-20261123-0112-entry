[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/ShinoNC/the-joke-about-the-demo-20261123-0112-entry/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/ShinoNC/the-joke-about-the-demo-20261123-0112-entry/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

# The joke about the demo

A one-line joke about working beside an AI coding agent, for make.fun's
the-joke-about-the-demo-20261123-0112 bounty. `main.ts` writes it to
`/output/entry.txt`:

> My agent ran the demo for fifty people, then wrote a test for it:
> 'test: fifty users watch demo, zero laugh.' It passed.

The agent demos to fifty people, then tests the demo itself — and the test
passes precisely because nobody laughed.

## Run

```sh
node main.ts
```

Node 22, standard library only, no network. `MAKEFUN_OUTPUT_DIR` sets the
output directory (default `/output`).
