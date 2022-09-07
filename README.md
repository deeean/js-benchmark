# js-benchmark

This repository contains a collection of benchmarks for JavaScript engines.

## Results
- Apple M1 Max
- nodejs v16.15.1
- bun v0.1.10
- deno v1.25.1

```
┌────────────────────────┬──────────┬──────────┬──────────┐
│        (index)         │ ts-node  │   bun    │   deno   │
├────────────────────────┼──────────┼──────────┼──────────┤
│        while.ts        │  '6ms'   │  '10ms'  │  '6ms'   │
│ while-cached-length.ts │  '5ms'   │  '11ms'  │  '6ms'   │
│         for.ts         │  '6ms'   │  '10ms'  │  '6ms'   │
│  for-cached-length.ts  │  '6ms'   │  '11ms'  │  '4ms'   │
│       for-in.ts        │ '981ms'  │ '2378ms' │ '1150ms' │
│       for-of.ts        │  '91ms'  │  '26ms'  │  '68ms'  │
│      for-each.ts       │  '71ms'  │  '10ms'  │  '54ms'  │
│         map.ts         │ '322ms'  │  '22ms'  │ '368ms'  │
│        sort.ts         │ '6410ms' │ '1841ms' │ '5722ms' │
│       reverse.ts       │  '7ms'   │  '6ms'   │  '6ms'   │
│       shuffle.ts       │ '291ms'  │ '101ms'  │ '318ms'  │
└────────────────────────┴──────────┴──────────┴──────────┘
```