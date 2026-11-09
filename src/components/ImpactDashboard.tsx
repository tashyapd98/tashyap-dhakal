import React from 'react';
import { IMPACT_METRICS } from '../data/mockData';
import { TrendingUp, Users, HeartHandshake, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ImpactDashboard: React.FC = () => {
  const growthStages = [
    {
      stage: 'Stage 1: Pilot (Current)',
      suburbs: 'Enfield & Prospect',
      target: '100 Households',
      status: 'Active Validation',
      keyMilestones: [
        'Establish single collection point at Enfield Community Centre.',
        'Validate unit economics: test if 6% service fee ($600/cycle) covers depot rent & chilled transport.',
        'Benchmark actual weekly grocery receipts against Coles/Woolworths.',
        'Form partnership with Enfield Community Food Pantry for pay-it-forward crates.'
      ]
    },
    {
      stage: 'Stage 2: Northern Cluster',
      suburbs: 'Salisbury, Mawson Lakes & Port Adelaide',
      target: '400–600 Households',
      status: 'Targeted Q2',
      keyMilestones: [
        'Replicate depot model in high-density student and family corridors.',
        'Introduce route-optimised shared refrigerated cross-docking.',
        'Launch volunteer rebate credit (1 hour packing = $15 Crate Credit).',
        'Direct procurement agreements with 6 additional Adelaide Plains growers.'
      ]
    },
    {
      stage: 'Stage 3: South Australian Network',
      suburbs: 'Greater Adelaide & Regional SA',
      target: '2,000+ Households',
      status: 'Planned',
      keyMilestones: [
        'Decentralised suburb crews running independent local collection nodes.',
        'Shared open-source ordering and escrow platform.',
        'Bulk pantry staples line (SA olive oil, flour, oats, pulses, legumes).',
        'Community cooperative governance board with elected member representatives.'
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            Community &amp; Social Enterprise Impact
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">
            Transparent accountability for people, producers and planet.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            As an emerging social enterprise, Crate Mates reinvests 100% of operational surpluses into lowering food costs, expanding into underserved Adelaide suburbs, and funding solidarity crates for neighbours in crisis.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 tabular-nums mb-1">
              ${IMPACT_METRICS.dollarsKeptInSA.toLocaleString()}
            </div>
            <div className="text-xs font-bold text-stone-900 mb-1">Kept in South Australia</div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Paid straight to regional growers and local depot workers instead of interstate corporate offices.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 tabular-nums mb-1">
              ${IMPACT_METRICS.averageHouseholdAnnualSavings.toLocaleString()}
            </div>
            <div className="text-xs font-bold text-stone-900 mb-1">Avg Household Annual Savings</div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Estimated money returned to family budgets across our pilot participant cohort.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900 tabular-nums mb-1">
              {IMPACT_METRICS.co2KgsPrevented.toLocaleString()} kg
            </div>
            <div className="text-xs font-bold text-stone-900 mb-1">Freight CO₂ Emissions Slashed</div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Eliminating thousands of interstate transport kilometres and single-use plastic produce bags.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-900 tabular-nums mb-1">
              {IMPACT_METRICS.payItForwardCratesDistributed} Crates
            </div>
            <div className="text-xs font-bold text-stone-900 mb-1">Pay-It-Forward Delivered</div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Given discreetly through the Enfield Community Centre to local families experiencing sudden financial strain.
            </p>
          </div>
        </div>

        {/* Growth Strategy Roadmap */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Strategic Expansion Model
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              From Enfield pilot to South Australian community network
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              We grow in disciplined, cluster-based stages to ensure supply chain reliability, volunteer sustainability, and break-even unit economics before scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthStages.map((stg, i) => (
              <div
                key={i}
                className="bg-stone-50 border border-stone-200 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-stone-900">{stg.stage}</span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-sm ${
                      i === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {stg.status}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-emerald-800 mb-1">
                    {stg.suburbs}
                  </div>
                  <div className="text-xs text-stone-500 mb-4">
                    Scale: {stg.target}
                  </div>

                  <div className="space-y-2 border-t border-stone-200 pt-3">
                    {stg.keyMilestones.map((ms, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">{ms}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
