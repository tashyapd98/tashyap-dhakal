import React from 'react';
import { GROWER_PROFILES } from '../data/mockData';
import { MapPin, Sprout, Compass, CheckCircle2, Navigation } from 'lucide-react';

export const MeetGrowers: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            South Australian Producers
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">
            Meet the family growers feeding Enfield and Prospect.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Supermarket supply chains hide who grew your food and take the lion's share of profits. Crate Mates pays growers direct, ensuring family farms stay viable while delivering food harvested just 24–48 hours before collection.
          </p>
        </div>

        {/* Food Miles Comparison Banner */}
        <div className="mb-16 bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Food Miles &amp; Freshness Differential
              </span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                78 km Average Farm-to-Fork vs 2,400 km Supermarket Logistics
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Coles and Woolworths frequently truck South Australian produce across state borders to eastern distribution centres in Melbourne or Sydney for centralized grading, before trucking it back to Adelaide supermarkets. Crate Mates moves produce directly from SA farms to Enfield.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="font-semibold text-emerald-800 block text-sm">Crate Mates: 78 km</span>
                  <span className="text-stone-500">Adelaide Hills, Plains &amp; Barossa direct to Enfield</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="font-semibold text-stone-700 block text-sm">Supermarkets: ~2,400 km</span>
                  <span className="text-stone-500">Interstate transit, gas ripening &amp; cold warehouses</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-emerald-900 text-white rounded-xl p-5 text-center">
              <div className="text-xs uppercase tracking-wider text-emerald-200 mb-1">
                Direct Economic Benefit
              </div>
              <div className="text-3xl font-black text-amber-300 mb-2 tabular-nums">
                82 Cents in the $1
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Returned directly to South Australian producers and wholesale partners, compared to as little as 25–35 cents under traditional supermarket distribution contracts.
              </p>
            </div>
          </div>
        </div>

        {/* Grower Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GROWER_PROFILES.map((grower) => (
            <div
              key={grower.id}
              className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div>
                <div className="h-56 relative overflow-hidden bg-stone-200">
                  <img
                    src={grower.image}
                    alt={grower.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{grower.region} ({grower.distanceFromAdelaide} km from Enfield)</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                    {grower.farmName} · Supplying {grower.yearsSupplying} Years
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {grower.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {grower.bio}
                  </p>

                  <div className="space-y-2 text-xs border-t border-stone-200 pt-4">
                    <div>
                      <span className="font-semibold text-stone-800 block">Crops in Current Crate Pool:</span>
                      <span className="text-stone-600">{grower.specialtyProduce.join(' · ')}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-800 block">Growing &amp; Harvest Methods:</span>
                      <span className="text-stone-600">{grower.farmingPractices}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Harvested fresh for Cycle #4 delivery to Enfield Community Centre</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
