import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { C } from "../../styles/tokens";
import Card from "../../components/ui/Card";

const FIELDS = [
  ["Hospital name", "Riverside General Hospital"],
  ["Subdomain", "riverside.vitalis.app"],
  ["Timezone", "Asia/Kolkata (GMT+5:30)"],
  ["Current plan", "Hospital Network"],
];

export default function TenantSettings() {
  const [saved, setSaved] = useState(false);
  return (
    <Card title="Hospital profile">
      <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
        {FIELDS.map(([label, val]) => (
          <label key={label} className="text-sm">
            <span className="block mb-1.5 font-medium" style={{ color: C.slate }}>{label}</span>
            <input defaultValue={val} className="w-full px-3 py-2 rounded-lg border outline-none text-sm" style={{ borderColor: C.line }} />
          </label>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button onClick={() => setSaved(true)} className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: C.teal }}>
          Save changes
        </button>
        {saved && (
          <span className="text-sm inline-flex items-center gap-1.5" style={{ color: C.teal }}>
            <CheckCircle2 size={15} /> Saved
          </span>
        )}
      </div>
    </Card>
  );
}
