import React from "react";
import { C } from "../../styles/tokens";

export default function StatCard({ label, value, delta, deltaTone = "teal", icon: Icon, dark }) {
  return (
    <div
      className="p-5 rounded-2xl border"
      style={{ backgroundColor: dark ? "#0F3D3E" : C.paper, borderColor: dark ? "#1E5654" : C.line }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium" style={{ color: dark ? "#8FB3AE" : C.slateSoft }}>{label}</span>
        <Icon size={15} style={{ color: dark ? "#8FB3AE" : C.slateSoft }} />
      </div>
      <div className="font-display text-2xl" style={{ color: dark ? "white" : C.ink }}>{value}</div>
      {delta && (
        <div className="text-xs mt-1.5 font-medium" style={{ color: deltaTone === "coral" ? C.coral : C.teal }}>
          {delta}
        </div>
      )}
    </div>
  );
}
