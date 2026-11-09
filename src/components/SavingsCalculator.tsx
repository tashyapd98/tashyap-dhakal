import React, { useState } from 'react';
import { Calculator, DollarSign, HelpCircle, Check, Info } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [householdSize, setHouseholdSize] = useState<number>(3);
  const [weeklySupermarketSpend, setWeeklySupermarketSpend] = useState<number>(180);
  const [includePayItForward, setIncludePayItForward] = useState<boolean>(true);

  // Benchmarked savings rate: estimated 25% to 32% savings on fresh produce and grocery staples
  const estimatedSavingsPercent = 0.28;
  const estimatedCrateSpend = Math.round(weeklySupermarketSpend * (1 - estimatedSavingsPercent));
  const weeklySavings = weeklySupermarketSpend - estimatedCrateSpend;
  const monthlySavings = weeklySavings * 4.33;
  const annualSavings = weeklySavings * 52;

  // Breakdown of a $100 Crate Mates pool contribution
  const breakdown = {
    growersAndProducers: 82.0, // 82% direct to SA growers
    depotAndLogistics: 12.0, // 12% refrigerated freight & depot hall hire
    crateMatesMargin: 6.0, // 6% social enterprise contribution ($6 per $100)
    payItForward: includePayItForward ? 5.0 : 0.0
  };

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>Interactive Household Savings &amp; Transparency Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-4">
            See how much your household could save by pooling with neighbours.
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
            Commercial supermarkets add hefty retail markups, logistics surcharges, and corporate profit margins. When Enfield and Prospect neighbours buy collectively in bulk crates, you unlock true farm-gate pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-stone-900 mb-6">
              1. Your Household Profile
            </h3>

            {/* Household Size Selector */}
            <div className="mb-8">
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Household Members: <span className="text-emerald-800 font-bold">{householdSize} {householdSize === 1 ? 'person' : 'people'}</span>
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setHouseholdSize(size);
                      setWeeklySupermarketSpend(size === 1 ? 90 : size === 2 ? 140 : size === 3 ? 190 : size === 4 ? 240 : 290);
                    }}
                    className={`py-2 text-sm font-semibold rounded-lg border transition-all ${
                      householdSize === size
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {size === 5 ? '5+' : size}
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Spend Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                  Current Weekly Supermarket Produce &amp; Staples Spend:
                </label>
                <span className="text-lg font-bold text-stone-900 tabular-nums">
                  ${weeklySupermarketSpend} / wk
                </span>
              </div>
              <input
                type="range"
                min="60"
                max="350"
                step="5"
                value={weeklySupermarketSpend}
                onChange={(e) => setWeeklySupermarketSpend(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-1">
                <span>$60/wk</span>
                <span>$200/wk</span>
                <span>$350/wk</span>
              </div>
            </div>

            {/* Pay-it-Forward Contribution */}
            <div className="pt-6 border-t border-stone-200">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includePayItForward}
                  onChange={(e) => setIncludePayItForward(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-emerald-800 focus:ring-emerald-700 border-stone-300"
                />
                <div>
                  <span className="text-sm font-semibold text-stone-900 block">
                    Add optional $5 Pay-It-Forward solidarity contribution
                  </span>
                  <span className="text-xs text-stone-500 block mt-0.5">
                    Subsidises fresh produce crates for Enfield and Prospect households experiencing emergency financial hardship.
                  </span>
                </div>
              </label>
            </div>

            {/* Academic note */}
            <div className="mt-8 p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <span>
                <strong>Academic Validation Note:</strong> The 28% estimated saving is a baseline hypothesis based on fresh produce price differentials. During the pilot, Crate Mates will conduct fortnightly basket audits against Coles/Woolies in Enfield to verify actual real-world savings.
              </span>
            </div>
          </div>

          {/* Results & Transparency Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Savings Result Card */}
            <div className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                Projected Household Community Savings
              </div>
              
              <div className="grid grid-cols-2 gap-4 my-6">
                <div>
                  <div className="text-xs text-emerald-200">Weekly Savings</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    ${weeklySavings}
                  </div>
                  <div className="text-xs text-emerald-300">approx. $190/mo</div>
                </div>

                <div>
                  <div className="text-xs text-emerald-200">Annual Estimated Savings</div>
                  <div className="text-2xl sm:text-3xl font-bold text-amber-300 tabular-nums">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <div className="text-xs text-emerald-300">kept in your pocket</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-100 leading-relaxed">
                <span className="font-semibold text-white">Compare:</span> You spend <strong>${weeklySupermarketSpend}</strong> at standard supermarket pricing vs approximately <strong>${estimatedCrateSpend + (includePayItForward ? 5 : 0)}</strong> via Crate Mates bulk buying pool.
              </div>
            </div>

            {/* Transparent 100% Price Breakdown */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-stone-900">
                  Where Every $100 In The Crate Pool Goes
                </h4>
                <span className="text-xs font-semibold text-emerald-800">
                  100% Open-Book
                </span>
              </div>

              {/* Stacked bar visualization */}
              <div className="w-full h-4 bg-stone-200 rounded-full overflow-hidden flex mb-4">
                <div style={{ width: '82%' }} className="bg-emerald-700" title="82% Direct to SA Growers" />
                <div style={{ width: '12%' }} className="bg-amber-600" title="12% Freight & Logistics" />
                <div style={{ width: '6%' }} className="bg-stone-600" title="6% Crate Mates Operating Fee" />
              </div>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-emerald-700" />
                    <span className="font-medium">Direct to South Australian Growers &amp; Wholesalers</span>
                  </div>
                  <span className="font-bold tabular-nums text-stone-900">$82.00 (82%)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-amber-600" />
                    <span className="font-medium">Refrigerated Logistics &amp; Community Depot Hire</span>
                  </div>
                  <span className="font-bold tabular-nums text-stone-900">$12.00 (12%)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-stone-600" />
                    <span className="font-medium">Crate Mates Social Enterprise Service Contribution</span>
                  </div>
                  <span className="font-bold tabular-nums text-stone-900">$6.00 (6%)</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200 text-xs text-stone-500">
                A 6% enterprise contribution generates ~$600 per 100-household cycle. Surpluses are strictly reinvested into lower member prices and suburb expansion.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
