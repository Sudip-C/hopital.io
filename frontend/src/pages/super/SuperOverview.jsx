import React from "react";
import { Building2, Users, DollarSign, Server, HeartPulse } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { C } from "../../styles/tokens";
import StatCard from "../../components/ui/StatCard";
import Card from "../../components/ui/Card";
import { uptimeData, tenantGrowth } from "../../data/mockData";

export default function SuperOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard dark label="Total tenants" value="46" delta="+3 this month" icon={Building2} />
        <StatCard dark label="Patients managed" value="2.14M" delta="+118K this month" icon={Users} />
        <StatCard dark label="Monthly recurring revenue" value="₹8.2L" delta="+9.4% MoM" icon={DollarSign} />
        <StatCard dark label="Platform uptime" value="99.98%" icon={Server} />
      </div>

      <Card dark title="Platform vitals — uptime, last 14 days" action={<HeartPulse size={15} color="#8FB3AE" />}>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={uptimeData}>
            <CartesianGrid vertical={false} stroke="#1E5654" />
            <XAxis dataKey="d" tick={{ fontSize: 10, fill: "#8FB3AE" }} axisLine={false} tickLine={false} />
            <YAxis domain={[99.2, 100]} tick={{ fontSize: 10, fill: "#8FB3AE" }} axisLine={false} tickLine={false} width={36} />
            <Tooltip />
            <Line type="monotone" dataKey="v" stroke={C.amber} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card dark title="Tenant growth (6 months)">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={tenantGrowth}>
            <CartesianGrid vertical={false} stroke="#1E5654" />
            <XAxis dataKey="m" tick={{ fontSize: 11, fill: "#8FB3AE" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#8FB3AE" }} axisLine={false} tickLine={false} width={24} />
            <Tooltip />
            <Bar dataKey="v" fill={C.amber} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
