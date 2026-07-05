import React, { useState, useMemo } from "react";
import {
  Building2, Users, Calendar, Stethoscope, CreditCard, Settings, Shield,
  TrendingUp, Activity, DollarSign, Search, Bell, LogOut, ChevronRight,
  ArrowRight, CheckCircle2, AlertTriangle, MoreHorizontal, Menu, X, Globe,
  UserCog, FileText, Plus, PlayCircle, PauseCircle, Eye, ShieldCheck,
  LayoutDashboard, ClipboardList, HeartPulse, Server
} from "lucide-react";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

/* ---------------------------------------------------------
   DESIGN TOKENS
--------------------------------------------------------- */
const C = {
  ink: "#0F3D3E",       // deep teal — dark surfaces
  inkSoft: "#154C4A",
  teal: "#1C6E68",      // primary action
  tealSoft: "#E4EFEC",  // primary tint
  mist: "#F5F7F5",      // page background
  paper: "#FFFFFF",
  amber: "#E8A33D",
  amberSoft: "#FBEEDA",
  coral: "#D9685C",
  coralSoft: "#F9E7E4",
  slate: "#26312E",
  slateSoft: "#6B7A75",
  line: "#E4E9E6",
};

const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Fraunces', serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-mono { font-family: 'IBM Plex Mono', monospace; }
    @keyframes dashmove { to { stroke-dashoffset: -1000; } }
    .pulse-path { stroke-dasharray: 6 6; animation: dashmove 40s linear infinite; }
    @media (prefers-reduced-motion: reduce) { .pulse-path { animation: none; } }
  `}</style>
);

/* ---------------------------------------------------------
   SIGNATURE ELEMENT: pulse / vitals line
--------------------------------------------------------- */
function PulseLine({ stroke = C.teal, height = 60, animated = false, width = "100%" }) {
  return (
    <svg viewBox="0 0 600 60" width={width} height={height} preserveAspectRatio="none">
      <path
        d="M0,30 L120,30 L145,30 L160,8 L180,52 L200,16 L215,30 L260,30 L280,30 L300,30 L320,10 L340,50 L360,30 L600,30"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? "pulse-path" : ""}
      />
    </svg>
  );
}

function Badge({ tone = "teal", children }) {
  const map = {
    teal: { bg: C.tealSoft, fg: C.teal },
    amber: { bg: C.amberSoft, fg: "#9A6412" },
    coral: { bg: C.coralSoft, fg: C.coral },
    slate: { bg: "#EEF1F0", fg: C.slateSoft },
  };
  const t = map[tone] || map.teal;
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-body"
      style={{ backgroundColor: t.bg, color: t.fg }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.fg }} />
      {children}
    </span>
  );
}

/* ===========================================================
   LANDING PAGE
=========================================================== */
function Landing({ goto }) {
  const [mobileNav, setMobileNav] = useState(false);

  const features = [
    { icon: Users, title: "Unified patient records", body: "One chart per patient, visible across every location they visit in your network — no faxing files between sites." },
    { icon: Calendar, title: "Scheduling & bed management", body: "Book appointments, allocate beds, and see load across departments in real time." },
    { icon: UserCog, title: "Role-based staff access", body: "Doctors, nurses, front-desk and billing each see exactly what their role needs, nothing more." },
    { icon: CreditCard, title: "Consolidated billing", body: "Insurance claims and self-pay invoices, reconciled across all your facilities in one ledger." },
    { icon: TrendingUp, title: "Network-wide analytics", body: "Compare occupancy, revenue and staffing load across every hospital you run, side by side." },
    { icon: ShieldCheck, title: "Compliance-ready audit trails", body: "Every record access and edit is logged, timestamped, and exportable for review." },
  ];

  const tiers = [
    { name: "Single Clinic", price: "$149", period: "/month", desc: "For one location getting off spreadsheets.", features: ["Up to 15 staff accounts", "Patient records & scheduling", "Basic billing", "Email support"], cta: "Start free trial" },
    { name: "Hospital Network", price: "$549", period: "/month", desc: "For groups running multiple facilities.", features: ["Unlimited staff accounts", "Cross-location records", "Consolidated billing & claims", "Network analytics", "Priority support"], cta: "Start free trial", featured: true },
    { name: "Enterprise", price: "Custom", period: "", desc: "For large or regulated health systems.", features: ["Dedicated tenant infrastructure", "Custom compliance workflows", "SSO & SCIM", "Uptime SLA + account manager"], cta: "Talk to sales" },
  ];

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: C.mist, color: C.slate }}>
      <FontStyles />

      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur border-b" style={{ backgroundColor: "rgba(245,247,245,0.9)", borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: C.ink }}>
              <Activity size={17} color="white" />
            </div>
            <span className="font-display text-lg tracking-tight" style={{ color: C.ink }}>Vitalis</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: C.slateSoft }}>
            <a href="#features" className="hover:opacity-70">Product</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#security" className="hover:opacity-70">Security</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => goto("tenant")} className="text-sm font-medium px-4 py-2 rounded-lg transition hover:opacity-80" style={{ color: C.ink }}>
              Hospital sign in
            </button>
            <button onClick={() => goto("tenant")} className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition hover:opacity-90" style={{ backgroundColor: C.teal }}>
              Get started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileNav && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium" style={{ color: C.slateSoft }}>
            <a href="#features">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#security">Security</a>
            <button onClick={() => goto("tenant")} className="text-left font-semibold" style={{ color: C.teal }}>Hospital sign in →</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8" style={{ backgroundColor: C.tealSoft, color: C.teal }}>
          <Building2 size={13} /> Built for hospital groups, not single storefronts
        </div>
        <h1 className="font-display leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: C.ink }}>
          One system. Every hospital<br className="hidden md:block" /> in your network.
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-base md:text-lg" style={{ color: C.slateSoft }}>
          Scheduling, records, billing and staff access for every location you run —
          with a single control tower for the whole organization.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={() => goto("tenant")} className="px-6 py-3 rounded-lg text-white font-semibold text-sm inline-flex items-center gap-2 transition hover:opacity-90" style={{ backgroundColor: C.ink }}>
            Start free trial <ArrowRight size={16} />
          </button>
          <button className="px-6 py-3 rounded-lg font-semibold text-sm border transition hover:bg-white" style={{ borderColor: C.line, color: C.ink }}>
            Book a demo
          </button>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <PulseLine stroke={C.teal} animated height={70} />
          <p className="text-xs uppercase tracking-widest mt-2" style={{ color: C.slateSoft }}>Live across every tenant, every hour of every day</p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["46", "hospital groups onboard"],
            ["2.1M", "patient records managed"],
            ["99.98%", "platform uptime"],
            ["11", "countries"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl" style={{ color: C.ink }}>{n}</div>
              <div className="text-xs mt-1" style={{ color: C.slateSoft }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-lg mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.teal }}>What's inside</span>
          <h2 className="font-display text-3xl mt-3" style={{ color: C.ink }}>Everything a multi-location hospital needs to run as one</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border" style={{ backgroundColor: C.paper, borderColor: C.line }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: C.tealSoft }}>
                <f.icon size={18} color={C.teal} />
              </div>
              <h3 className="font-semibold text-base mb-1.5" style={{ color: C.ink }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.slateSoft }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-lg mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.teal }}>Pricing</span>
          <h2 className="font-display text-3xl mt-3" style={{ color: C.ink }}>Priced by how many doors you run</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-8 border flex flex-col h-full"
              style={{
                backgroundColor: t.featured ? C.ink : C.paper,
                borderColor: t.featured ? C.ink : C.line,
                color: t.featured ? "white" : C.slate,
              }}
            >
              <h3 className="font-semibold text-sm uppercase tracking-wide" style={{ color: t.featured ? C.amber : C.teal }}>{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl">{t.price}</span>
                <span className="text-sm" style={{ color: t.featured ? "#B9CFCB" : C.slateSoft }}>{t.period}</span>
              </div>
              <p className="text-sm mt-3" style={{ color: t.featured ? "#B9CFCB" : C.slateSoft }}>{t.desc}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((ft) => (
                  <li key={ft} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" color={t.featured ? C.amber : C.teal} />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => goto("tenant")}
                className="mt-8 w-full py-2.5 rounded-lg text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: t.featured ? "white" : C.ink, color: t.featured ? C.ink : "white" }}
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY STRIP */}
      <section id="security" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl p-10 grid md:grid-cols-2 gap-8 items-center" style={{ backgroundColor: C.tealSoft }}>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.teal }}>Security & governance</span>
            <h2 className="font-display text-2xl mt-3" style={{ color: C.ink }}>Every tenant is isolated. Every action is logged.</h2>
            <p className="text-sm mt-3" style={{ color: C.slateSoft }}>Data for each hospital is kept separate at the tenant level, with role-based access and a full audit trail for every record touched.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Tenant data isolation", "Role-based access", "Full audit logs", "Encrypted at rest"].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white" style={{ color: C.ink }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.ink, color: "#B9CFCB" }}>
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Activity size={16} color="white" />
              <span className="font-display text-white">Vitalis</span>
            </div>
            <p className="text-xs">Hospital management, built for networks.</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Product</h4>
            <ul className="text-xs space-y-2"><li>Features</li><li>Pricing</li><li>Security</li></ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
            <ul className="text-xs space-y-2"><li>About</li><li>Careers</li><li>Contact</li></ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Operations</h4>
            <button onClick={() => goto("super")} className="text-xs inline-flex items-center gap-1.5 hover:text-white">
              <Shield size={12} /> Platform admin portal <ChevronRight size={12} />
            </button>
          </div>
        </div>
        <div className="border-t px-6 py-5 text-center text-xs" style={{ borderColor: "#1E5654" }}>
          © 2026 Vitalis Health Systems. This is a product demo.
        </div>
      </footer>
    </div>
  );
}

/* ===========================================================
   SHARED DASHBOARD SHELL
=========================================================== */
function Shell({ dark, brand, brandIcon: BrandIcon, navItems, active, setActive, onExit, topRight, children }) {
  return (
    <div className="min-h-screen flex font-body" style={{ backgroundColor: dark ? "#0B2C2D" : C.mist, color: dark ? "#E7EFED" : C.slate }}>
      <FontStyles />
      {/* SIDEBAR */}
      <aside className="w-60 shrink-0 flex flex-col border-r" style={{ backgroundColor: dark ? C.ink : C.paper, borderColor: dark ? "#1E5654" : C.line }}>
        <div className="h-16 flex items-center gap-2.5 px-5 border-b" style={{ borderColor: dark ? "#1E5654" : C.line }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: dark ? C.amber : C.ink }}>
            <BrandIcon size={16} color={dark ? C.ink : "white"} />
          </div>
          <div>
            <div className="font-display text-sm leading-none" style={{ color: dark ? "white" : C.ink }}>{brand}</div>
            <div className="text-[10px] mt-0.5" style={{ color: dark ? "#8FB3AE" : C.slateSoft }}>{dark ? "Platform control" : "Tenant workspace"}</div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition"
                style={{
                  backgroundColor: isActive ? (dark ? "#154C4A" : C.tealSoft) : "transparent",
                  color: isActive ? (dark ? C.amber : C.teal) : (dark ? "#B9CFCB" : C.slateSoft),
                }}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="p-3 border-t" style={{ borderColor: dark ? "#1E5654" : C.line }}>
          <button onClick={onExit} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition hover:opacity-80" style={{ color: dark ? "#B9CFCB" : C.slateSoft }}>
            <LogOut size={16} /> Exit to site
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-8 border-b" style={{ backgroundColor: dark ? "#0F3D3E" : C.paper, borderColor: dark ? "#1E5654" : C.line }}>
          <div className="flex items-center gap-2 text-sm" style={{ color: dark ? "#8FB3AE" : C.slateSoft }}>
            <span>{dark ? "Platform" : "Riverside General Hospital"}</span>
            <ChevronRight size={14} />
            <span className="font-semibold" style={{ color: dark ? "white" : C.ink }}>
              {navItems.find((n) => n.key === active)?.label}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {topRight}
            <Bell size={17} style={{ color: dark ? "#B9CFCB" : C.slateSoft }} />
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: dark ? C.amber : C.tealSoft, color: dark ? C.ink : C.teal }}>
              {dark ? "SA" : "RH"}
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}

function StatCard({ label, value, delta, deltaTone = "teal", icon: Icon, dark }) {
  return (
    <div className="p-5 rounded-2xl border" style={{ backgroundColor: dark ? "#0F3D3E" : C.paper, borderColor: dark ? "#1E5654" : C.line }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium" style={{ color: dark ? "#8FB3AE" : C.slateSoft }}>{label}</span>
        <Icon size={15} style={{ color: dark ? "#8FB3AE" : C.slateSoft }} />
      </div>
      <div className="font-display text-2xl" style={{ color: dark ? "white" : C.ink }}>{value}</div>
      {delta && (
        <div className="text-xs mt-1.5 font-medium" style={{ color: deltaTone === "coral" ? C.coral : C.teal }}>{delta}</div>
      )}
    </div>
  );
}

function Card({ title, action, children, dark }) {
  return (
    <div className="rounded-2xl border p-6" style={{ backgroundColor: dark ? "#0F3D3E" : C.paper, borderColor: dark ? "#1E5654" : C.line }}>
      {title && (
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-sm" style={{ color: dark ? "white" : C.ink }}>{title}</h3>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

function Th({ children }) {
  return <th className="text-left font-medium px-4 py-2.5 whitespace-nowrap" style={{ color: C.slateSoft }}>{children}</th>;
}
function Td({ children, mono }) {
  return <td className={`px-4 py-3 whitespace-nowrap ${mono ? "font-mono text-xs" : ""}`} style={{ color: C.slate }}>{children}</td>;
}

/* ===========================================================
   TENANT ADMIN DASHBOARD
=========================================================== */
const visitTrend = [
  { d: "Mon", v: 62 }, { d: "Tue", v: 78 }, { d: "Wed", v: 71 }, { d: "Thu", v: 88 },
  { d: "Fri", v: 95 }, { d: "Sat", v: 54 }, { d: "Sun", v: 41 },
];
const deptLoad = [
  { d: "ER", v: 42 }, { d: "Cardio", v: 28 }, { d: "Peds", v: 19 }, { d: "Ortho", v: 24 }, { d: "Radiology", v: 15 },
];
const patients = [
  { id: "P-10231", name: "Ananya Sharma", age: "34 / F", doctor: "Dr. Rao", visit: "Jul 3, 2026", status: "Active" },
  { id: "P-10232", name: "Vikram Nair", age: "58 / M", doctor: "Dr. Iyer", visit: "Jul 2, 2026", status: "Discharged" },
  { id: "P-10233", name: "Meera Das", age: "27 / F", doctor: "Dr. Rao", visit: "Jul 4, 2026", status: "Active" },
  { id: "P-10234", name: "Arjun Mehta", age: "45 / M", doctor: "Dr. Sen", visit: "Jul 1, 2026", status: "Active" },
  { id: "P-10235", name: "Fatima Sheikh", age: "62 / F", doctor: "Dr. Iyer", visit: "Jun 29, 2026", status: "Discharged" },
  { id: "P-10236", name: "Rohan Gupta", age: "8 / M", doctor: "Dr. Bhatt", visit: "Jul 4, 2026", status: "Active" },
];
const appointments = [
  { patient: "Ananya Sharma", doctor: "Dr. Rao", dept: "Cardiology", time: "Today, 10:30 AM", status: "Confirmed" },
  { patient: "Vikram Nair", doctor: "Dr. Iyer", dept: "Orthopedics", time: "Today, 11:15 AM", status: "Confirmed" },
  { patient: "Kavya Menon", doctor: "Dr. Sen", dept: "Dermatology", time: "Today, 1:00 PM", status: "Pending" },
  { patient: "Sameer Khan", doctor: "Dr. Bhatt", dept: "Pediatrics", time: "Today, 2:30 PM", status: "Cancelled" },
  { patient: "Fatima Sheikh", doctor: "Dr. Iyer", dept: "Orthopedics", time: "Tomorrow, 9:00 AM", status: "Confirmed" },
];
const doctors = [
  { name: "Dr. Priya Rao", dept: "Cardiology", patients: 128, status: "Available" },
  { name: "Dr. Suresh Iyer", dept: "Orthopedics", patients: 94, status: "In surgery" },
  { name: "Dr. Neha Sen", dept: "Dermatology", patients: 76, status: "Available" },
  { name: "Dr. Kabir Bhatt", dept: "Pediatrics", patients: 112, status: "Off duty" },
  { name: "Dr. Alok Verma", dept: "Radiology", patients: 65, status: "Available" },
  { name: "Dr. Divya Nair", dept: "ER", patients: 140, status: "Available" },
];
const invoices = [
  { id: "INV-2291", patient: "Ananya Sharma", amount: "₹18,400", type: "Insurance", status: "Paid" },
  { id: "INV-2292", patient: "Vikram Nair", amount: "₹42,000", type: "Insurance", status: "Pending" },
  { id: "INV-2293", patient: "Meera Das", amount: "₹6,200", type: "Self-pay", status: "Paid" },
  { id: "INV-2294", patient: "Arjun Mehta", amount: "₹11,850", type: "Self-pay", status: "Overdue" },
  { id: "INV-2295", patient: "Rohan Gupta", amount: "₹3,400", type: "Insurance", status: "Paid" },
];
const statusTone = (s) => (s === "Active" || s === "Confirmed" || s === "Paid" || s === "Available" ? "teal" : s === "Pending" || s === "Off duty" ? "amber" : s === "Overdue" || s === "Cancelled" ? "coral" : "slate");

function TenantOverview() {
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

function SearchBox({ value, onChange, placeholder }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border w-64" style={{ borderColor: C.line, backgroundColor: C.paper }}>
      <Search size={14} color={C.slateSoft} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-sm outline-none flex-1 bg-transparent"
      />
    </div>
  );
}

function TenantPatients() {
  const [q, setQ] = useState("");
  const rows = patients.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <Card
      title="Patients"
      action={<SearchBox value={q} onChange={setQ} placeholder="Search patients" />}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b" style={{ borderColor: C.line }}>
            <Th>Patient ID</Th><Th>Name</Th><Th>Age / Sex</Th><Th>Assigned doctor</Th><Th>Last visit</Th><Th>Status</Th>
          </tr></thead>
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
        {rows.length === 0 && <p className="text-sm py-6 text-center" style={{ color: C.slateSoft }}>No patients match "{q}".</p>}
      </div>
    </Card>
  );
}

function TenantAppointments() {
  return (
    <Card title="Appointments" action={
      <button className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: C.teal }}>
        <Plus size={14} /> New appointment
      </button>
    }>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b" style={{ borderColor: C.line }}>
            <Th>Patient</Th><Th>Doctor</Th><Th>Department</Th><Th>Time</Th><Th>Status</Th>
          </tr></thead>
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

function TenantDoctors() {
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

function TenantBilling() {
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
          <thead><tr className="border-b" style={{ borderColor: C.line }}>
            <Th>Invoice</Th><Th>Patient</Th><Th>Amount</Th><Th>Type</Th><Th>Status</Th>
          </tr></thead>
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

function TenantSettings() {
  const [saved, setSaved] = useState(false);
  return (
    <Card title="Hospital profile">
      <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
        {[
          ["Hospital name", "Riverside General Hospital"],
          ["Subdomain", "riverside.vitalis.app"],
          ["Timezone", "Asia/Kolkata (GMT+5:30)"],
          ["Current plan", "Hospital Network"],
        ].map(([label, val]) => (
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
        {saved && <span className="text-sm inline-flex items-center gap-1.5" style={{ color: C.teal }}><CheckCircle2 size={15} /> Saved</span>}
      </div>
    </Card>
  );
}

function TenantAdminApp({ onExit }) {
  const [active, setActive] = useState("overview");
  const navItems = [
    { key: "overview", label: "Overview", icon: LayoutDashboard },
    { key: "patients", label: "Patients", icon: Users },
    { key: "appointments", label: "Appointments", icon: Calendar },
    { key: "doctors", label: "Doctors & staff", icon: Stethoscope },
    { key: "billing", label: "Billing", icon: CreditCard },
    { key: "settings", label: "Settings", icon: Settings },
  ];
  return (
    <Shell brand="Vitalis" brandIcon={Activity} navItems={navItems} active={active} setActive={setActive} onExit={onExit}>
      {active === "overview" && <TenantOverview />}
      {active === "patients" && <TenantPatients />}
      {active === "appointments" && <TenantAppointments />}
      {active === "doctors" && <TenantDoctors />}
      {active === "billing" && <TenantBilling />}
      {active === "settings" && <TenantSettings />}
    </Shell>
  );
}

/* ===========================================================
   SUPER ADMIN DASHBOARD
=========================================================== */
const initialTenants = [
  { id: "T-001", name: "Riverside General Hospital", plan: "Hospital Network", status: "Active", patients: "18,400", mrr: "₹45,600", joined: "Jan 2025" },
  { id: "T-002", name: "Sunrise Children's Clinic", plan: "Single Clinic", status: "Active", patients: "2,100", mrr: "₹12,300", joined: "Mar 2025" },
  { id: "T-003", name: "Metro Care Hospitals", plan: "Enterprise", status: "Active", patients: "94,200", mrr: "₹2,80,000", joined: "Aug 2024" },
  { id: "T-004", name: "Green Valley Medical Center", plan: "Hospital Network", status: "Trial", patients: "640", mrr: "₹0", joined: "Jun 2026" },
  { id: "T-005", name: "Lakeside Orthopedic Group", plan: "Single Clinic", status: "Suspended", patients: "3,800", mrr: "₹0", joined: "Nov 2024" },
  { id: "T-006", name: "Northgate Health Network", plan: "Enterprise", status: "Active", patients: "61,500", mrr: "₹1,95,000", joined: "Feb 2024" },
  { id: "T-007", name: "Harborview Maternity Care", plan: "Single Clinic", status: "Active", patients: "1,950", mrr: "₹14,900", joined: "May 2025" },
];

const tenantGrowth = [
  { m: "Feb", v: 32 }, { m: "Mar", v: 35 }, { m: "Apr", v: 38 }, { m: "May", v: 41 }, { m: "Jun", v: 44 }, { m: "Jul", v: 46 },
];
const uptimeData = Array.from({ length: 14 }).map((_, i) => ({
  d: `D${i + 1}`, v: 99.9 + Math.sin(i) * 0.05 + (i === 9 ? -0.4 : 0),
}));
const incidents = [
  { title: "Elevated API latency — EU region", time: "Jun 28, 2026 · 14:02", status: "Resolved" },
  { title: "Scheduled maintenance — billing service", time: "Jun 21, 2026 · 02:00", status: "Resolved" },
  { title: "Brief login delay — 3 tenants affected", time: "Jun 14, 2026 · 09:40", status: "Resolved" },
];

function tenantStatusTone(s) {
  return s === "Active" ? "teal" : s === "Trial" ? "amber" : "coral";
}

function SuperOverview() {
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

function SuperTenants() {
  const [rows, setRows] = useState(initialTenants);
  const [q, setQ] = useState("");
  const filtered = rows.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));

  const toggle = (id) => {
    setRows((prev) => prev.map((t) => (t.id === id ? { ...t, status: t.status === "Suspended" ? "Active" : "Suspended" } : t)));
  };

  return (
    <Card dark title="Tenant hospitals" action={
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border w-64" style={{ borderColor: "#1E5654" }}>
        <Search size={14} color="#8FB3AE" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tenants"
          className="text-sm outline-none flex-1 bg-transparent" style={{ color: "white" }} />
      </div>
    }>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b" style={{ borderColor: "#1E5654" }}>
            {["Hospital", "Plan", "Status", "Patients", "MRR", "Joined", ""].map((h) => (
              <th key={h} className="text-left font-medium px-4 py-2.5 whitespace-nowrap" style={{ color: "#8FB3AE" }}>{h}</th>
            ))}
          </tr></thead>
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
                    <button onClick={() => toggle(t.id)} className="text-xs inline-flex items-center gap-1 hover:opacity-80" style={{ color: t.status === "Suspended" ? C.teal : C.coral }}>
                      {t.status === "Suspended" ? <PlayCircle size={13} /> : <PauseCircle size={13} />}
                      {t.status === "Suspended" ? "Activate" : "Suspend"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="text-sm py-6 text-center" style={{ color: "#8FB3AE" }}>No tenants match "{q}".</p>}
      </div>
    </Card>
  );
}

function SuperHealth() {
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

function SuperAdminApp({ onExit }) {
  const [active, setActive] = useState("overview");
  const navItems = [
    { key: "overview", label: "Overview", icon: LayoutDashboard },
    { key: "tenants", label: "Tenants", icon: Building2 },
    { key: "health", label: "Platform health", icon: Server },
  ];
  return (
    <Shell
      dark
      brand="Vitalis Ops"
      brandIcon={Shield}
      navItems={navItems}
      active={active}
      setActive={setActive}
      onExit={onExit}
      topRight={<Badge tone="amber"><Shield size={11} className="inline -mt-0.5 mr-0.5" />Super admin</Badge>}
    >
      {active === "overview" && <SuperOverview />}
      {active === "tenants" && <SuperTenants />}
      {active === "health" && <SuperHealth />}
    </Shell>
  );
}

/* ===========================================================
   ROOT APP
=========================================================== */
export default function App() {
  const [screen, setScreen] = useState("landing");

  if (screen === "tenant") return <TenantAdminApp onExit={() => setScreen("landing")} />;
  if (screen === "super") return <SuperAdminApp onExit={() => setScreen("landing")} />;
  return <Landing goto={setScreen} />;
}
