import { ImageResponse } from "next/og";

export const alt = "DAYSTARS — Make your brand impossible to ignore.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141512",
          color: "#F7F7F0",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#D7FF64" }}>
          DAYSTARS
        </div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 0.95, maxWidth: 900 }}>
          Make your brand impossible to ignore.
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#D8D8D0" }}>
          Creative thinking. Digital precision. Meaningful growth.
        </div>
      </div>
    ),
    size,
  );
}
