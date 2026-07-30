import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Heart, Brain, Baby, Bone, Ambulance, FlaskConical, Pill } from 'lucide-react';

export default function Services() {
  const servicesList = [
    { icon: <Stethoscope className="w-8 h-8 text-cyan-600" />, title: 'General Medicine', desc: 'Comprehensive health check-ups, chronic illness management, and primary care consultations.' },
    { icon: <Heart className="w-8 h-8 text-cyan-600" />, title: 'Cardiology', desc: 'Advanced heart care including ECG, echocardiograms, angioplasty, and cardiovascular surgeries.' },
    { icon: <Brain className="w-8 h-8 text-cyan-600" />, title: 'Neurology', desc: 'Specialized diagnosis and treatment for brain, spine, and nervous system disorders.' },
    { icon: <Baby className="w-8 h-8 text-cyan-600" />, title: 'Pediatrics', desc: 'Dedicated child healthcare, vaccinations, neonatal care, and developmental monitoring.' },
    { icon: <Bone className="w-8 h-8 text-cyan-600" />, title: 'Orthopedics', desc: 'Joint replacements, fracture treatments, sports injuries, and spinal rehabilitation.' },
    { icon: <Ambulance className="w-8 h-8 text-cyan-600" />, title: 'Emergency Care', desc: '24/7 trauma center equipped with advanced life support and emergency physicians.' },
    { icon: <FlaskConical className="w-8 h-8 text-cyan-600" />, title: 'Laboratory', desc: 'Fully automated diagnostic lab providing precise blood tests, pathology, and imaging.' },
    { icon: <Pill className="w-8 h-8 text-cyan-600" />, title: 'Pharmacy', desc: 'Round-the-clock medical store stocked with authentic prescription medicines and healthcare products.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Our Medical Departments</span>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Comprehensive Healthcare Services</h1>
        <p className="text-slate-600">We offer specialized medical and surgical services backed by cutting-edge diagnostic infrastructure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesList.map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-cyan-50 p-4 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
            <div className="pt-6">
              <Link to="/appointment" className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center gap-1 group">
                <span>Book Consultation</span> &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}