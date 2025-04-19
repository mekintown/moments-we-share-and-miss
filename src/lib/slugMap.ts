import {
  ChildType,
  GrandChildType,
  LocationType,
  ParentType,
  PersonType,
  RelativeType,
  WebColor,
} from "@/enums/enums";

export const parentSlugMap: Partial<Record<PersonType, string>> = {
  [ParentType.Dad]: "dad",
  [ParentType.Mom]: "mom",
  [RelativeType.Grandma]: "grandma",
  [RelativeType.Grandpa]: "grandpa",
  [RelativeType.Aunt]: "mom",
  [RelativeType.Uncle]: "dad",
};

export const childSlugMap: Partial<Record<PersonType, string>> = {
  [ChildType.Daughter]: "daughter",
  [ChildType.Son]: "son",
  [ChildType.NonBi]: "nonbi",
  [GrandChildType.Daughter]: "daughter",
  [GrandChildType.Son]: "son",
  [GrandChildType.NonBi]: "nonbi",
};

export const locationSlugMap: Record<LocationType, string> = {
  [LocationType.Home]: "home",
  [LocationType.Car]: "car",
  [LocationType.Beach]: "beach",
  [LocationType.School]: "school",
  [LocationType.Others]: "others",
};

export const colorSlugMap: Record<WebColor, string> = {
  [WebColor.Red]: "red",
  [WebColor.Orange]: "orange",
  [WebColor.Yellow]: "yellow",
  [WebColor.Green]: "green",
  [WebColor.Blue]: "blue",
  [WebColor.Purple]: "purple",
  [WebColor.Pink]: "pink",
  [WebColor.White]: "white",
};
