const RAND_MAX = 2 ** 32;

export function generateRandomValue(min: number, max: number): number {
  const sampleSize = max - min + 1;
  const upper = RAND_MAX - (RAND_MAX % sampleSize);
  let randomValue: number;
  do {
    randomValue = window.crypto.getRandomValues(new Uint32Array(1))[0];
  } while (randomValue >= upper);
  randomValue %= sampleSize;
  return min + randomValue;
}

export function initRandom(): void {
  // The first random value generation is always slower (~10x). Likely due to internal initialisation
  generateRandomValue(1, 10);
}
