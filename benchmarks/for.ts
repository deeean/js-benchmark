{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(i);
  }

  const startTime = performance.now();

  for (let i = 0; i < data.length; i++) {

  }

  console.log(performance.now() - startTime);
}