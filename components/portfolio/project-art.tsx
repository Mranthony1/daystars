import type { ProjectArt } from "@/lib/projects";

export function ProjectArt({
  art,
  alt,
}: {
  art: ProjectArt;
  alt: string;
}) {
  return (
    <svg
      viewBox="0 0 800 1000"
      role="img"
      className="h-full w-full transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
    >
      <title>{alt}</title>
      {art === "northline" ? <Northline /> : null}
      {art === "harbor" ? <Harbor /> : null}
      {art === "lumen" ? <Lumen /> : null}
      {art === "fieldnote" ? <Fieldnote /> : null}
      {art === "kite" ? <Kite /> : null}
    </svg>
  );
}

function Northline() {
  return (
    <>
      <rect width="800" height="1000" fill="#F7F7F0" />
      <rect x="70" y="80" width="250" height="840" fill="#141512" />
      <rect x="360" y="180" width="370" height="18" fill="#141512" />
      <rect x="360" y="230" width="250" height="18" fill="#141512" />
      <path d="M390 420 L760 860 L700 900 L330 460 Z" fill="#D7FF64" />
      <text x="360" y="360" fill="#141512" fontSize="28" fontFamily="sans-serif" letterSpacing="6">
        NL / 01
      </text>
    </>
  );
}

function Harbor() {
  return (
    <>
      <rect width="800" height="1000" fill="#141512" />
      <circle cx="430" cy="430" r="220" fill="#D8D8D0" />
      <rect x="0" y="690" width="800" height="8" fill="#D7FF64" />
      <rect x="80" y="760" width="220" height="12" fill="#F7F7F0" />
      <rect x="80" y="800" width="140" height="12" fill="#B7B8AE" />
    </>
  );
}

function Lumen() {
  return (
    <>
      <rect width="800" height="1000" fill="#F7F7F0" />
      {Array.from({ length: 8 }).map((_, index) => (
        <line
          key={`v-${index}`}
          x1={80 + index * 90}
          y1="70"
          x2={80 + index * 90}
          y2="930"
          stroke="#141512"
          strokeOpacity="0.18"
        />
      ))}
      {Array.from({ length: 10 }).map((_, index) => (
        <line
          key={`h-${index}`}
          x1="70"
          y1={80 + index * 90}
          x2="740"
          y2={80 + index * 90}
          stroke="#141512"
          strokeOpacity="0.18"
        />
      ))}
      <rect x="170" y="520" width="70" height="280" fill="#141512" />
      <rect x="270" y="390" width="70" height="410" fill="#141512" />
      <rect x="370" y="250" width="70" height="550" fill="#141512" />
      <rect x="470" y="460" width="70" height="340" fill="#D7FF64" />
    </>
  );
}

function Fieldnote() {
  return (
    <>
      <rect width="800" height="1000" fill="#D8D8D0" />
      <rect x="120" y="180" width="420" height="520" fill="#141512" />
      <rect x="190" y="250" width="420" height="520" fill="#F7F7F0" />
      <rect x="250" y="320" width="300" height="18" fill="#141512" />
      <rect x="250" y="360" width="180" height="18" fill="#141512" />
      <rect x="250" y="620" width="120" height="48" fill="#D7FF64" />
    </>
  );
}

function Kite() {
  return (
    <>
      <rect width="800" height="1000" fill="#141512" />
      <path d="M120 160 H520 V780 H120 Z" fill="none" stroke="#F7F7F0" strokeWidth="8" />
      <path d="M120 160 L520 780" stroke="#F7F7F0" strokeWidth="2" />
      <path d="M520 160 L120 780" stroke="#F7F7F0" strokeWidth="2" />
      <rect x="470" y="430" width="150" height="16" fill="#D7FF64" />
      <rect x="80" y="860" width="280" height="10" fill="#D8D8D0" />
    </>
  );
}
