{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(Math.random());
  }

  const startTime = performance.now();

  data.sort((a, b) => a - b);

  console.log(performance.now() - startTime);
}