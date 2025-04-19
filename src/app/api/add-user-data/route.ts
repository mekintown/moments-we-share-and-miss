import { UserData } from "@/enums/enums";
import { db } from "@/lib/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

const REQUIRED_FIELDS: (keyof UserData)[] = [
  "name",
  "age",
  "gender",
  "web_question_color",
  "web_answer_color",
  "missed_person",
  "missed_person_relationship",
  "location",
  "web_answer_why",
  "web_question_sound",
  "web_answer_important",
  "pair_id",
];

export const POST = async (req: NextRequest) => {
  try {
    const userData: UserData = await req.json();

    const hasAllFields = REQUIRED_FIELDS.every(
      (field) => userData[field] !== undefined
    );

    if (!hasAllFields) {
      return NextResponse.json(
        { success: false, message: "Invalid Input" },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, "user-data"), {
      ...userData,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "User data added successfully",
        id: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding user data:", error);
    return NextResponse.json(
      { success: false, message: "Error saving user data" },
      { status: 500 }
    );
  }
};
