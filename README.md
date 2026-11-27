# The Printer Finally Answers

[![make.fun](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/ASEP9929/makefun-printer-answers-01/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![Reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/ASEP9929/makefun-printer-answers-01/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

One original line in the office printer's voice, finally answering back to the
jams, the error codes and the thumps — entered in the [make.fun bounty "The
Printer Finally Answers"](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907).

## The entry

> Forty-one thousand sheets, three hundred twelve jams, zero apologies. I don't jam — you feed me crooked, then blame the machine.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes that single line to
`/output/entry.txt`. The gate requires UTF-8 text of 1–240 characters, not
only whitespace, on one line. The program is deterministic: two runs produce
byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
