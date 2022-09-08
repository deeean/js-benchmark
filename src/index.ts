import { exec } from 'child_process';

class Table {
  rows: Array<Array<string>> = [];

  addRow(...columns: Array<string>) {
    this.rows.push(columns);
  }

  toMarkdown() {
    const widths = this.rows.reduce((acc, row) => {
      row.forEach((column, index) => {
        acc[index] = Math.max(acc[index] || 0, column.length);
      });

      return acc;
    }, [] as Array<number>);

    const results = this.rows
      .map(row => {
        return `| ${row
          .map((column, index) => {
            return column.padEnd(widths[index]);
          })
          .join(' | ')} |`;
      });

    results.splice(1, 0, `|${widths.map(width => '-'.repeat(width + 2)).join('|')}|`);

    return results.join('\n');
  }
}

const processes = [
  'ts-node',
  'bun',
  'deno'
];

const args = {
  'ts-node': [],
  'bun': ['run'],
  'deno': ['run']
};

const files = [
  'fill.ts',
  'filter.ts',
  'find.ts',
  'find-index.ts',
  'for.ts',
  'for-each.ts',
  'for-in.ts',
  'for-of.ts',
  'includes.ts',
  'index-of.ts',
  'join.ts',
  'keys.ts',
  'last-index-of.ts',
  'map.ts',
  'reverse.ts',
  'reduce.ts',
  'sort.ts',
  'to-string.ts',
  'for-cached-length.ts',
  'while.ts',
  'while-cached-length.ts',
];

function toHumanReadable(ms: number): string {
  return `${ms.toFixed(1)}ms`;
}

async function benchmark(process: string, file: string) {
  const command = [process, ...args[process], `./benchmarks/${file}`].join(' ');

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        reject(error);
      }

      resolve(stdout.trim());
    });
  });
}

async function main() {
  const data: { [key: string]: { [key: string]: number } } = {  };

  for (const process of processes) {
    for (const file of files) {
      console.log('Benchmarking', process, file);
      try {
        const stdout = await benchmark(process, file);

        if (!data[file]) {
          data[file] = {};
        }

        data[file][process] = Number(stdout);
      } catch (e) {
        console.error(e);
      }
    }
  }

  const keys = Object.keys(data);
  const table = new Table();

  table.addRow('file', ...processes);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const row = data[key];

    table.addRow(key, ...processes.map(it => toHumanReadable(row[it])));
  }

  console.log(table.toMarkdown());
}


main().then(() => {

});
