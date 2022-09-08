# js-benchmark

This repository contains a collection of benchmarks for JavaScript engines.

## Results
- Apple M1 Max
- nodejs v16.15.1
- bun v0.1.11
- deno v1.25.1

```
┌────────────────────────┬──────────┬──────────┬──────────┐
│        (index)         │ ts-node  │   bun    │   deno   │
├────────────────────────┼──────────┼──────────┼──────────┤
│        while.ts        │  '5ms'   │  '10ms'  │  '6ms'   │
│ while-cached-length.ts │  '5ms'   │  '10ms'  │  '6ms'   │
│         for.ts         │  '5ms'   │  '10ms'  │  '6ms'   │
│  for-cached-length.ts  │  '5ms'   │  '10ms'  │  '4ms'   │
│       for-in.ts        │ '984ms'  │ '2167ms' │ '1148ms' │
│       for-of.ts        │  '93ms'  │  '27ms'  │  '68ms'  │
│      for-each.ts       │  '70ms'  │  '10ms'  │  '54ms'  │
│         map.ts         │ '316ms'  │  '21ms'  │ '366ms'  │
│        sort.ts         │ '5943ms' │ '1806ms' │ '5698ms' │
│       reverse.ts       │  '7ms'   │  '5ms'   │  '6ms'   │
│       shuffle.ts       │ '245ms'  │ '100ms'  │ '322ms'  │
└────────────────────────┴──────────┴──────────┴──────────┘
```