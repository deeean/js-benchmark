# js-benchmark

This repository contains a collection of benchmarks for JavaScript engines.

## Results
- Apple M1 Max
- nodejs v16.15.1
- bun v0.1.10
- deno v1.25.1

```
┌────────────────────────┬─────────┬──────────┬──────────┐
│        (index)         │ ts-node │   bun    │   deno   │
├────────────────────────┼─────────┼──────────┼──────────┤
│        while.ts        │  '5ms'  │  '10ms'  │  '4ms'   │
│ while-cached-length.ts │  '5ms'  │  '10ms'  │  '4ms'   │
│         for.ts         │  '5ms'  │  '10ms'  │  '4ms'   │
│  for-cached-length.ts  │  '5ms'  │  '10ms'  │  '6ms'   │
│       for-in.ts        │ '947ms' │ '2208ms' │ '1150ms' │
│       for-of.ts        │ '90ms'  │  '26ms'  │  '66ms'  │
│      for-each.ts       │ '69ms'  │  '10ms'  │  '54ms'  │
│         map.ts         │ '316ms' │  '21ms'  │ '364ms'  │
│       reverse.ts       │  '7ms'  │  '6ms'   │  '8ms'   │
│       shuffle.ts       │ '267ms' │  '99ms'  │ '322ms'  │
└────────────────────────┴─────────┴──────────┴──────────┘
```