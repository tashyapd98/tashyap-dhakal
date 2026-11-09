import React from 'react';
import { Users, Truck, PackageCheck, QrCode, Shield, RefreshCw, Award, Scale } from 'lucide-react';
import { ASSET_IMAGES } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Users,
      title: 'Neighbours Pool Funds',
      desc: 'Members pre-pay for their chosen crate bundle before the fortnightly cutoff. Funds sit securely in an escrow account until the 100-household threshold is achieved.'
    },
    {
      num: '02',
      icon: Truck,
      title: 'Direct Farm-Gate Lock-In',
      desc: 'With a collective $10,000 order in hand, Crate Mates negotiates direct with growers in the Adelaide Hills, Riverland, and Adelaide Plains—bypassing supermarket corporate markups.'
    },
    {
      num: '03',
      icon: PackageCheck,
      title: 'Packed Within 24 Hours',
      desc: 'Crops are harvested fresh and delivered straight to the Enfield community depot. Volunteers and our suburb crew pack produce into heavy-duty reusable crates.'
    },
    {
      num: '04',
      icon: QrCode,
      title: 'Collect With QR Code',
      desc: 'Pop by the Enfield Community Centre on Thursday morning or after work. Scan your member QR code, grab your fresh crate, and return last cycle’s empty crate.'
    }
  ];

  const trustControls = [
    {
      icon: Shield,
      title: 'Dedicated Escrow Account',
      desc: 'Member pool money is quarantined in a dedicated community trust account. It is never commingled with working capital or operational expenses.'
    },
    {
      icon: RefreshCw,
      title: '100% Threshold Refund Guarantee',
      desc: 'If a campaign does not reach the minimum viable threshold (approx. 100 households), all pledges are automatically refunded immediately with zero cancellation fees.'
    },
    {
      icon: Award,
      title: 'Food Safety & Council Accreditation',
      desc: 'Full compliance with SA Health Food Safety Standards (Standard 3.2.2A) and City of Port Adelaide Enfield food business notification.'
    },
    {
      icon: Scale,
      title: 'Audited Price Benchmarking',
      desc: 'We never publish fabricated savings. All supermarket comparison prices are physically audited against Enfield supermarket receipts on the Monday prior to pickup.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            The Crate Mates Model
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">
            How pooled community bulk-buying works, step by step.
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            By shifting from individual retail shopping to collective pre-funded orders, we eliminate food waste, slash transport lag, and secure true wholesale prices for Enfield and Prospect households.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-stone-300 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collection Verandah Context & Image Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
          <div className="lg:col-span-5">
            <img
              src={ASSET_IMAGES.collectionPoint}
              alt="Enfield Community Centre collection point"
              className="w-full h-72 object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block mb-1">
              Pilot Collection Hub
            </span>
            <h3 className="text-xl font-bold text-stone-900 mb-3">
              Enfield Community Centre Verandah (540 Regency Rd)
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              Designed around the real schedules of working parents and students. Pick up your crate in the morning (8:00 AM – 11:30 AM) on your commute or after school and work (4:30 PM – 6:30 PM). 
            </p>
            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-stone-100 text-xs text-stone-700">
              <div>
                <span className="font-semibold block text-stone-900">Average Pickup Time</span>
                <span>Under 2 minutes with QR scanner</span>
              </div>
              <div>
                <span className="font-semibold block text-stone-900">Street Neighbour Pickup</span>
                <span>Authorise a friend to grab yours with 1 click</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Risk Controls Grid */}
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Built on transparent governance and low-risk safeguards
            </h3>
            <p className="text-sm text-stone-600">
              Community enterprises only thrive when members have absolute confidence in financial stewardship and quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustControls.map((ctrl, i) => {
              const IconComp = ctrl.icon;
              return (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-md bg-stone-100 text-emerald-800 flex items-center justify-center mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1.5">
                    {ctrl.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {ctrl.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
