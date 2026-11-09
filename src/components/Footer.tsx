import React from 'react';
import { NavigationTab } from '../types';
import { Heart, MapPin, Mail, Shield, BookOpen } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Acknowledgment of Country */}
        <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 mb-12 text-stone-300 leading-relaxed">
          <p className="text-stone-200 font-semibold mb-1">
            Acknowledgment of Country
          </p>
          <p className="text-stone-400">
            Crate Mates operates on the traditional lands of the Kaurna people of the Adelaide Plains. We acknowledge their ongoing connection to land, waters and community, and pay our respects to Elders past and present. We honour the thousands of years of sustainable food stewardship practised across South Australia.
          </p>
        </div>

        {/* 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                C
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Crate Mates
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Adelaide community bulk-buying grocery social enterprise. Pooling neighbourhood demand to support South Australian family farms and restore grocery affordability.
            </p>
            <div className="text-emerald-400 font-medium">
              5–6% transparent social enterprise margin
            </div>
          </div>

          {/* Pilot Hub Details */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Enfield &amp; Prospect Pilot Hub
            </h4>
            <div className="flex items-start gap-2 text-stone-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Enfield Community Centre Verandah<br />
                540 Regency Road, Enfield SA 5085
              </span>
            </div>
            <p className="text-stone-400">
              Fortnightly Thursday pickups: 8:00 AM – 11:30 AM &amp; 4:30 PM – 6:30 PM
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-white transition-colors">
                  Home &amp; Overview
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('how-it-works')} className="hover:text-white transition-colors">
                  How It Works &amp; Escrow
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('campaigns')} className="hover:text-white transition-colors">
                  Live Campaigns
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('bundles')} className="hover:text-white transition-colors">
                  Crate Bundles
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('growers')} className="hover:text-white transition-colors">
                  Meet SA Growers
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('impact')} className="hover:text-white transition-colors">
                  Impact Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('member-hub')} className="hover:text-white transition-colors">
                  Member Hub &amp; Wallet
                </button>
              </li>
            </ul>
          </div>

          {/* University Assignment Disclosure */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Student Prototype</span>
            </h4>
            <p className="text-stone-400 leading-relaxed">
              This interactive application is developed as part of a university digital enterprise and startup strategy assessment.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onSelectTab('academic-plan')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold rounded-lg border border-stone-700 transition-colors"
              >
                <span>View Academic Report Guide</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            &copy; 2026 Crate Mates Social Enterprise (Student Concept Prototype). Enfield, Adelaide SA.
          </div>
          <div className="flex items-center gap-4">
            <span>Australian English (en-AU)</span>
            <span>·</span>
            <span>SA Food Safety Compliance Standard 3.2.2A</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
