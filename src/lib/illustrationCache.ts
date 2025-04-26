import { Buffer } from "buffer";

export const illuCache = new Map<string, string>(); // URL -> data:URI
const MAX = 32;

export const getIllustration = async (url: string) => {
  const cached = illuCache.get(url);
  if (cached !== undefined) {
    return cached; // hit
  }

  const buf = await fetch(url).then((r) => r.arrayBuffer());
  const dataUri = `data:image/png;base64,${Buffer.from(buf).toString(
    "base64"
  )}`;

  /* tiny LRU eviction */
  if (illuCache.size >= MAX) {
    const firstKey = illuCache.keys().next().value;
    if (typeof firstKey === "string") {
      illuCache.delete(firstKey);
    }
  }
  illuCache.set(url, dataUri);
  return dataUri;
};
