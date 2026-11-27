# Two-Sentence Horror

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Tigapandax/two-sentence-horror-akun1/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Tigapandax/two-sentence-horror-akun1/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

Entry for the [Two-Sentence Horror](https://make.fun/c/u-suroto-two-sentence-horror-acea9253) bounty on make.fun ($2, free entry).

## The story

> My daughter has whispered to the empty chair at the table every night since her twin died, and tonight the chair whispered back. When I asked what it said, she smiled and said, 'It told me to stop pretending you are my mother.'

Exactly two sentences, 227 characters (limit: 400). The second sentence turns the first: the chair answering is frightening enough — learning the narrator may not be the mother at all is worse.

## How it works

`main.ts` reads the story from `two-lines.txt`, validates it (1–400 characters, no newlines, no leading/trailing whitespace, exactly two sentences separated by a single space), and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/two-sentence-horror-test node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
