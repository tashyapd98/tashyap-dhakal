import React, { useState } from 'react';
import { MEMBER_PERSONAS, CURRENT_CAMPAIGN, CRATE_BUNDLES } from '../data/mockData';
import { MemberPersona } from '../types';
import { 
  User, 
  CreditCard, 
  QrCode, 
  Users, 
  Clock, 
  CheckCircle, 
  Plus, 
  Copy, 
  ArrowRight,
  ShieldCheck,
  Receipt,
  Sparkles
} from 'lucide-react';

export const MemberHub: React.FC = () => {
  const [selectedPersonaId, setSelectedPersonaId] = useState<'tanya' | 'jordan'>('jordan');
  const [crateCredit, setCrateCredit] = useState<number>(120.00);
  const [isTopUpOpen, setIsTopUpOpen] = useState<boolean>(false);
  const [topUpAmount, setTopUpAmount] = useState<number>(50);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Share-house roommates mock state for Jordan
  const [roommates, setRoommates] = useState([
    { id: '1', name: 'Jordan (You)', share: 14.65, paid: true, avatar: 'JT' },
    { id: '2', name: 'Sam K. (Room 2)', share: 14.65, paid: true, avatar: 'SK' },
    { id: '3', name: 'Chloe T. (Room 3)', share: 14.70, paid: false, avatar: 'CT' },
  ]);

  const activePersona: MemberPersona = MEMBER_PERSONAS.find((p) => p.id === selectedPersonaId) || MEMBER_PERSONAS[0];

  const handleTopUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCrateCredit((prev) => prev + Number(topUpAmount));
    setIsTopUpOpen(false);
  };

  const handleSimulatePayment = (id: string) => {
    setRoommates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, paid: true } : r))
    );
  };

  const handleCopyPass = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Persona Switcher Bar (Crucial for university demo / user journey evaluation) */}
        <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-6 mb-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                Interactive Persona Lens Switcher
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900">
                Test the Member Portal through our primary user personas:
              </h3>
            </div>

            <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl">
              <button
                onClick={() => setSelectedPersonaId('tanya')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedPersonaId === 'tanya'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">
                  TB
                </div>
                <span>Tanya (Enfield Parent)</span>
              </button>

              <button
                onClick={() => setSelectedPersonaId('jordan')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedPersonaId === 'jordan'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[10px] flex items-center justify-center font-bold">
                  JT
                </div>
                <span>Jordan (Prospect Share-House)</span>
              </button>
            </div>
          </div>

          {/* Persona Context Card */}
          <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-600">
            <div>
              <span className="font-semibold text-stone-900 block">Context:</span>
              <span>{activePersona.householdContext}</span>
            </div>
            <div>
              <span className="font-semibold text-stone-900 block">Key Concern Addressed:</span>
              <span>{activePersona.painPoints[1]}</span>
            </div>
            <div>
              <span className="font-semibold text-emerald-800 block">Target Crate:</span>
              <span>
                {selectedPersonaId === 'tanya' ? 'Enfield Family Staples ($78)' : 'Prospect Share-House Fresh Box ($44)'}
              </span>
            </div>
          </div>
        </div>

        {/* Member Portal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Account, Wallet & Crate Credit */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Account Overview Header */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-lg shadow-xs">
                    {activePersona.avatarInitial}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-stone-900">
                      {activePersona.name}
                    </h2>
                    <p className="text-xs text-stone-500">
                      Member since August 2026 · {activePersona.suburb} Hub
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                    Crate Credit Balance
                  </div>
                  <div className="text-2xl font-black text-emerald-800 tabular-nums">
                    ${crateCredit.toFixed(2)} AUD
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-6 pt-4 border-t border-stone-100">
                <button
                  onClick={() => setIsTopUpOpen(true)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Top Up Crate Credit</span>
                </button>
                <button
                  onClick={() => alert("Auto-Pool is enabled! Every fortnight, your chosen crate will be pledged automatically before the Monday cutoff.")}
                  className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  Auto-Pool: Active
                </button>
              </div>
            </div>

            {/* FEATURE: Jordan's Prospect Share-House Roommate Wallet */}
            {selectedPersonaId === 'jordan' && (
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-700" />
                    <h3 className="text-base font-bold text-stone-900">
                      Prospect Share-House Group Wallet
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-stone-500">
                    Target: $44.00 Box
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  No more awkward group texts chasing flatmates for veggie money. The Prospect Share-House Box is split 3 ways. As soon as all 3 contribute, the crate locks into the Enfield pool!
                </p>

                <div className="space-y-3 mb-6">
                  {roommates.map((rm) => (
                    <div
                      key={rm.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center font-bold text-[10px]">
                          {rm.avatar}
                        </div>
                        <div>
                          <span className="font-semibold text-stone-900 block">{rm.name}</span>
                          <span className="text-stone-500">Share: ${rm.share.toFixed(2)}</span>
                        </div>
                      </div>

                      <div>
                        {rm.paid ? (
                          <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Paid
                          </span>
                        ) : (
                          <button
                            onClick={() => handleSimulatePayment(rm.id)}
                            className="px-2.5 py-1 text-[11px] font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-md transition-colors"
                          >
                            Simulate Chloe Pay ($14.70)
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-xs text-emerald-950 flex items-center justify-between">
                  <span>
                    Status: {roommates.every((r) => r.paid) ? 'All flatmates paid! Crate is 100% pre-funded.' : 'Waiting on Chloe before Monday cutoff.'}
                  </span>
                </div>
              </div>
            )}

            {/* Past Orders & Transparency Receipts */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-emerald-800" />
                  <h3 className="text-base font-bold text-stone-900">
                    Cycle History &amp; Open Receipts
                  </h3>
                </div>
                <span className="text-xs text-stone-400">Past 3 Fortnights</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl border border-stone-200 hover:border-stone-300 transition-colors">
                  <div className="flex items-center justify-between font-bold text-stone-900 mb-1">
                    <span>Cycle #3 – Picked up 29 Oct 2026</span>
                    <span className="text-emerald-800 tabular-nums">
                      {selectedPersonaId === 'tanya' ? '$78.00' : '$44.00'} AUD
                    </span>
                  </div>
                  <div className="text-stone-500 mb-2">
                    {selectedPersonaId === 'tanya' ? 'Enfield Family Staples Crate' : 'Prospect Share-House Box'} · 14.5 kg produce
                  </div>
                  <div className="text-[11px] text-stone-400 flex items-center justify-between pt-2 border-t border-stone-100">
                    <span>Direct to SA Growers: {selectedPersonaId === 'tanya' ? '$63.96' : '$36.08'} (82%)</span>
                    <span className="text-emerald-700 font-medium">Reused Crate Returned ✓</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-200 opacity-80">
                  <div className="flex items-center justify-between font-bold text-stone-900 mb-1">
                    <span>Cycle #2 – Picked up 15 Oct 2026</span>
                    <span className="text-emerald-800 tabular-nums">
                      {selectedPersonaId === 'tanya' ? '$78.00' : '$44.00'} AUD
                    </span>
                  </div>
                  <div className="text-stone-500">
                    Includes $5.00 Pay-It-Forward solidarity contribution
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: QR Collection Pass & Hub Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dynamic Collection QR Pass */}
            <div className="bg-white border-2 border-emerald-800 rounded-2xl p-6 sm:p-8 text-center shadow-md relative overflow-hidden">
              <div className="text-[11px] uppercase tracking-wider font-bold text-emerald-800 mb-1">
                Cycle #{CURRENT_CAMPAIGN.cycleNumber} Pickup Pass
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                Fast Verandah Collection
              </h3>

              {/* Dynamic QR SVG Box */}
              <div className="w-48 h-48 mx-auto bg-stone-900 p-3 rounded-2xl shadow-inner flex items-center justify-center mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  {/* Simplified realistic QR matrix representation */}
                  <rect x="0" y="0" width="100" height="100" fill="#ffffff" />
                  <rect x="5" y="5" width="30" height="30" fill="#0f172a" />
                  <rect x="9" y="9" width="22" height="22" fill="#ffffff" />
                  <rect x="13" y="13" width="14" height="14" fill="#0f172a" />
                  <rect x="65" y="5" width="30" height="30" fill="#0f172a" />
                  <rect x="69" y="9" width="22" height="22" fill="#ffffff" />
                  <rect x="73" y="13" width="14" height="14" fill="#0f172a" />
                  <rect x="5" y="65" width="30" height="30" fill="#0f172a" />
                  <rect x="9" y="69" width="22" height="22" fill="#ffffff" />
                  <rect x="13" y="73" width="14" height="14" fill="#0f172a" />
                  {/* Data dots */}
                  <rect x="42" y="8" width="6" height="6" fill="#0f172a" />
                  <rect x="50" y="16" width="6" height="6" fill="#0f172a" />
                  <rect x="42" y="24" width="6" height="6" fill="#0f172a" />
                  <rect x="10" y="44" width="6" height="6" fill="#0f172a" />
                  <rect x="22" y="44" width="6" height="6" fill="#0f172a" />
                  <rect x="34" y="44" width="6" height="6" fill="#0f172a" />
                  <rect x="42" y="44" width="16" height="16" fill="#047857" />
                  <rect x="64" y="44" width="6" height="6" fill="#0f172a" />
                  <rect x="76" y="44" width="6" height="6" fill="#0f172a" />
                  <rect x="88" y="44" width="6" height="6" fill="#0f172a" />
                  <rect x="42" y="66" width="6" height="6" fill="#0f172a" />
                  <rect x="54" y="74" width="6" height="6" fill="#0f172a" />
                  <rect x="66" y="66" width="6" height="6" fill="#0f172a" />
                  <rect x="78" y="78" width="12" height="12" fill="#0f172a" />
                </svg>
              </div>

              <div className="font-mono text-xs font-bold text-stone-800 tracking-wider mb-2">
                CRATE-SA-2026-CYCLE04-{activePersona.id.toUpperCase()}
              </div>

              <p className="text-xs text-stone-500 mb-4">
                Present this screen or printed voucher to our volunteer crew at the Enfield Community Centre.
              </p>

              <button
                onClick={handleCopyPass}
                className="w-full py-2 px-3 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCode ? 'Pass Code Copied!' : 'Copy Code for Street Neighbour Pickup'}</span>
              </button>

              <div className="mt-4 pt-4 border-t border-stone-200 text-left text-xs space-y-1.5 text-stone-600">
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-900">Pickup Date:</span>
                  <span>{CURRENT_CAMPAIGN.deliveryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-900">Morning Slot:</span>
                  <span>8:00 AM – 11:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-900">Evening Slot:</span>
                  <span>4:30 PM – 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-900">Depot:</span>
                  <span>540 Regency Rd, Enfield</span>
                </div>
              </div>
            </div>

            {/* Joining Fee & Concession Policy Info */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Fair Go Membership Policy</span>
              </div>
              <p className="leading-relaxed">
                Standard one-off membership fee is $10 to register with the enterprise. This fee is <strong>100% waived</strong> for healthcare card holders, seniors, and full-time tertiary students.
              </p>
            </div>

          </div>

        </div>

        {/* Modal: Top Up Crate Credit */}
        {isTopUpOpen && (
          <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-stone-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-stone-900">
                  Top Up Crate Credit
                </h3>
                <button
                  onClick={() => setIsTopUpOpen(false)}
                  className="text-stone-400 hover:text-stone-600 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleTopUpSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    Select Top-Up Amount:
                  </label>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[50, 80, 100, 150].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setTopUpAmount(amt)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          topUpAmount === amt
                            ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 space-y-1">
                  <div className="font-semibold text-stone-900">Zero-Fee Payment Options:</div>
                  <div>• PayID: payments@cratemates.org.au</div>
                  <div>• Direct Bank Transfer: BSB 085-005 Acc 9821-3412</div>
                  <div className="text-[11px] text-stone-400 pt-1">
                    Using direct bank deposit keeps 1.8% in bank merchant interchange fees inside the community produce pool.
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsTopUpOpen(false)}
                    className="flex-1 py-2 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg"
                  >
                    Confirm +${topUpAmount}.00
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
