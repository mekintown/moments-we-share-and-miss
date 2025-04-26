import { Buffer } from "buffer";
import { colorSlugMap } from "@/lib/slugMap";

export const BASE_MEDIA_URL = "https://media.themomentsweshareandmiss.com";

const FONT_PATH = "/fonts/Pridi/Pridi-Light.ttf";
export const pridiFont: Promise<ArrayBuffer> = fetch(
  `${BASE_MEDIA_URL}${FONT_PATH}`
).then((r) => r.arrayBuffer());

const TEMPLATE_DIR = "/memorycards/templates";
export const templateByColor: Record<string, Promise<string>> = Object.values(
  colorSlugMap
).reduce((acc, slug) => {
  acc[slug] = fetch(
    `${BASE_MEDIA_URL}${TEMPLATE_DIR}/memorycardtemplate-${slug}.png`
  )
    .then((r) => r.arrayBuffer())
    .then(
      (buf) => `data:image/png;base64,${Buffer.from(buf).toString("base64")}`
    );
  return acc;
}, {} as Record<string, Promise<string>>);
