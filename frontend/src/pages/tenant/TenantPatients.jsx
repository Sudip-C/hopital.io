import React, { useState } from "react";
import { C } from "../../styles/tokens";
import Card from "../../components/ui/Card";
import SearchBox from "../../components/ui/SearchBox";
import { Th, Td } from "../../components/ui/Table";
import Badge, { statusTone } from "../../components/ui/Badge";
import { patients } from "../../data/mockData";

export default function TenantPatients() {
  const [q, setQ] = useState("");
  const rows = patients.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <Card title="Patients" action={<SearchBox value={q} onChange={setQ} placeholder="Search patients" />}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: C.line }}>
              <Th>Patient ID</Th><Th>Name</Th><Th>Age / Sex</Th><Th>Assigned doctor</Th><Th>Last visit</Th><Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-b last:border-0" style={{ borderColor: C.line }}>
                <Td mono>{p.id}</Td>
                <Td>{p.name}</Td>
                <Td>{p.age}</Td>
                <Td>{p.doctor}</Td>
                <Td>{p.visit}</Td>
                <Td><Badge tone={statusTone(p.status)}>{p.status}</Badge></Td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && (
          <p className="text-sm py-6 text-center" style={{ color: C.slateSoft }}>No patients match "{q}".</p>
        )}
      </div>
    </Card>
  );
}
