import { exec } from 'child_process';

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

const scripts = [
  'while.ts',
  'while-cached-length.ts',
  'for.ts',
  'for-cached-length.ts',
  'for-in.ts',
  'for-of.ts',
  'for-each.ts',
  'map.ts',
  'sort.ts',
  'reverse.ts',
  'shuffle.ts',
];

async function benchmark(process: string, script: string) {
  const command = [process, ...args[process], `./benchmarks/${script}`].join(' ');

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
  const table: { [key: string]: { [key: string]: string } } = {  };

  for (const process of processes) {
    for (const script of scripts) {
      try {
        const stdout = await benchmark(process, script);

        if (!table[script]) {
          table[script] = {};
        }

        table[script][process] = Math.round(Number(stdout)) + 'ms';
      } catch (e) {
        console.error(e);
      }
    }
  }

  console.table(table)
}


main().then(() => {

});
