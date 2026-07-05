import React from "react";
import { AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { C } from "../../styles/tokens";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { uptimeData, incidents } from "../../data/mockData";

export default function SuperHealth() {
  return (
    <div className="space-y-6">
      <Card dark title="Platform vitals — uptime monitor">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={uptimeData}>
            <CartesianGrid vertical={false} stroke="#1E5654" />
            <XAxis dataKey="d" tick={{ fontSize: 10, fill: "#8FB3AE" }} axisLine={false} tickLine={false} />
            <YAxis domain={[99.2, 100]} tick={{ fontSize: 10, fill: "#8FB3AE" }} axisLine={false} tickLine={false} width={36} />
            <Tooltip />
            <Line type="monotone" dataKey="v" stroke={C.amber} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <Card dark title="Incident log">
        <ul className="space-y-4">
          {incidents.map((inc) => (
            <li key={inc.title} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <AlertTriangle size={15} color={C.amber} />
                <div>
                  <p style={{ color: "white" }}>{inc.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8FB3AE" }}>{inc.time}</p>
                </div>
              </div>
              <Badge tone="teal">{inc.status}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
