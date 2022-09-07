{
  const data = [];

  for (let i = 0; i < 10_000_000; i++) {
    data.push(Math.random());
  }

  function shuffle<T>(arr: T[]) {
    const res = [...arr];

    for (let i = res.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [res[i], res[j]] = [res[j], res[i]];
    }

    return res;
  }

  const startTime = performance.now();

  shuffle(data);

  console.log(performance.now() - startTime);
}