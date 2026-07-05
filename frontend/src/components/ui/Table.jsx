import React from "react";
import { C } from "../../styles/tokens";

export function Th({ children }) {
  return (
    <th className="text-left font-medium px-4 py-2.5 whitespace-nowrap" style={{ color: C.slateSoft }}>
      {children}
    </th>
  );
}

export function Td({ children, mono }) {
  return (
    <td className={`px-4 py-3 whitespace-nowrap ${mono ? "font-mono text-xs" : ""}`} style={{ color: C.slate }}>
      {children}
    </td>
  );
}
