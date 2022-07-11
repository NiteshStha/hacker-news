export function slicePostsIntoChunks(
  arr: number[],
  chunkSize: number
): number[][] {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}
