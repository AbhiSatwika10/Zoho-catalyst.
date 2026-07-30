import React from 'react';
import { Target, Eye, ShieldCheck, HeartPulse, Stethoscope, Award } from 'lucide-react';

export default function About() {
  const cards = [
    { icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />, title: 'Patient Centric Care', desc: 'Putting patient safety, comfort, and recovery at the heart of everything we do.' },
    { icon: <HeartPulse className="w-6 h-6 text-cyan-600" />, title: 'Compassionate Team', desc: 'Nurses and support staff trained to deliver warm and empathetic attention.' },
    { icon: <Stethoscope className="w-6 h-6 text-cyan-600" />, title: 'Expert Specialists', desc: 'Board-certified physicians with decades of national and international expertise.' },
    { icon: <Award className="w-6 h-6 text-cyan-600" />, title: 'Award Winning Quality', desc: 'Recognized globally for clinical outcomes and advanced infrastructure.' },
  ];

  return (
    <div className="space-y-20 py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Hospital Interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase">About HealthSphere</span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Dedicated to Medical Excellence & Patient Well-being</h1>
            <p className="text-slate-600 leading-relaxed">
              Founded with the vision to make high-quality healthcare accessible to all, HealthSphere Hospital has grown into a premier medical institution. We blend advanced medical technology with highly experienced clinicians across multiple disciplines.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our infrastructure features state-of-the-art operation theatres, modern intensive care units (ICUs), 24/7 pharmacies, and fully automated laboratories to ensure accurate diagnoses and fast recoveries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 space-y-4">
            <div className="bg-cyan-100 p-3 rounded-2xl w-fit">
              <Target className="w-8 h-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To deliver exceptional, affordable, and compassionate healthcare services to every patient through cutting-edge medical practices, experienced professionals, and an unwavering commitment to quality.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 space-y-4">
            <div className="bg-cyan-100 p-3 rounded-2xl w-fit">
              <Eye className="w-8 h-8 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted global healthcare leader recognized for clinical outcomes, patient satisfaction, innovative treatments, and medical research excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Patients Trust Us</h2>
          <p className="text-slate-600 mt-2">Core pillars that differentiate our healthcare approach.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all space-y-3">
              <div className="bg-cyan-50 p-3 rounded-xl w-fit">{card.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}