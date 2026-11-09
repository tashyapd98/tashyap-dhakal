import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  AlertTriangle, 
  Award, 
  FileText, 
  Code, 
  GitBranch, 
  ShieldCheck,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';

export const AssignmentPlanView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('rubric-breakdown');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <section className="py-12 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-amber-900 text-amber-50 rounded-2xl p-6 sm:p-10 mb-10 shadow-sm border border-amber-800">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300 font-bold mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Academic Strategy &amp; University Submission Masterplan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Crate Mates: Step 1 Analysis, Rubric Checklist &amp; HD Criteria
          </h2>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed max-w-3xl">
            This section serves as your strategic academic blueprint. It breaks down standard university marking rubrics for digital business strategy and prototypes, identifies what is proven versus what requires field validation, and provides the complete architecture for achieving High Distinction (85%+).
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-200 pb-4">
          {[
            { id: 'rubric-breakdown', label: '1. Rubric & Requirement Breakdown' },
            { id: 'known-vs-hypotheses', label: '2. Known Facts vs Hypotheses' },
            { id: 'academic-structure', label: '3. Recommended Report Structure' },
            { id: 'hd-standards', label: '4. How to Achieve High Distinction' },
            { id: 'tech-spec', label: '5. Technical Architecture & Git Spec' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeSection === tab.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Rubric Breakdown */}
        {activeSection === 'rubric-breakdown' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>Assignment Requirement &amp; Marking Rubric Checklist</span>
              </h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Most Australian university digital business and entrepreneurship assessments evaluate six core dimensions. Below is the mapped checklist showing where every element is addressed in this submission:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: '1. Strategic Concept & Social Problem (15–20%)',
                    status: 'Complete',
                    points: [
                      'Clear articulation of grocery inflation and supermarket duopoly (Coles/Woolies 65%+ market share).',
                      'Direct producer-to-consumer pooling model without corporate middlemen.',
                      'Geographic boundary defined: Enfield & Prospect pilot (~100 households).',
                      'Double bottom line: household affordability + SA regional grower viability.'
                    ]
                  },
                  {
                    title: '2. Target Customer & Persona Synthesis (15–20%)',
                    status: 'Complete',
                    points: [
                      'Primary persona: Tanya Brooks (38, aged-care parent, family staples, trust & scheduling).',
                      'Secondary persona: Jordan Tran (24, share-house barista/student, budget flexibility, food waste).',
                      'Mapping of distinct behavioural triggers, payment comfort, and pickup friction.',
                      'Future phases: Concession seniors and local community organisations.'
                    ]
                  },
                  {
                    title: '3. Financial Viability & Unit Economics (20–25%)',
                    status: 'Complete',
                    points: [
                      '5–6% social enterprise margin ($600 per $10k pool cycle).',
                      'Breakeven analysis identifying fixed costs (depot rent, insurance) vs variable (refrigerated transit).',
                      'Honest identification of assumptions requiring pilot validation.',
                      'Transparent fee breakdown: 82% grower, 12% logistics, 6% enterprise contribution.'
                    ]
                  },
                  {
                    title: '4. Digital UX & Prototype Quality (20–25%)',
                    status: 'Complete',
                    points: [
                      'Full working responsive web prototype with single-line controls and zero-pill discipline.',
                      'Interactive Savings Calculator with benchmark comparison.',
                      'Cycle #4 Live Campaign progress tracker with escrow refund safety assurance.',
                      'Jordan’s Share-House Roommate Wallet and dynamic pickup QR pass.'
                    ]
                  },
                  {
                    title: '5. Risk Controls & Regulatory Compliance (10–15%)',
                    status: 'Complete',
                    points: [
                      'Escrow bank quarantine: 100% automatic refund if threshold <100 households.',
                      'Food safety governance: SA Health Standard 3.2.2A and Port Adelaide Enfield council registration.',
                      'ACCC supermarket price audit methodology for claims integrity.',
                      'Concession fee waiver policy avoiding regressive financial barriers.'
                    ]
                  },
                  {
                    title: '6. SEO & Customer Acquisition Architecture (10%)',
                    status: 'Complete',
                    points: [
                      'Three-tiered search intent mapping: Informational, Commercial, and Transactional.',
                      'Clear disclaimer: Search keyword volumes framed as testable hypotheses, not fabricated metrics.',
                      'Hyperlocal channel plan: Enfield community flyers, Facebook parent groups, and word-of-mouth.'
                    ]
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {item.status}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Known Facts vs Hypotheses */}
        {activeSection === 'known-vs-hypotheses' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                Concept Facts vs Assumptions Requiring Empirical Field Validation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Markers award the highest grades when students candidly distinguish between established project parameters and unverified business hypotheses.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Available / Established Concept Facts */}
                <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Established Concept Parameters (Given)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-800">1.</span>
                      <span>Target geography: Enfield and Prospect suburbs in Adelaide's inner north.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-800">2.</span>
                      <span>Scale of pilot: Approximately 100 households contributing ~$100 each ($10,000 pool).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-800">3.</span>
                      <span>Revenue model: 5–6% enterprise margin (~$600 per fortnightly pool) + $10 joining fee.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-800">4.</span>
                      <span>Target personas: Tanya Brooks (Parent, Enfield) &amp; Jordan Tran (Share-house student, Prospect).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-800">5.</span>
                      <span>Core risk controls: Dedicated escrow account, threshold refund guarantee, SA food safety compliance.</span>
                    </li>
                  </ul>
                </div>

                {/* Hypotheses Requiring Validation */}
                <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>Hypotheses Requiring University Research &amp; Pilot Validation</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-900">1.</span>
                      <span><strong>Operating Margin Sufficiency:</strong> Does $600 per cycle cover depot lease (e.g. 4 hours at Enfield Community Hall), public liability insurance, and fuel for farm runs?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-900">2.</span>
                      <span><strong>Actual Price Delta:</strong> Claimed 25–32% savings must be verified against actual fortnightly receipt audits of Coles Enfield and Woolworths Prospect.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-900">3.</span>
                      <span><strong>Grower Minimum Order Quantities (MOQs):</strong> Can Adelaide Hills &amp; Virginia growers supply 100-household split crates without charging prohibitive repacking surcharges?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-900">4.</span>
                      <span><strong>Pickup Window Friction:</strong> Will working parents (like Tanya) actually pick up within the 8:00–11:30 AM or 4:30–6:30 PM windows without requesting doorstep delivery?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-900">5.</span>
                      <span><strong>SEO Keyword Search Volumes:</strong> The targeted search keywords must be audited using Google Keyword Planner or SEMrush for SA-specific search volume.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Recommended Academic Report Structure */}
        {activeSection === 'academic-structure' && (
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Recommended Academic Report Structure (For High Distinction)
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Use this professional 7-section structure for your written business plan / digital strategy submission:
            </p>

            <div className="space-y-4 text-xs text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  1. Executive Summary &amp; Value Proposition
                </h4>
                <p>Synthesis of the Crate Mates model, social enterprise mission, Enfield-Prospect pilot scope, double-bottom-line impact, and summary of pilot feasibility testing.</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  2. Problem Statement &amp; Market Context (Adelaide Focus)
                </h4>
                <p>Analysis of supermarket market concentration in Australia (Coles/Woolies oligopoly), cost-of-living pressures on Enfield/Prospect renters and families, and farm-gate margin compression for South Australian regional growers.</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  3. Customer Segments, Personas &amp; Journey Mapping
                </h4>
                <p>In-depth profiles of Tanya Brooks (Parent of 3) and Jordan Tran (Share-house student). Detailed 6-stage user journey (Discover, Calculate, Register, Contribute, Order, Collect &amp; Share) addressing specific pain points and trust barriers.</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  4. Business Model, Unit Economics &amp; Risk Governance
                </h4>
                <p>100-household financial pilot model ($10,000 pool, $600 6% service fee, $10 membership). Detailed breakdown of fixed depot costs vs variable logistics. Trust controls: dedicated escrow account, threshold refund guarantee, and SA Health food standards compliance.</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  5. Digital Strategy &amp; Working Web Prototype
                </h4>
                <p>Interactive web application design (React + Tailwind CSS), mobile-first responsive architecture, savings calculator logic, live pool progress tracking, share-house wallet splitting, and QR code collection pass.</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  6. SEO, Content Marketing &amp; Community Growth Plan
                </h4>
                <p>Three-phase growth strategy (Stage 1 Pilot &rarr; Stage 2 Northern Cluster &rarr; Stage 3 SA Network). Search intent architecture (informational, commercial, transactional) and organic community activation channels.</p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  7. Implementation Roadmap &amp; Empirical Validation Agenda
                </h4>
                <p>Detailed pilot timeline, key performance indicators (retention rate, basket savings verified, volunteer hours), critical assumptions test plan, and post-pilot expansion criteria.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: How to Achieve High Distinction */}
        {activeSection === 'hd-standards' && (
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-700" />
              <span>How Each Section Achieves High Distinction (85%+) Standard</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Markers dock marks when student submissions rely on generic buzzwords or ungrounded claims. Here is what transforms a Pass/Credit into a High Distinction:
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900 text-sm mb-1">
                  1. Avoid "Magic Scaling" – Ground the Economics in Reality
                </div>
                <p className="text-stone-600 leading-relaxed">
                  <strong className="text-emerald-800">HD Strategy:</strong> Do not claim Crate Mates will instantly replace supermarkets or make millions in revenue. Clearly show that at 100 households, the 6% fee ($600 per cycle) only covers hall hire ($80), fuel/depot consumables ($180), and modest volunteer stipends. Acknowledge that the enterprise depends on volunteer labour or local council community grants during Stage 1.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900 text-sm mb-1">
                  2. Acknowledge Regulatory &amp; Food Handling Realities
                </div>
                <p className="text-stone-600 leading-relaxed">
                  <strong className="text-emerald-800">HD Strategy:</strong> Reference actual South Australian legislation: SA Health Food Safety Standards (Standard 3.2.2A Food Safety Management Tools) requiring a certified Food Safety Supervisor at the depot, and Council notification under the Food Act 2001. Markers love specific regulatory awareness.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900 text-sm mb-1">
                  3. Address Tanya &amp; Jordan's Specific Objections
                </div>
                <p className="text-stone-600 leading-relaxed">
                  <strong className="text-emerald-800">HD Strategy:</strong> Explicitly solve Tanya's barrier (paying $100 upfront when living paycheque to paycheque) via the Escrow Refund Guarantee and fortnightly auto-pooling. Explicitly solve Jordan's barrier (flatmates not paying their share) via the Roommate Group Wallet.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="font-bold text-stone-900 text-sm mb-1">
                  4. Explicit Validation Framework
                </div>
                <p className="text-stone-600 leading-relaxed">
                  <strong className="text-emerald-800">HD Strategy:</strong> Include a validation matrix: state the hypothesis, the test method (e.g., 20 in-depth interviews with Enfield parents, 4-week pilot receipts audit), success metric (e.g., &gt;75% re-order rate), and contingency plan if the hypothesis fails.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Technical Architecture & Git Spec */}
        {activeSection === 'tech-spec' && (
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-emerald-800" />
              <span>Technical Prototype Architecture &amp; GitHub Deployment</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-4">
              All deployment requirements for GitHub Pages, Vite subfolder routing, and GitHub Actions have been built into this codebase:
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">Vite Subfolder Configuration:</span>
                <p className="text-stone-600 mb-2">
                  Configured in <code className="bg-stone-200 px-1 py-0.5 rounded font-mono">vite.config.ts</code> with:
                </p>
                <pre className="p-3 bg-stone-900 text-stone-100 rounded-lg font-mono text-[11px] overflow-x-auto">
{`base: process.env.VITE_BASE_PATH ?? (command === 'build' ? './' : '/'),`}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">GitHub Actions Deployment Workflow:</span>
                <p className="text-stone-600 mb-2">
                  Created at <code className="bg-stone-200 px-1 py-0.5 rounded font-mono">.github/workflows/deploy.yml</code> with automatic build and publish to GitHub Pages using <code className="font-mono">npm install --legacy-peer-deps</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">Asset Bundling Compliance:</span>
                <p className="text-stone-600">
                  All local images (hero, Adelaide Hills growers, family crates, and collection hub) are imported via ES module import statements in <code className="font-mono text-stone-800">src/data/mockData.ts</code>, guaranteeing that Vite bundles them into <code className="font-mono text-stone-800">dist/assets/</code> without broken links on subfolder URLs.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
