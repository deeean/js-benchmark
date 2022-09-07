{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(Math.random());
  }

  const startTime = performance.now();

  let i = 0;
  while (i < data.length) {
    i++;
  }

  console.log(performance.now() - startTime);
}