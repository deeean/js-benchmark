{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(i);
  }

  const startTime = performance.now();

  data.findIndex((it) => it === 5_000_000);

  console.log(performance.now() - startTime);
}