# Crate Mates – Community Bulk-Buying Grocery Social Enterprise
**Pilot Prototype: Enfield & Prospect, Adelaide, South Australia**

Crate Mates is a community bulk-buying grocery social enterprise prototype designed for Adelaide suburbs. By pooling the purchasing power of approximately 100 local households per fortnightly cycle, Crate Mates negotiates directly with South Australian growers and wholesale producers—slashing supermarket corporate markups, delivering fresh produce within 24–48 hours of harvest, and keeping food affordable for budget-conscious families and share houses.

---

## 1. Project Concept & Strategic Foundations

- **Location:** Enfield and Prospect (City of Port Adelaide Enfield / City of Prospect), Adelaide, SA.
- **Pilot Hub:** Enfield Community Centre Verandah (540 Regency Road, Enfield SA 5085).
- **Core Mission:** Double bottom line—deliver 25–32% savings on everyday fresh grocery staples while paying local South Australian family growers fair farm-gate prices (averaging 82c per dollar vs 25–35c in supermarket chains).
- **Social Enterprise Business Model:**
  - 5–6% transparent service contribution built into crate prices (~$600 per $10,000 pool).
  - $10 one-off joining fee (100% waived for concession, healthcare, and student card holders).
  - Optional $5.00 Pay-It-Forward solidarity contribution to fund emergency produce crates for neighbours in crisis.
  - All operational surpluses reinvested into lowering crate prices and expansion.
- **Trust & Risk Controls:**
  - Dedicated escrow bank account holding member pre-payments.
  - 100% automatic refund guarantee if a fortnightly campaign fails to reach the minimum threshold (100 households).
  - Compliance with SA Health Food Safety Standards (Standard 3.2.2A) and local council food business notification.

---

## 2. Target Personas

### Persona 1: Tanya Brooks (38) – Juggling Parent
- **Profile:** Part-time aged-care worker; partner is an apprentice tradesperson; three school-aged children; rents in Enfield.
- **Pain Points:** Escalating fresh produce costs, quick spoilage from supermarket gas-stored fruit, fear of upfront payments if delivery fails, rigid work and school drop-off schedules.
- **How Crate Mates Solves This:**
  - **Enfield Family Staples Crate ($78)** saves ~$36/week compared to supermarket baskets.
  - 100% Escrow Refund Guarantee eliminates financial risk.
  - 2-minute drive-through QR collection at Enfield Community Centre (morning and late-afternoon pickup windows).

### Persona 2: Jordan Tran (24) – Share-House Planner
- **Profile:** University student & casual barista; lives in a 3-bedroom share house on Prospect Road; irregular income.
- **Pain Points:** Supermarket pack sizes leading to food waste in the fridge, awkward money chasing between roommates, tight budget.
- **How Crate Mates Solves This:**
  - **Prospect Share-House Fresh Box ($44)** portioned for 2–3 flatmates without waste.
  - **Shared Roommate Wallet:** Flatmates each pay their $14.65 share directly via the app before the order locks.
  - Zero lock-in contract; ability to pause during uni holidays.

---

## 3. Technology Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";`)
- **Icons:** Lucide React
- **Build Tool:** Vite 6 / 8 with subfolder base path support
- **Hosting / CI/CD:** GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated deployment to GitHub Pages

---

## 4. Local Development Setup

To run this prototype locally on your computer:

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/crate-mates.git
cd crate-mates

# 2. Install dependencies
npm install

# 3. Start the local development server (port 3000)
npm run dev

# 4. Open in browser
http://localhost:3000/
```

### Production Build & GitHub Pages Deployment

To build the static site for GitHub Pages in a subfolder:

```bash
# Set your repo name as base path if needed
VITE_BASE_PATH="/crate-mates/" npm run build
```

When you push code to your `main` branch on GitHub, the automated GitHub Actions workflow (`.github/workflows/deploy.yml`) runs `npm install --legacy-peer-deps` and publishes `dist/` directly to your GitHub Pages site at `https://<your-username>.github.io/<repo-name>/`.

---

## 5. Folder Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── assets/
│   │   └── images/             # Farm, grower, bundle & depot photography
│   ├── components/
│   │   ├── Navbar.tsx          # 3-zone clean top bar navigation
│   │   ├── Hero.tsx            # Campaign focal point & live pool widget
│   │   ├── SavingsCalculator.tsx # Interactive household savings & 6% price breakdown
│   │   ├── HowItWorks.tsx      # 4-step workflow, trust controls & escrow policy
│   │   ├── LiveCampaigns.tsx   # Fortnightly pool tracker & pledge simulator
│   │   ├── CrateBundles.tsx    # Produce bundles with itemized SA origin slips
│   │   ├── MeetGrowers.tsx     # SA grower profiles & 78km food miles breakdown
│   │   ├── ImpactDashboard.tsx # Social metrics & 3-stage expansion roadmap
│   │   ├── MemberHub.tsx       # Crate credit, roommate wallet & QR pickup pass
│   │   ├── AssignmentPlanView.tsx # University academic rubric checklist & HD guide
│   │   └── Footer.tsx          # Acknowledgment of Kaurna country & pilot info
│   ├── data/
│   │   └── mockData.ts         # SA growers, crate items, campaign stats & personas
│   ├── types.ts                # TypeScript interfaces and domain models
│   ├── App.tsx                 # Root application state & navigation router
│   ├── index.css               # Global typography & Tailwind CSS styles
│   └── main.tsx                # React root mount
├── index.html                  # HTML entry point with SEO metadata
├── metadata.json               # AI Studio application metadata
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration with subfolder base path
```

---

## 6. University Rubric & Academic Integrity Notice

- **Australian English (en-AU):** Standard Australian spelling is maintained throughout (e.g., *organisations*, *programmes*, *prioritise*, *kilometres*, *concession card*, *fortnightly*).
- **Distinction Between Proven Facts and Hypotheses:**
  - **Established Facts:** Enfield & Prospect geography, 100-household pilot cohort target, 5–6% social enterprise margin structure, SA health standard requirements.
  - **Hypotheses Requiring Pilot Validation:** Actual weekly price differential against Coles/Woolies (requires physical receipt audit), grower minimum order quantities (MOQs), and whether $600 covers variable transport plus depot hire.
- **Academic Strategy:** Review the integrated **Assignment Guide** tab in the running application for the full rubric mapping and step-by-step High Distinction writing breakdown.
