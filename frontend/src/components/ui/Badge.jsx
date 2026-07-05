import React from "react";
import { C } from "../../styles/tokens";

const TONE_MAP = {
  teal: { bg: C.tealSoft, fg: C.teal },
  amber: { bg: C.amberSoft, fg: "#9A6412" },
  coral: { bg: C.coralSoft, fg: C.coral },
  slate: { bg: "#EEF1F0", fg: C.slateSoft },
};

export default function Badge({ tone = "teal", children }) {
  const t = TONE_MAP[tone] || TONE_MAP.teal;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-body"
      style={{ backgroundColor: t.bg, color: t.fg }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.fg }} />
      {children}
    </span>
  );
}

// Helpers used across pages to map a status string to a badge tone.
export const statusTone = (s) =>
  s === "Active" || s === "Confirmed" || s === "Paid" || s === "Available" ? "teal"
  : s === "Pending" || s === "Off duty" ? "amber"
  : s === "Overdue" || s === "Cancelled" ? "coral"
  : "slate";

export const tenantStatusTone = (s) => (s === "Active" ? "teal" : s === "Trial" ? "amber" : "coral");
