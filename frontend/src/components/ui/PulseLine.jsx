import React from "react";
import { C } from "../../styles/tokens";

/**
 * The app's signature element — an ECG/vitals-style line.
 * Used once, animated, in the landing hero, and again (unanimated,
 * literal uptime data) in the Super Admin platform-health chart.
 */
export default function PulseLine({ stroke = C.teal, height = 60, animated = false, width = "100%" }) {
  return (
    <svg viewBox="0 0 600 60" width={width} height={height} preserveAspectRatio="none">
      <path
        d="M0,30 L120,30 L145,30 L160,8 L180,52 L200,16 L215,30 L260,30 L280,30 L300,30 L320,10 L340,50 L360,30 L600,30"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? "pulse-path" : ""}
      />
    </svg>
  );
}
