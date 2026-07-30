import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    age: '',
    gender: 'Male',
    department: 'General Medicine',
    doctor: 'Dr. David Miller',
    preferredDate: '',
    preferredTime: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.patientName || !formData.email || !formData.phone || !formData.preferredDate || !formData.preferredTime) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-12">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Easy Scheduling</span>
          <h1 className="text-3xl font-extrabold text-slate-900">Book an Appointment</h1>
          <p className="text-slate-600 text-sm">Fill out the form below to schedule your consultation with our expert specialists.</p>
        </div>

        {submitted ? (
          <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
            <div className="bg-cyan-600 text-white p-3 rounded-full w-fit mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Appointment Confirmed!</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm">
              Thank you, <span className="font-semibold">{formData.patientName}</span>. Your request for <span className="font-semibold">{formData.department}</span> with <span className="font-semibold">{formData.doctor}</span> on <span className="font-semibold">{formData.preferredDate} at {formData.preferredTime}</span> has been successfully booked. Our team will contact you shortly.
            </p>
            <button 
              onClick={() => { setSubmitted(false); setFormData({ patientName: '', email: '', phone: '', age: '', gender: 'Male', department: 'General Medicine', doctor: 'Dr. David Miller', preferredDate: '', preferredTime: '' }); }}
              className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl flex items-center gap-2 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Patient Name *</label>
                <input 
                  type="text" 
                  name="patientName" 
                  value={formData.patientName} 
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Age *</label>
                  <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange}
                    placeholder="Age"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Gender *</label>
                  <select 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Department *</label>
                <select 
                  name="department" 
                  value={formData.department} 
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                >
                  <option value="General Medicine">General Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Emergency Care">Emergency Care</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Doctor *</label>
                <select 
                  name="doctor" 
                  value={formData.doctor} 
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                >
                  <option value="Dr. David Miller">Dr. David Miller (General)</option>
                  <option value="Dr. Robert Chen">Dr. Robert Chen (Cardiology)</option>
                  <option value="Dr. Sarah Jenkins">Dr. Sarah Jenkins (Neurology)</option>
                  <option value="Dr. Michael Vance">Dr. Michael Vance (Orthopedics)</option>
                  <option value="Dr. Emily Watson">Dr. Emily Watson (Pediatrics)</option>
                  <option value="Dr. Lisa Wong">Dr. Lisa Wong (Emergency)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date *</label>
                <input 
                  type="date" 
                  name="preferredDate" 
                  value={formData.preferredDate} 
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time *</label>
                <input 
                  type="time" 
                  name="preferredTime" 
                  value={formData.preferredTime} 
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-500/25 transition-all text-center mt-6"
            >
              Confirm Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
}