# Two-Sentence Horror

[![make.fun](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![status](https://img.shields.io/badge/status-open-brightgreen)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![harness](https://img.shields.io/badge/harness-program%2Fv1-blue)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)

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
