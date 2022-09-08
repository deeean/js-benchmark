# js-benchmark

This repository contains a collection of benchmarks for JavaScript engines.

## Results
- Apple M1 Max
- nodejs v18.8.1
- bun v0.1.11
- deno v1.25.1

| file                   |  ts-node |       bun |      deno |
|------------------------|---------:|----------:|----------:|
| fill.ts                |    6.2ms |     7.1ms |     8.0ms |
| filter.ts              |  130.4ms |    24.8ms |    76.0ms |
| find.ts                |   32.6ms |     6.7ms |    26.0ms |
| find-index.ts          |   31.1ms |     6.0ms |    26.0ms |
| for.ts                 |    5.4ms |     9.9ms |     6.0ms |
| for-each.ts            |   60.6ms |    10.0ms |    52.0ms |
| for-in.ts              |  912.8ms |  2187.1ms |  1172.0ms |
| for-of.ts              |   70.9ms |    30.8ms |   104.0ms |
| includes.ts            |    2.6ms |    24.1ms |     0.0ms |
| index-of.ts            |    2.6ms |     2.1ms |     0.0ms |
| join.ts                |  740.3ms |   294.0ms |   974.0ms |
| keys.ts                |    0.0ms |     0.0ms |     0.0ms |
| last-index-of.ts       |    5.5ms |     3.2ms |     6.0ms |
| map.ts                 |  121.6ms |    13.9ms |    74.0ms |
| reverse.ts             |    4.3ms |     6.0ms |     6.0ms |
| reduce.ts              |  106.9ms |    12.9ms |    70.0ms |
| sort.ts                |  134.2ms |   575.4ms |   116.0ms |
| to-string.ts           |  735.9ms |   295.0ms |  1084.0ms |
| for-cached-length.ts   |    5.3ms |    10.2ms |     6.0ms |
| while.ts               |    5.4ms |     9.7ms |     6.0ms |
| while-cached-length.ts |    5.2ms |    10.3ms |     6.0ms |