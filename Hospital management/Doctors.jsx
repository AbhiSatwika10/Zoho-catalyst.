import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award } from 'lucide-react';

export default function Doctors() {
  const doctorsList = [
    { 
      name: 'Dr. Robert Chen', 
      specialization: 'Chief Cardiologist', 
      experience: '15+ Years Experience', 
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      name: 'Dr. Sarah Jenkins', 
      specialization: 'Senior Neurologist', 
      experience: '12+ Years Experience', 
      image: 'https://images.unsplash.com/photo-1594824813589-91599387c2fb?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      name: 'Dr. Michael Vance', 
      specialization: 'Orthopedic Surgeon', 
      experience: '10+ Years Experience', 
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      name: 'Dr. Emily Watson', 
      specialization: 'Pediatrician', 
      experience: '8+ Years Experience', 
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      name: 'Dr. David Miller', 
      specialization: 'General Medicine Consultant', 
      experience: '14+ Years Experience', 
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500' 
    },
    { 
      name: 'Dr. Lisa Wong', 
      specialization: 'Emergency Specialist', 
      experience: '9+ Years Experience', 
      image: 'https://images.unsplash.com/photo-1594824813597-91599387c2fb?auto=format&fit=crop&q=80&w=500' 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-cyan-600 font-semibold text-sm tracking-wider uppercase">Expert Medical Team</span>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Meet Our Specialist Doctors</h1>
        <p className="text-slate-600">Dedicated professionals committed to providing personalized and effective healthcare.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctorsList.map((doc, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group">
            <div className="h-72 overflow-hidden relative">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-800 flex items-center gap-1 shadow">
                <Award className="w-3.5 h-3.5 text-cyan-600" /> {doc.experience}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                <p className="text-cyan-600 font-medium text-sm mt-1">{doc.specialization}</p>
              </div>
              <Link to="/appointment" className="w-full bg-cyan-50 hover:bg-cyan-600 hover:text-white text-cyan-800 font-semibold py-3 rounded-xl transition-all text-center flex items-center justify-center gap-2 text-sm shadow-sm">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}