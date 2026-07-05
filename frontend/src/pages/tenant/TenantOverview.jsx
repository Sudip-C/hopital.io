import React from "react";
import { Calendar, ClipboardList, Building2, DollarSign, HeartPulse } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { C } from "../../styles/tokens";
import StatCard from "../../components/ui/StatCard";
import Card from "../../components/ui/Card";
import { visitTrend, deptLoad } from "../../data/mockData";

export default function TenantOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Appointments today" value="24" delta="+4 vs yesterday" icon={Calendar} />
        <StatCard label="Admissions today" value="7" delta="+1 vs yesterday" icon={ClipboardList} />
        <StatCard label="Bed occupancy" value="82%" delta="6 beds free" deltaTone="coral" icon={Building2} />
        <StatCard label="Revenue (MTD)" value="₹14.8L" delta="+9.2% vs last month" icon={DollarSign} />
      </div>

      <Card title="Patient flow this week" action={<HeartPulse size={15} color={C.slateSoft} />}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={visitTrend}>
            <defs>
              <linearGradient id="visitFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.teal} stopOpacity={0.35} />
                <stop offset="100%" stopColor={C.teal} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={C.line} />
            <XAxis dataKey="d" tick={{ fontSize: 12, fill: C.slateSoft }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: C.slateSoft }} axisLine={false} tickLine={false} width={28} />
            <Tooltip />
            <Area type="monotone" dataKey="v" stroke={C.teal} strokeWidth={2} fill="url(#visitFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Department load today">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={deptLoad}>
              <CartesianGrid vertical={false} stroke={C.line} />
              <XAxis dataKey="d" tick={{ fontSize: 11, fill: C.slateSoft }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: C.slateSoft }} axisLine={false} tickLine={false} width={24} />
              <Tooltip />
              <Bar dataKey="v" fill={C.teal} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card title="Recent activity">
          <ul className="space-y-4">
            {[
              ["Ananya Sharma admitted to Cardiology", "12 min ago"],
              ["Invoice INV-2292 marked pending", "44 min ago"],
              ["Dr. Iyer completed surgery — OT 2", "1 hr ago"],
              ["New appointment booked — Dermatology", "2 hr ago"],
            ].map(([t, when]) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: C.teal }} />
                <div className="flex-1">
                  <p style={{ color: C.slate }}>{t}</p>
                  <p className="text-xs mt-0.5" style={{ color: C.slateSoft }}>{when}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
