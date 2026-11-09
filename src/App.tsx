/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavigationTab, CrateBundle } from './types';
import { CURRENT_CAMPAIGN } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SavingsCalculator } from './components/SavingsCalculator';
import { HowItWorks } from './components/HowItWorks';
import { LiveCampaigns } from './components/LiveCampaigns';
import { CrateBundles } from './components/CrateBundles';
import { MeetGrowers } from './components/MeetGrowers';
import { ImpactDashboard } from './components/ImpactDashboard';
import { MemberHub } from './components/MemberHub';
import { AssignmentPlanView } from './components/AssignmentPlanView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [pledgedHouseholds, setPledgedHouseholds] = useState<number>(CURRENT_CAMPAIGN.householdsPledged);

  const handlePledgeMore = (count: number) => {
    setPledgedHouseholds((prev) => Math.min(prev + count, 100));
  };

  const handleSelectBundle = (bundle: CrateBundle) => {
    // Switch to campaigns tab to pledge for this bundle
    setCurrentTab('campaigns');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Academic Banner */}
      <aside aria-label="Academic notice" className="bg-emerald-950 text-emerald-100 px-4 py-2 text-xs border-b border-emerald-900 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-amber-300">University Startup Prototype:</span>
          <span>Crate Mates – Community bulk-buying social enterprise for Enfield &amp; Prospect (Adelaide, SA)</span>
        </div>
        <button
          onClick={() => handleNavigate('academic-plan')}
          className="text-amber-300 hover:text-white underline font-medium text-xs transition-colors"
        >
          View Step 1 Analysis, Rubric Checklist &amp; HD Criteria &rarr;
        </button>
      </aside>

      {/* Main Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleNavigate}
        pledgedHouseholds={pledgedHouseholds}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <Hero
              onSelectTab={handleNavigate}
              pledgedHouseholds={pledgedHouseholds}
            />
            <SavingsCalculator />
            <LiveCampaigns
              pledgedHouseholds={pledgedHouseholds}
              onPledgeMore={handlePledgeMore}
            />
            <HowItWorks />
            <CrateBundles onSelectBundle={handleSelectBundle} />
            <MeetGrowers />
            <ImpactDashboard />
          </>
        )}

        {currentTab === 'how-it-works' && (
          <HowItWorks />
        )}

        {currentTab === 'campaigns' && (
          <LiveCampaigns
            pledgedHouseholds={pledgedHouseholds}
            onPledgeMore={handlePledgeMore}
          />
        )}

        {currentTab === 'bundles' && (
          <CrateBundles onSelectBundle={handleSelectBundle} />
        )}

        {currentTab === 'growers' && (
          <MeetGrowers />
        )}

        {currentTab === 'impact' && (
          <ImpactDashboard />
        )}

        {currentTab === 'member-hub' && (
          <MemberHub />
        )}

        {currentTab === 'academic-plan' && (
          <AssignmentPlanView />
        )}
      </main>

      {/* Site Footer */}
      <Footer onSelectTab={handleNavigate} />
    </div>
  );
}
