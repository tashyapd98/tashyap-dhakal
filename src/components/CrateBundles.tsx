import React, { useState } from 'react';
import { CRATE_BUNDLES } from '../data/mockData';
import { CrateBundle } from '../types';
import { Check, Info, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

interface CrateBundlesProps {
  onSelectBundle: (bundle: CrateBundle) => void;
}

export const CrateBundles: React.FC<CrateBundlesProps> = ({ onSelectBundle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedBundleModal, setSelectedBundleModal] = useState<CrateBundle | null>(null);

  const filteredBundles = activeCategory === 'all'
    ? CRATE_BUNDLES
    : CRATE_BUNDLES.filter((b) => b.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            South Australian Seasonal Bundles
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">
            Curated crates for family dinners, shared flats &amp; solo cooks.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            All produce is sourced directly from registered growers in the Adelaide Hills, Riverland, Barossa, and Virginia. Heavy-duty reusable crates keep packaging waste near zero.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-stone-200/70 rounded-xl max-w-fit">
          {[
            { id: 'all', label: 'All Bundles' },
            { id: 'family', label: 'Family (Tanya Brooks)' },
            { id: 'sharehouse', label: 'Share-House (Jordan Tran)' },
            { id: 'budget', label: 'Top-Up' },
            { id: 'solidarity', label: 'Pay-It-Forward' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBundles.map((bundle) => {
            const savings = bundle.estimatedSupermarketCost - bundle.price;
            const savingsPercent = Math.round((savings / bundle.estimatedSupermarketCost) * 100);

            return (
              <div
                key={bundle.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img
                      src={bundle.image}
                      alt={bundle.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {bundle.category === 'solidarity' ? (
                      <div className="absolute top-3 right-3 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                        Solidarity Donation
                      </div>
                    ) : (
                      <div className="absolute top-3 right-3 bg-emerald-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs tabular-nums">
                        Save ~{savingsPercent}%
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Quiet metadata line without pills */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span>{bundle.servesHousehold}</span>
                      <span>·</span>
                      <span>{bundle.weightApprox}</span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 mb-1 leading-snug">
                      {bundle.name}
                    </h3>
                    
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {bundle.subtitle}
                    </p>

                    {/* Price and Comparison */}
                    <div className="flex items-baseline justify-between py-3 my-2 border-y border-stone-100">
                      <div>
                        <span className="text-2xl font-bold text-stone-900 tabular-nums">
                          ${bundle.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-stone-500 ml-1">/ cycle</span>
                      </div>
                      <div className="text-right text-xs">
                        <span className="text-stone-400 line-through tabular-nums block">
                          Supermarket: ${bundle.estimatedSupermarketCost.toFixed(2)}
                        </span>
                        <span className="text-emerald-700 font-semibold tabular-nums">
                          Save ${savings.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* SA Origins */}
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span className="truncate">SA Origin: {bundle.saOrigin.join(', ')}</span>
                    </div>

                    {/* Highlights (First 3 items) */}
                    <div className="space-y-1.5 mb-2">
                      <div className="text-xs font-semibold text-stone-700">Includes in crate:</div>
                      {bundle.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-600">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                      {bundle.items.length > 3 && (
                        <div className="text-[11px] text-stone-400 pl-5">
                          + {bundle.items.length - 3} more seasonal farm items
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex gap-2">
                  <button
                    onClick={() => setSelectedBundleModal(bundle)}
                    className="flex-1 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    View All Items
                  </button>
                  <button
                    onClick={() => onSelectBundle(bundle)}
                    className="flex-1 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
                  >
                    Select Crate
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Full Itemized Breakdown */}
        {selectedBundleModal && (
          <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-stone-200 max-h-[85vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    {selectedBundleModal.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Target Persona: {selectedBundleModal.targetPersona}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedBundleModal(null)}
                  className="text-stone-400 hover:text-stone-600 text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <div className="bg-stone-50 rounded-xl p-4 mb-4 border border-stone-200">
                <div className="flex justify-between items-center text-sm font-bold text-stone-900 mb-1">
                  <span>Crate Pool Price:</span>
                  <span className="text-emerald-800 tabular-nums">
                    ${selectedBundleModal.price.toFixed(2)} AUD
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-stone-500">
                  <span>Audited Supermarket Equivalent:</span>
                  <span className="line-through tabular-nums">
                    ${selectedBundleModal.estimatedSupermarketCost.toFixed(2)}
                  </span>
                </div>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                Full Produce &amp; Pantry Packing Slip:
              </h4>

              <div className="space-y-2 mb-6">
                {selectedBundleModal.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 p-2 rounded-lg bg-stone-50 border border-stone-100">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-6 leading-relaxed">
                <span className="font-semibold">Seasonal Quality Pledge:</span> If weather in the Adelaide Hills or Riverland affects harvest yield, items are substituted only with an equivalent South Australian grown organic or low-spray crop.
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedBundleModal(null)}
                  className="flex-1 py-2.5 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onSelectBundle(selectedBundleModal);
                    setSelectedBundleModal(null);
                  }}
                  className="flex-1 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  Select This Crate
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
