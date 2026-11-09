import React, { useState } from 'react';
import { CURRENT_CAMPAIGN, CRATE_BUNDLES } from '../data/mockData';
import { Users, Clock, MapPin, CheckCircle, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface LiveCampaignsProps {
  pledgedHouseholds: number;
  onPledgeMore: (amount: number) => void;
}

export const LiveCampaigns: React.FC<LiveCampaignsProps> = ({ pledgedHouseholds, onPledgeMore }) => {
  const [selectedBundleId, setSelectedBundleId] = useState<string>('family-staples');
  const [isPledging, setIsPledging] = useState<boolean>(false);
  const [pledgeSuccess, setPledgeSuccess] = useState<boolean>(false);
  const [memberName, setMemberName] = useState<string>('Jordan Tran');
  const [memberSuburb, setMemberSuburb] = useState<string>('Prospect');
  const [payItForwardPledge, setPayItForwardPledge] = useState<boolean>(false);

  const selectedBundle = CRATE_BUNDLES.find((b) => b.id === selectedBundleId) || CRATE_BUNDLES[0];
  const totalDue = selectedBundle.price + (payItForwardPledge ? 5 : 0);

  const poolProgressPercent = Math.round((pledgedHouseholds / CURRENT_CAMPAIGN.targetHouseholds) * 100);
  const totalAmountPledged = pledgedHouseholds * 100;

  const handleConfirmPledge = (e: React.FormEvent) => {
    e.preventDefault();
    onPledgeMore(1);
    setIsPledging(false);
    setPledgeSuccess(true);
    setTimeout(() => {
      setPledgeSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              Fortnightly Ordering Cycle #{CURRENT_CAMPAIGN.cycleNumber}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">
              Active Community Crate Pool
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-2xl">
              Pledges are open for Enfield &amp; Prospect households. Once 100 households join, the pool locks and wholesale orders are dispatched to South Australian growers.
            </p>
          </div>

          <button
            onClick={() => setIsPledging(true)}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm self-start md:self-auto"
          >
            <span>Pledge for Cycle #{CURRENT_CAMPAIGN.cycleNumber}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {pledgeSuccess && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                <strong>Pledge Confirmed!</strong> Thank you for pooling with Enfield &amp; Prospect neighbours. Your escrow reservation is logged.
              </span>
            </div>
            <button
              onClick={() => setPledgeSuccess(false)}
              className="text-emerald-700 font-semibold hover:underline text-xs"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Campaign Hero Card */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Metrics & Progress */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                <span className="font-semibold text-stone-900">Enfield–Prospect Pilot Hub</span>
                <span>·</span>
                <span>Fortnightly Delivery</span>
                <span>·</span>
                <span className="text-emerald-800 font-semibold">Status: Accepting Pledges</span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl sm:text-5xl font-black text-stone-900 tabular-nums">
                  ${totalAmountPledged.toLocaleString()}
                </span>
                <span className="text-lg text-stone-500">
                  of ${CURRENT_CAMPAIGN.targetAmount.toLocaleString()} target pool
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-stone-200 rounded-full h-4 mb-4 overflow-hidden">
                <div
                  className="bg-emerald-700 h-4 rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
                  style={{ width: `${Math.min(poolProgressPercent, 100)}%` }}
                >
                  <span className="text-[10px] font-bold text-white tabular-nums">
                    {poolProgressPercent}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-600 mb-6">
                <span className="font-medium text-stone-900">
                  {pledgedHouseholds} households pledged ({100 - pledgedHouseholds} remaining to lock orders)
                </span>
                <span>Cutoff: {CURRENT_CAMPAIGN.cutoffDate}</span>
              </div>

              {/* Key Timeline Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-stone-200 text-xs">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Orders Cut Off</span>
                    <span className="text-stone-600">{CURRENT_CAMPAIGN.cutoffDate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900 block">Collection Day</span>
                    <span className="text-stone-600">{CURRENT_CAMPAIGN.deliveryDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Pickup point & guarantee */}
            <div className="lg:col-span-5 bg-white border border-stone-200 rounded-xl p-6">
              <h3 className="text-sm font-bold text-stone-900 mb-3">
                Collection Point Logistics
              </h3>
              
              <div className="space-y-3 text-xs text-stone-600 mb-6">
                <div>
                  <span className="text-stone-400 block">Location</span>
                  <span className="font-medium text-stone-900 text-sm">
                    {CURRENT_CAMPAIGN.pickupLocation.name}
                  </span>
                  <span className="block text-stone-600">{CURRENT_CAMPAIGN.pickupLocation.address}</span>
                </div>

                <div>
                  <span className="text-stone-400 block">Pickup Windows</span>
                  <span className="font-medium text-stone-800">
                    {CURRENT_CAMPAIGN.pickupLocation.operatingHours}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Escrow Security:</strong> Funds are held until Monday 11:59 PM. If &lt;100 households join, 100% of your funds are released back immediately.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Modal: Pledge Simulator */}
        {isPledging && (
          <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    Pledge into Cycle #{CURRENT_CAMPAIGN.cycleNumber}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Enfield &amp; Prospect Pilot Pool
                  </p>
                </div>
                <button
                  onClick={() => setIsPledging(false)}
                  className="text-stone-400 hover:text-stone-600 text-sm font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleConfirmPledge} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Select Your Crate Bundle:
                  </label>
                  <select
                    value={selectedBundleId}
                    onChange={(e) => setSelectedBundleId(e.target.value)}
                    className="w-full text-sm border border-stone-300 rounded-lg p-2.5 bg-white text-stone-900 focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                  >
                    {CRATE_BUNDLES.map((bundle) => (
                      <option key={bundle.id} value={bundle.id}>
                        {bundle.name} (${bundle.price.toFixed(2)}) – {bundle.servesHousehold}
                      </option>
                    ))}
                  </select>
                  <div className="text-xs text-stone-500 mt-1">
                    Supermarket comparison: approx. ${selectedBundle.estimatedSupermarketCost.toFixed(2)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Member Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      className="w-full text-sm border border-stone-300 rounded-lg p-2 text-stone-900 focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Suburb:
                    </label>
                    <select
                      value={memberSuburb}
                      onChange={(e) => setMemberSuburb(e.target.value)}
                      className="w-full text-sm border border-stone-300 rounded-lg p-2 text-stone-900 bg-white"
                    >
                      <option value="Prospect">Prospect SA 5082</option>
                      <option value="Enfield">Enfield SA 5085</option>
                      <option value="Kilburn">Kilburn SA 5084</option>
                      <option value="Broadview">Broadview SA 5083</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-emerald-950 font-medium">
                    <input
                      type="checkbox"
                      checked={payItForwardPledge}
                      onChange={(e) => setPayItForwardPledge(e.target.checked)}
                      className="rounded text-emerald-800"
                    />
                    <span>Add $5.00 Pay-It-Forward solidarity contribution</span>
                  </label>
                </div>

                {/* Summary */}
                <div className="pt-3 border-t border-stone-200 text-xs space-y-1.5 text-stone-600">
                  <div className="flex justify-between">
                    <span>Crate Bundle ({selectedBundle.name}):</span>
                    <span className="font-bold text-stone-900 tabular-nums">
                      ${selectedBundle.price.toFixed(2)}
                    </span>
                  </div>
                  {payItForwardPledge && (
                    <div className="flex justify-between text-emerald-800">
                      <span>Pay-it-forward donation:</span>
                      <span className="font-bold tabular-nums">+$5.00</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                    <span>Total Pre-Payment:</span>
                    <span className="text-emerald-800 tabular-nums">
                      ${totalDue.toFixed(2)} AUD
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsPledging(false)}
                    className="flex-1 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    Authorize Escrow Pledge (${totalDue.toFixed(2)})
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
