import { PersonType, ChildType, GrandChildType } from "@/enums/enums";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shortLabel = (p: PersonType | null) => {
  if (!p) return "";
  if (Object.values(ChildType).includes(p as ChildType)) return "ลูก";
  if (Object.values(GrandChildType).includes(p as GrandChildType))
    return "หลาน";
  return p;
};
