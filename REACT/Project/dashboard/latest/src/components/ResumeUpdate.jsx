import { useState } from 'react';
import { 
  Upload, Download, Trash2, Eye, CheckCircle2, AlertCircle,
  FileText, Phone, Mail, MapPin, Briefcase, BookOpen, Award
} from 'lucide-react';

const ResumeUpdate = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeData, setResumeData] = useState({
    fullName: 'Arun Kumar',
    email: 'arun.kumar@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    headline: 'Full Stack Developer | React & Node.js Expert',
    summary: 'Experienced developer with 5+ years building scalable web applications.',
    experience: [
      {
        id: 1,
        title: 'Senior Developer',
        company: 'Tech Corp',
        duration: '2021 - Present',
        description: 'Led team of 5 developers, improved performance by 40%'
      }
    ],
    education: [
      {
        id: 1,
        degree: 'B.Tech Computer Science',
        school: 'NIT Trichy',
        year: '2019'
      }
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'Git'],
    certifications: [
      { id: 1, name: 'AWS Solutions Architect', issuer: 'Amazon' }
    ]
  });

  const [showEditForm, setShowEditForm] = useState(false);
  const [formData, setFormData] = useState(resumeData);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveResume = () => {
    setResumeData(formData);
    setShowEditForm(false);
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      title: '',
      company: '',
      duration: '',
      description: ''
    };
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now(),
      degree: '',
      school: '',
      year: ''
    };
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  return (
    <div className="flex-1 overflow-y-auto px-10 py-8 bg-[#0B0F19] text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold mb-2">Resume & Profile</h1>
        <p className="text-slate-400">
          Build and maintain your professional resume. Keep it updated to increase job matches.
        </p>
      </div>

      {/* Alert */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8 flex items-start gap-3">
        <CheckCircle2 className="text-green-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-semibold text-green-400">Profile Complete (85%)</p>
          <p className="text-sm text-slate-400">Add certifications to reach 100%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Resume Editor */}
        <div className="lg:col-span-2">
          {!showEditForm ? (
            <>
              {/* Resume Preview */}
              <div className="bg-[#1C212E] rounded-2xl border border-[#2A3143] p-8 mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold">{resumeData.fullName}</h2>
                    <p className="text-[#818CF8] text-lg mt-1">{resumeData.headline}</p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData(resumeData);
                      setShowEditForm(true);
                    }}
                    className="px-6 py-2 bg-[#818CF8] hover:bg-[#6366F1] rounded-lg font-semibold transition"
                  >
                    Edit Profile
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-[#2A3143]">
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-slate-400" />
                    <span className="text-slate-300">{resumeData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-slate-400" />
                    <span className="text-slate-300">{resumeData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-slate-400" />
                    <span className="text-slate-300">{resumeData.location}</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <FileText size={20} />
                    Professional Summary
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{resumeData.summary}</p>
                </div>

                {/* Experience */}
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Briefcase size={20} />
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {resumeData.experience.map((exp) => (
                      <div key={exp.id} className="bg-[#151A28] p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-lg">{exp.title}</h4>
                            <p className="text-[#818CF8]">{exp.company}</p>
                          </div>
                          <span className="text-sm text-slate-400">{exp.duration}</span>
                        </div>
                        <p className="text-slate-400 text-sm">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <BookOpen size={20} />
                    Education
                  </h3>
                  <div className="space-y-3">
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="bg-[#151A28] p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <p className="text-slate-400 text-sm">{edu.school}</p>
                          </div>
                          <span className="text-sm text-slate-400">{edu.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="font-bold text-lg mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Award size={20} />
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {resumeData.certifications.map((cert) => (
                      <div key={cert.id} className="bg-[#151A28] p-4 rounded-lg">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-slate-400 text-sm">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Edit Form */
            <div className="bg-[#1C212E] rounded-2xl border border-[#2A3143] p-8">
              <h3 className="text-2xl font-bold mb-6">Edit Resume</h3>

              {/* Personal Info */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg mb-4">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-[#151A28] border border-[#2A3143] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#818CF8] outline-none transition"
                  />
                  <input
                    type="text"
                    name="headline"
                    value={formData.headline}
                    onChange={handleInputChange}
                    placeholder="Professional Headline"
                    className="w-full bg-[#151A28] border border-[#2A3143] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#818CF8] outline-none transition"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full bg-[#151A28] border border-[#2A3143] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#818CF8] outline-none transition"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full bg-[#151A28] border border-[#2A3143] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#818CF8] outline-none transition"
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="w-full bg-[#151A28] border border-[#2A3143] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#818CF8] outline-none transition md:col-span-2"
                  />
                </div>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  placeholder="Professional Summary"
                  rows="4"
                  className="w-full mt-4 bg-[#151A28] border border-[#2A3143] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-[#818CF8] outline-none transition"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleSaveResume}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition"
                >
                  Save Resume
                </button>
                <button
                  onClick={() => setShowEditForm(false)}
                  className="px-6 py-3 bg-slate-600 hover:bg-slate-700 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - File Upload & Actions */}
        <div>
          {/* Upload Resume */}
          <div className="bg-[#1C212E] rounded-2xl border border-[#2A3143] p-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Resume File</h3>
            
            {!resumeFile ? (
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-[#818CF8]/30 rounded-xl p-8 cursor-pointer hover:border-[#818CF8]/60 transition">
                <Upload className="text-[#818CF8] mb-3" size={32} />
                <p className="text-center font-semibold mb-1">Upload Resume</p>
                <p className="text-xs text-slate-400 text-center">PDF, DOC, DOCX (Max 5MB)</p>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            ) : (
              <div className="space-y-4">
                <div className="bg-[#151A28] p-4 rounded-lg flex items-center gap-3">
                  <FileText className="text-[#818CF8]" size={24} />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{resumeFile.name}</p>
                    <p className="text-xs text-slate-400">{(resumeFile.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-[#818CF8] hover:bg-[#6366F1] rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition">
                    <Eye size={16} />
                    View
                  </button>
                  <button
                    onClick={() => setResumeFile(null)}
                    className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
                <button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition">
                  <Download size={16} />
                  Download
                </button>
              </div>
            )}
          </div>

          {/* Profile Stats */}
          <div className="space-y-4">
            <div className="bg-[#1C212E] rounded-2xl border border-[#2A3143] p-6">
              <h3 className="font-bold text-lg mb-4">Profile Strength</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-[#151A28] rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#818CF8] to-green-500 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" /> Complete Profile
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" /> Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle size={16} className="text-yellow-400" /> Portfolio
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-[#1C212E] rounded-2xl border border-[#2A3143] p-6">
              <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] rounded-lg font-semibold hover:bg-[#818CF8]/20 transition text-sm">
                  Download as PDF
                </button>
                <button className="w-full px-4 py-2 bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] rounded-lg font-semibold hover:bg-[#818CF8]/20 transition text-sm">
                  Share Profile Link
                </button>
                <button className="w-full px-4 py-2 bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] rounded-lg font-semibold hover:bg-[#818CF8]/20 transition text-sm">
                  View as Employer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpdate;
