import React, { useState } from "react";
import { LayoutDashboard, Building2, Server, Shield } from "lucide-react";
import Shell from "../../components/layout/Shell";
import Badge from "../../components/ui/Badge";
import SuperOverview from "./SuperOverview";
import SuperTenants from "./SuperTenants";
import SuperHealth from "./SuperHealth";

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "tenants", label: "Tenants", icon: Building2 },
  { key: "health", label: "Platform health", icon: Server },
];

export default function SuperAdminApp({ onExit }) {
  const [active, setActive] = useState("overview");
  return (
    <Shell
      dark
      brand="Vitalis Ops"
      brandIcon={Shield}
      navItems={NAV_ITEMS}
      active={active}
      setActive={setActive}
      onExit={onExit}
      topRight={
        <Badge tone="amber">
          <Shield size={11} className="inline -mt-0.5 mr-0.5" />
          Super admin
        </Badge>
      }
    >
      {active === "overview" && <SuperOverview />}
      {active === "tenants" && <SuperTenants />}
      {active === "health" && <SuperHealth />}
    </Shell>
  );
}
