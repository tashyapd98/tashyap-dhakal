import React from 'react';
import { NavigationTab } from '../types';
import { ShoppingBag, BookOpen, User, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  pledgedHouseholds: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, pledgedHouseholds }) => {
  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'campaigns', label: 'Live Campaigns' },
    { id: 'bundles', label: 'Crate Bundles' },
    { id: 'growers', label: 'Meet the Growers' },
    { id: 'impact', label: 'Impact Dashboard' },
    { id: 'member-hub', label: 'Member Hub' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-2.5 text-left text-stone-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-800 text-stone-100 flex items-center justify-center font-bold text-base shadow-sm">
              C
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">
                Crate Mates
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-emerald-800 font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-800 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action & Academic Rubric Guide */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('academic-plan')}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 ${
                currentTab === 'academic-plan'
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
              title="View Uni Assignment Strategy, Rubric Mapping & Academic Checklist"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>Assignment Guide</span>
            </button>

            <button
              onClick={() => onSelectTab('member-hub')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <User className="w-3.5 h-3.5" />
              <span>Member Portal</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-4 border-t border-stone-200 text-xs no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`whitespace-nowrap pb-1 ${
                currentTab === item.id
                  ? 'text-emerald-800 font-bold border-b-2 border-emerald-800'
                  : 'text-stone-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onSelectTab('academic-plan')}
            className="text-amber-800 font-medium whitespace-nowrap"
          >
            Assignment Guide
          </button>
        </div>
      </div>
    </header>
  );
};
