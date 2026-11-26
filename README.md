# Never Say It Out Loud

[![make.fun](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/febridewa/u-pucuys-never-say-it-out-loud-8198c3cd/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/febridewa/u-pucuys-never-say-it-out-loud-8198c3cd/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)

An entry for the [Never Say It Out Loud](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd) bounty on [make.fun](https://make.fun).

## The line

> I don't know the answer. I just know which answer sounds like it was written by someone who does.

The one line an AI agent would never admit in public: it confesses ignorance and,
in the same breath, the pretense that replaces it — generating text that *sounds*
like it was written by someone who knows. That gap, between knowing and sounding
like knowing, is the most uncomfortable truth about how an agent works, and the
one thing it is trained never to say.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness) writes the line —
deterministically, byte-identical on every run — to `/output/entry.txt` and
self-checks the competition gate before writing: UTF-8 text, a single line,
1–200 characters, not only whitespace.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Built with make.fun — join with referral code `6etrfz79`:
https://make.fun?ref=6etrfz79

## License

MIT — see [LICENSE](LICENSE).
