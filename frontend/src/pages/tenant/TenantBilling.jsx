import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { C } from "../../styles/tokens";
import Card from "../../components/ui/Card";
import { Th, Td } from "../../components/ui/Table";
import Badge, { statusTone } from "../../components/ui/Badge";
import { visitTrend, invoices } from "../../data/mockData";

export default function TenantBilling() {
  return (
    <div className="space-y-6">
      <Card title="Revenue trend (7 days)">
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={visitTrend}>
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.amber} stopOpacity={0.4} />
                <stop offset="100%" stopColor={C.amber} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={C.line} />
            <XAxis dataKey="d" tick={{ fontSize: 11, fill: C.slateSoft }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="v" stroke={C.amber} strokeWidth={2} fill="url(#revFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
      <Card title="Invoices">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: C.line }}>
              <Th>Invoice</Th><Th>Patient</Th><Th>Amount</Th><Th>Type</Th><Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((i) => (
              <tr key={i.id} className="border-b last:border-0" style={{ borderColor: C.line }}>
                <Td mono>{i.id}</Td><Td>{i.patient}</Td><Td>{i.amount}</Td><Td>{i.type}</Td>
                <Td><Badge tone={statusTone(i.status)}>{i.status}</Badge></Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
