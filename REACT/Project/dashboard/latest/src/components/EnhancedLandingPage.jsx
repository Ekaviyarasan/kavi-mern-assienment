import { 
  ArrowRight, Zap, Shield, Briefcase, Users, BarChart3, 
  CheckCircle2, Star, Rocket, MessageSquare, FileText, TrendingUp,
  MapPin, Calendar, Banknote, Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EnhancedLandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Smart Job Matching',
      description: 'AI-powered job recommendations tailored to your skills and preferences',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <FileText size={32} />,
      title: 'Resume Management',
      description: 'Build and maintain a professional resume with real-time feedback',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Application Tracker',
      description: 'Track all your applications in one place with status updates',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Direct Messaging',
      description: 'Connect with employers and recruiters in real-time',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics Dashboard',
      description: 'Visualize your job search metrics and success rates',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Verified',
      description: 'Your data is protected with enterprise-grade security',
      color: 'from-red-400 to-pink-500'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Jobs' },
    { number: '10K+', label: 'Companies' },
    { number: '100K+', label: 'Happy Candidates' },
    { number: '95%', label: 'Success Rate' }
  ];

  const testimonials = [
    {
      name: 'Arun Kumar',
      role: 'Full Stack Developer',
      company: 'Tech Corp',
      text: 'Found my dream job in 2 weeks. The resume builder was incredibly helpful!',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Singh',
      role: 'Product Manager',
      company: 'StartUp Inc',
      text: 'Application tracker helped me stay organized. Highly recommended!',
      avatar: '👩‍💼'
    },
    {
      name: 'Rajesh Patel',
      role: 'Data Scientist',
      company: 'AI Solutions',
      text: 'The best job portal I\'ve used. Great interface and genuine opportunities.',
      avatar: '👨‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-lg border-b border-[#2A3143] px-8 h-20 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#818CF8] to-purple-600 rounded-lg flex items-center justify-center font-bold">
            JZ
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-purple-500 bg-clip-text text-transparent">
            Jobzenix
          </h1>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#stats" className="text-slate-300 hover:text-white transition">About</a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition">Testimonials</a>
          <button
            onClick={() => navigate('/auth')}
            className="px-6 py-2 bg-[#818CF8] hover:bg-[#6366F1] text-white rounded-lg font-semibold transition"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#818CF8]/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Find Your Dream Job
            <span className="block bg-gradient-to-r from-[#818CF8] to-purple-500 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jobzenix combines intelligent job matching, resume management, and application tracking to help you land your perfect role. Join 100,000+ successful job seekers today.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => navigate('/auth')}
              className="px-8 py-4 bg-gradient-to-r from-[#818CF8] to-purple-600 hover:from-[#6366F1] hover:to-purple-700 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              Start Searching <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/marketplace')}
              className="px-8 py-4 bg-[#1C212E] border border-[#2A3143] hover:border-[#818CF8] rounded-lg font-bold text-lg transition"
            >
              Browse Jobs
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#1C212E]/50 backdrop-blur border border-[#2A3143] rounded-lg p-6">
                <h3 className="text-3xl font-bold text-[#818CF8] mb-2">{stat.number}</h3>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-[#1C212E]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Powerful Features</h3>
            <p className="text-slate-400 text-lg">Everything you need to succeed in your job search</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-[#1C212E] border border-[#2A3143] rounded-xl p-8 hover:border-[#818CF8] hover:bg-[#1C212E]/80 transition transform hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Why Choose Jobzenix?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#818CF8]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-[#818CF8]" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Smart Recommendations</h4>
                <p className="text-slate-400">AI-powered job suggestions based on your profile and preferences</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-green-400" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Track Everything</h4>
                <p className="text-slate-400">Comprehensive application tracking with real-time updates</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Resume Building</h4>
                <p className="text-slate-400">Professional resume templates with real-time feedback</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="text-cyan-400" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Direct Messaging</h4>
                <p className="text-slate-400">Connect directly with recruiters and hiring managers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-8 bg-[#1C212E]/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">What Our Users Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#1C212E] border border-[#2A3143] rounded-xl p-8 hover:border-[#818CF8] transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    <p className="text-xs text-[#818CF8]">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-400 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#818CF8]/20 to-purple-600/20 border border-[#818CF8]/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Job?</h3>
          <p className="text-slate-400 mb-8 text-lg">Join thousands of successful job seekers using Jobzenix</p>
          <button
            onClick={() => navigate('/auth')}
            className="px-8 py-4 bg-gradient-to-r from-[#818CF8] to-purple-600 hover:from-[#6366F1] hover:to-purple-700 rounded-lg font-bold text-lg transition transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#2A3143] bg-[#0B0F19]/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Candidates</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition">My Resume</a></li>
                <li><a href="#" className="hover:text-white transition">Applications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Employers</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition">Find Talent</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2A3143] pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Jobzenix. All rights reserved. | Made with ❤️ for job seekers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedLandingPage;
