{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(i);
  }

  const startTime = performance.now();

  for (const it in data) {

  }

  console.log(performance.now() - startTime);
}