import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Get in Touch</span>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Contact HealthSphere</h1>
        <p className="text-slate-600">We are here to answer your queries and provide emergency assistance 24/7.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className="bg-cyan-50 p-3 rounded-xl text-cyan-600"><MapPin className="w-6 h-6" /></div>
              <h3 className="font-semibold text-slate-900 text-sm">Address</h3>
              <p className="text-slate-500 text-xs">123 Healthcare Ave, Medical District, City</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className="bg-cyan-50 p-3 rounded-xl text-cyan-600"><Phone className="w-6 h-6" /></div>
              <h3 className="font-semibold text-slate-900 text-sm">Phone</h3>
              <p className="text-slate-500 text-xs">+1 (800) 555-HEALTH / 108</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className="bg-cyan-50 p-3 rounded-xl text-cyan-600"><Mail className="w-6 h-6" /></div>
              <h3 className="font-semibold text-slate-900 text-sm">Email</h3>
              <p className="text-slate-500 text-xs">support@healthsphere.org</p>
            </div>
          </div>

          <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-200 flex items-center justify-center">
            <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
              <iframe 
                title="Google Map Placeholder"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0040708682046!2d77.5945627748535!3d12.97159871487667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%25Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 opacity-80" 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
          {sent ? (
            <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-cyan-600 mx-auto" />
              <h4 className="font-bold text-slate-900 text-lg">Message Sent!</h4>
              <p className="text-slate-600 text-sm">Thank you for reaching out. Our support team will get back to you shortly.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-2 text-cyan-600 font-semibold text-sm">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required 
                  value={form.name} 
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={form.email} 
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  required 
                  value={form.message} 
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  placeholder="How can we help you?" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm mt-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}