# js-benchmark

This repository contains a collection of benchmarks for JavaScript engines.

## Results
- Apple M1 Max
- nodejs v18.9.0
- bun v0.1.13
- deno v1.25.3

| file                   | ts-node | bun      | deno     |
|------------------------|---------|----------|----------|
| fill.ts                | 6.5ms   | 5.9ms    | 6.0ms    |
| filter.ts              | 129.2ms | 22.3ms   | 118.0ms  |
| find.ts                | 31.3ms  | 6.4ms    | 26.0ms   |
| find-index.ts          | 32.5ms  | 6.1ms    | 26.0ms   |
| for.ts                 | 5.4ms   | 9.6ms    | 6.0ms    |
| for-each.ts            | 60.0ms  | 10.3ms   | 50.0ms   |
| for-in.ts              | 957.2ms | 2200.0ms | 1122.0ms |
| for-of.ts              | 109.4ms | 29.6ms   | 70.0ms   |
| includes.ts            | 2.6ms   | 24.8ms   | 2.0ms    |
| index-of.ts            | 2.6ms   | 2.4ms    | 2.0ms    |
| join.ts                | 712.4ms | 287.2ms  | 998.0ms  |
| keys.ts                | 0.0ms   | 0.0ms    | 0.0ms    |
| last-index-of.ts       | 5.5ms   | 3.2ms    | 8.0ms    |
| map.ts                 | 123.2ms | 14.1ms   | 80.0ms   |
| reverse.ts             | 4.3ms   | 6.8ms    | 4.0ms    |
| reduce.ts              | 113.0ms | 13.0ms   | 114.0ms  |
| sort.ts                | 136.6ms | 573.0ms  | 104.0ms  |
| to-string.ts           | 714.4ms | 287.0ms  | 1142.0ms |
| for-cached-length.ts   | 5.2ms   | 10.1ms   | 6.0ms    |
| while.ts               | 5.4ms   | 9.7ms    | 4.0ms    |
| while-cached-length.ts | 5.3ms   | 10.3ms   | 6.0ms    |