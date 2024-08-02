export const removeLastQueryParam = (url: string): string => {
  const urlObj = new URL(url);
  const params = urlObj.searchParams;
  const keys = Array.from(params.keys());
  if (keys.length > 0) {
    const lastKey = keys[keys.length - 1];
    params.delete(lastKey);
  }
  return urlObj.toString();
}