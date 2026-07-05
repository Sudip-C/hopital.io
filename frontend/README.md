# Vitalis — Multi-Tenant Hospital Management System

A landing page, hospital admin dashboard, and a separate super admin
(platform) portal, built with React + Tailwind CSS + Vite.

## Structure

```
src/
  main.jsx                 entry point
  App.jsx                  top-level screen switcher (landing / tenant / super)
  styles/
    tokens.js               color tokens — edit these to re-theme the app
    index.css               Tailwind directives, fonts, keyframes
  components/
    ui/                      Badge, Card, StatCard, Table, SearchBox, PulseLine
    layout/
      Shell.jsx              shared sidebar + topbar shell for both dashboards
  data/
    mockData.js              all mock/demo data in one place — replace with API calls
  pages/
    Landing.jsx              marketing / landing page
    tenant/                  hospital admin dashboard (light theme)
      TenantAdminApp.jsx     tab router + sidebar nav
      TenantOverview.jsx
      TenantPatients.jsx
      TenantAppointments.jsx
      TenantDoctors.jsx
      TenantBilling.jsx
      TenantSettings.jsx
    super/                   super admin / platform portal (dark theme)
      SuperAdminApp.jsx      tab router + sidebar nav
      SuperOverview.jsx
      SuperTenants.jsx       suspend/activate tenant hospitals
      SuperHealth.jsx
```

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. Click through from the landing page:
"Hospital sign in" / "Get started" → tenant admin dashboard.
Footer → "Platform admin portal" → super admin portal.

## Wiring up real data

Everything in `src/data/mockData.js` is placeholder. Replace each export
with a fetch/React Query call and the pages will keep working unchanged,
since components only read the shape of that data (arrays of objects),
not where it comes from.

## Theming

All colors live in `src/styles/tokens.js`. Change a hex there and it
updates across landing, tenant admin, and super admin.
