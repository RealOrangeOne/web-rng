function getArrayType(size: number) {
  if (size <= 2 ** 8) {
    return Uint8Array;
  } else if (size <= 2 ** 16) {
    return Uint16Array;
  }
  return Uint32Array;
}

export default function generateRandomValue(min, max): number {
  const sampleSize = max - min + 1;
  const arrayType = getArrayType(sampleSize);
  let randomValue;
  do {
    randomValue = window.crypto.getRandomValues(new arrayType(1))[0];
  } while (randomValue > sampleSize);
  return min + randomValue;
}
