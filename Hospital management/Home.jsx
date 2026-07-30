import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Users, Award, ArrowRight, HeartPulse, Stethoscope, Ambulance } from 'lucide-react';

export default function Home() {
  const highlights = [
    { icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />, title: 'Certified Excellence', desc: 'Internationally accredited hospital providing world-class medical safety standards.' },
    { icon: <Clock className="w-8 h-8 text-cyan-600" />, title: '24/7 Emergency Care', desc: 'Round-the-clock emergency support with state-of-the-art trauma centers.' },
    { icon: <Users className="w-8 h-8 text-cyan-600" />, title: 'Expert Specialists', desc: 'Over 150+ highly experienced consultants across multiple specialties.' },
    { icon: <Award className="w-8 h-8 text-cyan-600" />, title: 'Advanced Technology', desc: 'Cutting-edge diagnostic equipment and robotic-assisted surgeries.' },
  ];

  return (
    <div className="space-y-20 pb-16">
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-white py-20 lg:py-32 overflow-hidden border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 shadow-sm">
              <HeartPulse className="w-4 h-4 text-cyan-600 animate-bounce" /> Leading Healthcare Provider
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Health, <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Our Priority</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              HealthSphere Hospital combines compassionate care with cutting-edge medical technology to deliver unmatched diagnostic, surgical, and therapeutic excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link to="/appointment" className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2 group">
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-800 font-semibold px-8 py-4 rounded-xl shadow-md border border-slate-200 transition-all text-center flex items-center justify-center gap-2">
                <Ambulance className="w-4 h-4 text-red-600" />
                <span>Emergency Support</span>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Hospital Building and Doctors" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium text-cyan-300">State of the Art Facilities</p>
                  <p className="text-xl font-bold">Equipped for Comprehensive Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why Choose HealthSphere</h2>
          <p className="text-slate-600 mt-2">We strive to provide medical excellence with an empathetic human touch.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <div className="bg-cyan-50 p-4 rounded-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-cyan-800 rounded-3xl p-8 lg:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold">Need Immediate Medical Consultation?</h3>
            <p className="text-cyan-100 max-w-xl text-sm lg:text-base">Our specialist doctors are available for appointments throughout the week. Book your slot online instantly.</p>
          </div>
          <Link to="/appointment" className="bg-white text-cyan-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-cyan-50 transition-colors shrink-0">
            Schedule Visit Now
          </Link>
        </div>
      </section>
    </div>
  );
}