let ogPromise: Promise<string> | null = null;

export const ensureOgImage = async () => {
  const cached = sessionStorage.getItem("ogDataUrl");
  if (cached) return cached;

  if (!ogPromise) {
    const { buildOgPayload } = await import("./ogPayload");
    const payload = buildOgPayload();

    ogPromise = fetch("/api/og", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((r) => r.blob())
      .then(
        (blob) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
          })
      )
      .then((dataUrl) => {
        sessionStorage.setItem("ogDataUrl", dataUrl);
        return dataUrl;
      })
      .catch((err) => {
        console.error("OG fetch failed:", err);
        ogPromise = null;
        throw err;
      });
  }
  return ogPromise;
};
