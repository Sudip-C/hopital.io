import React from "react";
import { C } from "../../styles/tokens";

export default function Card({ title, action, children, dark }) {
  return (
    <div
      className="rounded-2xl border p-6"
      style={{ backgroundColor: dark ? "#0F3D3E" : C.paper, borderColor: dark ? "#1E5654" : C.line }}
    >
      {title && (
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-sm" style={{ color: dark ? "white" : C.ink }}>{title}</h3>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}
