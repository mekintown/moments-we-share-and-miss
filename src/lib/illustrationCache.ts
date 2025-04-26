import { Buffer } from "buffer";

export const illuCache = new Map<string, string>(); // URL -> data:URI
const MAX = 32;

export const getIllustration = async (url: string) => {
  if (illuCache.has(url)) {
    return illuCache.get(url)!; // hit
  }
  const buf = await fetch(url).then((r) => r.arrayBuffer());
  const dataUri = `data:image/png;base64,${Buffer.from(buf).toString(
    "base64"
  )}`;

  /* tiny LRU eviction */
  if (illuCache.size >= MAX) {
    illuCache.delete(illuCache.keys().next().value);
  }
  illuCache.set(url, dataUri);
  return dataUri;
};
