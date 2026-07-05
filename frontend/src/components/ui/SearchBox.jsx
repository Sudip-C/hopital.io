import React from "react";
import { Search } from "lucide-react";
import { C } from "../../styles/tokens";

export default function SearchBox({ value, onChange, placeholder, dark }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg border w-64"
      style={{ borderColor: dark ? "#1E5654" : C.line, backgroundColor: dark ? "transparent" : C.paper }}
    >
      <Search size={14} color={dark ? "#8FB3AE" : C.slateSoft} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-sm outline-none flex-1 bg-transparent"
        style={{ color: dark ? "white" : C.slate }}
      />
    </div>
  );
}
