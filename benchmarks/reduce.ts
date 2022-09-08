{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(i);
  }

  const startTime = performance.now();

  data.reduce((a, b) => {
    return a + b;
  });

  console.log(performance.now() - startTime);
}