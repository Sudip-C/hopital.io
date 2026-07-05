import React from "react";
import { C } from "../../styles/tokens";
import Card from "../../components/ui/Card";
import Badge, { statusTone } from "../../components/ui/Badge";
import { doctors } from "../../data/mockData";

export default function TenantDoctors() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {doctors.map((d) => (
        <Card key={d.name}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full flex items-center justify-center font-semibold" style={{ backgroundColor: C.tealSoft, color: C.teal }}>
              {d.name.split(" ").map((n) => n[0]).slice(-2).join("")}
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: C.ink }}>{d.name}</p>
              <p className="text-xs" style={{ color: C.slateSoft }}>{d.dept}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span style={{ color: C.slateSoft }}>{d.patients} patients</span>
            <Badge tone={statusTone(d.status)}>{d.status}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
