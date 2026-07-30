import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-cyan-500 to-blue-600 p-2 rounded-xl text-white">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">HealthSphere</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Providing state-of-the-art healthcare facilities, expert medical professionals, and compassionate care around the clock. Your well-being is our supreme mission.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#facebook" className="bg-slate-800 hover:bg-cyan-600 text-white p-2.5 rounded-full transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#twitter" className="bg-slate-800 hover:bg-cyan-600 text-white p-2.5 rounded-full transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#instagram" className="bg-slate-800 hover:bg-cyan-600 text-white p-2.5 rounded-full transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#linkedin" className="bg-slate-800 hover:bg-cyan-600 text-white p-2.5 rounded-full transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-slate-800 pb-2">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Our Services</Link></li>
            <li><Link to="/doctors" className="hover:text-cyan-400 transition-colors">Find Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-slate-800 pb-2">Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">General Medicine</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Cardiology Care</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Neurology & Brain</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Pediatric Unit</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Emergency Services</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4 border-b border-slate-800 pb-2">Emergency Contact</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>123 Healthcare Avenue, Medical District, City 560001</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>+1 (800) 555-HEALTH / 108</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>support@healthsphere.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} HealthSphere Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
}