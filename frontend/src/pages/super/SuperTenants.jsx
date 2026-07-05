import React, { useState } from "react";
import { Search, Eye, PlayCircle, PauseCircle } from "lucide-react";
import { C } from "../../styles/tokens";
import Card from "../../components/ui/Card";
import Badge, { tenantStatusTone } from "../../components/ui/Badge";
import { initialTenants } from "../../data/mockData";

export default function SuperTenants() {
  const [rows, setRows] = useState(initialTenants);
  const [q, setQ] = useState("");
  const filtered = rows.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));

  const toggle = (id) => {
    setRows((prev) => prev.map((t) => (t.id === id ? { ...t, status: t.status === "Suspended" ? "Active" : "Suspended" } : t)));
  };

  return (
    <Card
      dark
      title="Tenant hospitals"
      action={
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border w-64" style={{ borderColor: "#1E5654" }}>
          <Search size={14} color="#8FB3AE" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search tenants"
            className="text-sm outline-none flex-1 bg-transparent"
            style={{ color: "white" }}
          />
        </div>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: "#1E5654" }}>
              {["Hospital", "Plan", "Status", "Patients", "MRR", "Joined", ""].map((h) => (
                <th key={h} className="text-left font-medium px-4 py-2.5 whitespace-nowrap" style={{ color: "#8FB3AE" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b last:border-0" style={{ borderColor: "#1E5654" }}>
                <td className="px-4 py-3 whitespace-nowrap" style={{ color: "white" }}>{t.name}</td>
                <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#B9CFCB" }}>{t.plan}</td>
                <td className="px-4 py-3"><Badge tone={tenantStatusTone(t.status)}>{t.status}</Badge></td>
                <td className="px-4 py-3 font-mono text-xs" style={{ color: "#B9CFCB" }}>{t.patients}</td>
                <td className="px-4 py-3 font-mono text-xs" style={{ color: "#B9CFCB" }}>{t.mrr}</td>
                <td className="px-4 py-3 whitespace-nowrap" style={{ color: "#8FB3AE" }}>{t.joined}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <button className="text-xs inline-flex items-center gap-1 hover:opacity-80" style={{ color: "#8FB3AE" }}>
                      <Eye size={13} /> View
                    </button>
                    <button
                      onClick={() => toggle(t.id)}
                      className="text-xs inline-flex items-center gap-1 hover:opacity-80"
                      style={{ color: t.status === "Suspended" ? C.teal : C.coral }}
                    >
                      {t.status === "Suspended" ? <PlayCircle size={13} /> : <PauseCircle size={13} />}
                      {t.status === "Suspended" ? "Activate" : "Suspend"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-sm py-6 text-center" style={{ color: "#8FB3AE" }}>No tenants match "{q}".</p>
        )}
      </div>
    </Card>
  );
}
