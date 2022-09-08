{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(i);
  }

  const startTime = performance.now();

  let i = 0;
  const length = data.length;
  while (i < length) {
    i++;
  }

  console.log(performance.now() - startTime);
}