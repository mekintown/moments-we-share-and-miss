export interface OgRequestBody {
  name?: string;
  missedPerson?: string;
  location?: string;
  webAnswerColor?: string;
  webAnswerImportant?: string;
  webAnswerWhy?: string;
  webQuestionColor: string; // slug, e.g. "blue"
  webQuestionSound?: string;
  imageSrc?: string; // starts with "/memorycards/…"
}

export const clamp = (txt: string | null | undefined, max = 140): string =>
  txt ? (txt.length > max ? `${txt.slice(0, max - 1)}…` : txt) : "";
