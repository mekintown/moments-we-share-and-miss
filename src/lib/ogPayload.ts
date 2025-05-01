import {
  CustomLocation,
  ImageSrc,
  Location,
  MissedPerson,
  Name,
  WebAnswerColor,
  WebAnswerImportant,
  WebAnswerWhy,
  WebQuestionColor,
  WebQuestionSound,
} from "@/constants/localStorageConstants";
import { colorSlugMap } from "@/lib/slugMap";

export const buildOgPayload = () => {
  const ls = (k: string) => localStorage.getItem(k) || "";

  const locEnum = ls(Location);
  const location = locEnum === "อื่นๆ" ? ls(CustomLocation) : locEnum;

  const colorEnum = ls(WebQuestionColor) as keyof typeof colorSlugMap | "";
  const colorSlug = colorEnum ? colorSlugMap[colorEnum] : "blue";

  return {
    name: ls(Name),
    missedPerson: ls(MissedPerson),
    location,
    webAnswerColor: ls(WebAnswerColor),
    webAnswerImportant: ls(WebAnswerImportant),
    webAnswerWhy: ls(WebAnswerWhy),
    webQuestionSound: ls(WebQuestionSound),
    webQuestionColor: colorSlug,
    imageSrc: ls(ImageSrc).replace(/\.webp$/, ".png"),
  };
};
