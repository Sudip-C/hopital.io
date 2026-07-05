import React from "react";
import { Plus } from "lucide-react";
import { C } from "../../styles/tokens";
import Card from "../../components/ui/Card";
import { Th, Td } from "../../components/ui/Table";
import Badge, { statusTone } from "../../components/ui/Badge";
import { appointments } from "../../data/mockData";

export default function TenantAppointments() {
  return (
    <Card
      title="Appointments"
      action={
        <button className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: C.teal }}>
          <Plus size={14} /> New appointment
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: C.line }}>
              <Th>Patient</Th><Th>Doctor</Th><Th>Department</Th><Th>Time</Th><Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr key={i} className="border-b last:border-0" style={{ borderColor: C.line }}>
                <Td>{a.patient}</Td><Td>{a.doctor}</Td><Td>{a.dept}</Td><Td>{a.time}</Td>
                <Td><Badge tone={statusTone(a.status)}>{a.status}</Badge></Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
