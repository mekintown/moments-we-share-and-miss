export enum WebColor {
  Red = "แดง",
  Orange = "ส้ม",
  Yellow = "เหลือง",
  Green = "เขียว",
  Blue = "ฟ้า",
  Purple = "ม่วง",
  Pink = "ชมพู",
  White = "ขาว",
}

export enum LocationType {
  Home = "บ้าน",
  Car = "รถ",
  Beach = "ทะเล",
  School = "โรงเรียน",
  Others = "อื่นๆ",
}

export enum ParentType {
  Dad = "พ่อ",
  Mom = "แม่",
}

export enum ChildType {
  Daughter = "ลูกสาว",
  Son = "ลูกชาย",
  NonBi = "ลูก (ไม่ระบุเพศ)",
}

export enum GrandChildType {
  Daughter = "หลานสาว",
  Son = "หลานชาย",
  NonBi = "หลาน (ไม่ระบุเพศ)",
}

export enum RelativeType {
  Grandma = "ยาย/ย่า",
  Grandpa = "ตา/ปู่",
  Aunt = "ป้า",
  Uncle = "ลุง",
}

export type PersonType = ParentType | ChildType | GrandChildType | RelativeType;
