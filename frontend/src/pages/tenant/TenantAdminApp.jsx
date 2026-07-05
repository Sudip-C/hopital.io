import React, { useState } from "react";
import { LayoutDashboard, Users, Calendar, Stethoscope, CreditCard, Settings, Activity } from "lucide-react";
import Shell from "../../components/layout/Shell";
import TenantOverview from "./TenantOverview";
import TenantPatients from "./TenantPatients";
import TenantAppointments from "./TenantAppointments";
import TenantDoctors from "./TenantDoctors";
import TenantBilling from "./TenantBilling";
import TenantSettings from "./TenantSettings";

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "patients", label: "Patients", icon: Users },
  { key: "appointments", label: "Appointments", icon: Calendar },
  { key: "doctors", label: "Doctors & staff", icon: Stethoscope },
  { key: "billing", label: "Billing", icon: CreditCard },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function TenantAdminApp({ onExit }) {
  const [active, setActive] = useState("overview");
  return (
    <Shell brand="Vitalis" brandIcon={Activity} navItems={NAV_ITEMS} active={active} setActive={setActive} onExit={onExit}>
      {active === "overview" && <TenantOverview />}
      {active === "patients" && <TenantPatients />}
      {active === "appointments" && <TenantAppointments />}
      {active === "doctors" && <TenantDoctors />}
      {active === "billing" && <TenantBilling />}
      {active === "settings" && <TenantSettings />}
    </Shell>
  );
}
