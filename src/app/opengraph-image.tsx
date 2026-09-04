import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Poxtrea, café y desayunos en Madrid, Ciudad Lineal";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const logo = await readFile(
  join(process.cwd(), "public/brand/poxtrea-logo-white.png"),
);
const logoDataUri = `data:image/png;base64,${logo.toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          overflow: "hidden",
          padding: "58px 66px",
          backgroundColor: "#5c3a2b",
          color: "#fffdf7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            backgroundColor: "#d8a56b",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "116px",
            bottom: "-225px",
            width: "440px",
            height: "440px",
            borderRadius: "50%",
            backgroundColor: "#e86d2f",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "66px",
            bottom: "67px",
            width: "116px",
            height: "116px",
            border: "4px solid #211a16",
            borderRadius: "50%",
            backgroundColor: "#f2c21a",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <img
            src={logoDataUri}
            alt=""
            width={360}
            height={120}
            style={{ objectFit: "contain", objectPosition: "left center" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              color: "#211a16",
              fontSize: "21px",
              fontWeight: 800,
              letterSpacing: "3px",
              lineHeight: 1.15,
              textAlign: "right",
            }}
          >
            <span>MADRID</span>
            <span>CIUDAD LINEAL</span>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginTop: "34px",
          }}
        >
          <span
            style={{
              color: "#f2c21a",
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "6px",
            }}
          >
            CAFÉ Y DESAYUNOS
          </span>
          <span
            style={{
              maxWidth: "760px",
              marginTop: "20px",
              color: "#fffdf7",
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 0.98,
            }}
          >
            Tu pausa favorita
            <br />
            en Madrid
          </span>
          <span
            style={{
              marginTop: "27px",
              color: "#f6e7cf",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            Cafés · tostadas · smoothies · frappés · bocadillos
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "66px",
            display: "flex",
            alignItems: "center",
            color: "#f6e7cf",
            fontSize: "17px",
            fontWeight: 700,
            letterSpacing: "2px",
          }}
        >
          POXTREA / COFFEE &amp; BREAKFAST
        </div>
        <div
          style={{
            position: "absolute",
            right: "205px",
            bottom: "88px",
            display: "flex",
            color: "#211a16",
            fontSize: "34px",
            fontWeight: 800,
          }}
        >
          +
        </div>
      </div>
    ),
    size,
  );
}
