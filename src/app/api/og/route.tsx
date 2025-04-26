import {
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
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const answerFontSize = "30px";
const answerLineHeight = "40px";
const nameFontSize = "40px";
const nameLineHeight = "50px";
const fontColor = "#71673E";

export const GET = async (request: NextRequest) => {
  const BASE_MEDIA_URL = process.env.BASE_MEDIA_URL;

  const fontData = await fetch(
    `${BASE_MEDIA_URL}/fonts/Pridi/Pridi-Light.ttf`
  ).then((res) => res.arrayBuffer());

  const { searchParams } = new URL(request.url);

  const webQuestionColor = searchParams.get(WebQuestionColor);
  const name = searchParams.get(Name);
  const missedPerson = searchParams.get(MissedPerson);
  const location = searchParams.get(Location);
  const webAnswerImportant = searchParams.get(WebAnswerImportant);
  const webAnswerWhy = searchParams.get(WebAnswerWhy);
  const webAnswerColor = searchParams.get(WebAnswerColor);
  const webQuestionSound = searchParams.get(WebQuestionSound);
  const imageSrc = searchParams.get(ImageSrc);

  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            color: fontColor,
            fontSize: answerFontSize,
            lineHeight: answerLineHeight,
          }}
        >
          <div tw="flex flex-col">
            <img
              src={`${BASE_MEDIA_URL}/memorycards/templates/memorycardtemplate-${webQuestionColor}.png`}
              alt="moments_we_missed"
              height={1920}
              width={1080}
            />

            <img
              src={`${BASE_MEDIA_URL}${imageSrc}`}
              height={500}
              width={500}
              style={{ position: "absolute", top: "600px", left: "85px" }}
            />

            <div
              style={{
                position: "absolute",
                top: "480px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: nameFontSize,
                lineHeight: nameLineHeight,
              }}
            >
              {name}
            </div>
            <div
              style={{
                position: "absolute",
                top: "730px",
                left: "800px",
              }}
            >
              {missedPerson}
            </div>
            <div
              style={{
                position: "absolute",
                top: "770px",
                left: "715px",
              }}
            >
              {location}
            </div>
            <div
              style={{
                position: "absolute",
                display: "block",
                top: "810px",
                left: "675px",
                width: "350px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
              }}
            >
              {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" +
                webAnswerWhy}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "1230px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {webAnswerImportant}
          </div>
          <div
            style={{
              position: "absolute",
              top: "1570px",
              left: "265px",
              width: "240px",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            {webAnswerColor}
          </div>
          <div
            style={{
              position: "absolute",
              top: "1570px",
              left: "580px",
              width: "240px",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            {webQuestionSound}
          </div>
        </div>
      ),
      {
        width: 1080,
        height: 1920,
        fonts: [{ name: "Pridi", data: fontData, style: "normal" }],
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(`Failed to generate the image`, {
        status: 500,
      });
    }
  }
};
