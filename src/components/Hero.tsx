import React from 'react';
import { ASSET_IMAGES, CURRENT_CAMPAIGN } from '../data/mockData';
import { NavigationTab } from '../types';
import { ArrowRight, ShieldCheck, HeartHandshake, MapPin, TrendingDown } from 'lucide-react';

interface HeroProps {
  onSelectTab: (tab: NavigationTab) => void;
  pledgedHouseholds: number;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTab, pledgedHouseholds }) => {
  const fundingPercentage = Math.round((pledgedHouseholds / CURRENT_CAMPAIGN.targetHouseholds) * 100);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Proposition and Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet geographical subtext without pill badge */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-3">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Enfield &amp; Prospect Pilot · Adelaide, South Australia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-5" style={{ textWrap: 'balance' }}>
              Fairer groceries for Adelaide neighbours, straight from South Australian soil.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Crate Mates is a community bulk-buying social enterprise. We pool purchasing power across approximately 100 local households to negotiate direct with SA growers and wholesalers—cutting out corporate supermarket markups and keeping fresh food affordable.
            </p>

            {/* Live Campaign Pool Status Card */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 mb-8 shadow-sm">
              <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                <span className="font-semibold text-stone-900">
                  Cycle #{CURRENT_CAMPAIGN.cycleNumber} Pool Progress
                </span>
                <span className="text-stone-500">
                  Cutoff: {CURRENT_CAMPAIGN.cutoffDate}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-100 rounded-full h-3 mb-3 overflow-hidden">
                <div
                  className="bg-emerald-700 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-stone-100 text-center">
                <div>
                  <div className="text-xs text-stone-500">Households</div>
                  <div className="text-base font-bold text-stone-900 tabular-nums">
                    {pledgedHouseholds} / {CURRENT_CAMPAIGN.targetHouseholds}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-stone-500">Pool Pledged</div>
                  <div className="text-base font-bold text-emerald-800 tabular-nums">
                    ${(pledgedHouseholds * 100).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-stone-500">Status</div>
                  <div className="text-xs font-semibold text-emerald-700 pt-1">
                    {pledgedHouseholds >= 100 ? 'Threshold Met' : `${100 - pledgedHouseholds} to Lock`}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectTab('campaigns')}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <span>Join Current Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab('bundles')}
                className="px-5 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
              >
                View Crate Bundles
              </button>
            </div>

            {/* Trust and Safety Micro-Indicators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-8 pt-6 border-t border-stone-200 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>100% Escrow refund if pool threshold isn't met</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-700" />
                <span>5–6% transparent social enterprise margin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-700" />
                <span>Pay-it-forward community crates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white">
              <img
                src={ASSET_IMAGES.hero}
                alt="Fresh South Australian produce in a community crate"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs uppercase tracking-wider font-semibold text-emerald-300 mb-1">
                  Adelaide Hills · Riverland · Barossa · Adelaide Plains
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  Farm-gate fresh produce, packed within 48 hours
                </div>
                <p className="text-xs text-stone-200 leading-relaxed">
                  Collected every fortnight at the Enfield Community Centre verandah. Shorter supply chains mean crunchier apples, longer fridge life, and zero supermarket cold-gas warehouse delays.
                </p>
              </div>
            </div>

            {/* Quiet quote callout */}
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-700">
              <span className="font-semibold text-amber-900">University Pilot Note:</span> Initial prototype testing a 100-household threshold in Enfield–Prospect to empirically validate whether a 5–6% contribution covers storage, refrigerated transport, and volunteer coordination.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
