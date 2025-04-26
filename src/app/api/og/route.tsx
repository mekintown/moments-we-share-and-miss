import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import { pridiFont, templateByColor, BASE_MEDIA_URL } from "@/lib/ogAssets";
import { clamp, OgRequestBody } from "@/lib/ogTypes";
import { getIllustration } from "@/lib/illustrationCache";

export const config = { runtime: "edge" };

const FONT_COLOR = "#71673E";
const answerFontSize = "30px";
const answerLineHeight = "40px";
const nameFontSize = "40px";
const nameLineHeight = "50px";
const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 1920;

export const POST = async (req: NextRequest) => {
  const body: OgRequestBody = await req.json();

  const webQuestionColor = body.webQuestionColor ?? "blue"; // slug
  const name = clamp(body.name, 60);
  const missedPerson = clamp(body.missedPerson, 60);
  const location = clamp(body.location, 60);
  const webAnswerWhy = clamp(body.webAnswerWhy, 150);
  const webAnswerImportant = clamp(body.webAnswerImportant, 150);
  const webAnswerColor = clamp(body.webAnswerColor, 140);
  const webQuestionSound = clamp(body.webQuestionSound, 140);

  const imageSrcPng = body.imageSrc
    ? `${BASE_MEDIA_URL}${body.imageSrc.replace(/\.webp$/, ".png")}`
    : null;

  const illustrationURI = imageSrcPng
    ? await getIllustration(imageSrcPng)
    : null;

  const [fontData, templateURI] = await Promise.all([
    pridiFont,
    templateByColor[webQuestionColor] ?? templateByColor.blue,
  ]);

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
          color: FONT_COLOR,
          fontSize: answerFontSize,
          lineHeight: answerLineHeight,
        }}
      >
        <div tw="flex flex-col">
          <img
            src={templateURI}
            alt="moments_we_missed"
            height={CANVAS_HEIGHT}
            width={CANVAS_WIDTH}
          />

          {illustrationURI && (
            <img
              src={illustrationURI}
              height={500}
              width={500}
              style={{ position: "absolute", top: "600px", left: "85px" }}
            />
          )}

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

          <div style={{ position: "absolute", top: "730px", left: "800px" }}>
            {missedPerson}
          </div>

          <div style={{ position: "absolute", top: "770px", left: "715px" }}>
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
            {"\u00A0".repeat(9) + webAnswerWhy}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "1230px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            textAlign: "center",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            wordBreak: "break-word",
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
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {webQuestionSound}
        </div>
      </div>
    ),
    {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      fonts: [{ name: "Pridi", data: fontData, style: "normal" }],
    }
  );
};
