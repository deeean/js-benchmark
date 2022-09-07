{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(Math.random());
  }

  const startTime = performance.now();

  for (let i = 0, length = data.length; i < length; i++) {

  }

  console.log(performance.now() - startTime);
}