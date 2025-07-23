import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Code, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Building2,
  Heart,
  Scale,
  ShoppingCart,
  DollarSign,
  Video
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that engages customers 24/7'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline operations with smart automation solutions'
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom applications powered by cutting-edge technology'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights'
    }
  ];

  const industries = [
    { icon: Building2, name: 'Real Estate', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, name: 'Healthcare', color: 'from-red-500 to-pink-500' },
    { icon: Scale, name: 'Legal', color: 'from-purple-500 to-indigo-500' },
    { icon: ShoppingCart, name: 'E-commerce', color: 'from-green-500 to-emerald-500' },
    { icon: DollarSign, name: 'Finance', color: 'from-yellow-500 to-orange-500' },
    { icon: Video, name: 'Content Creation', color: 'from-pink-500 to-rose-500' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Yunara AI transformed our customer service with their chatbot solution. Response time improved by 80%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      text: 'The automation workflows saved us 20 hours per week. ROI was immediate and substantial.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Legal Partners LLC',
      text: 'Their AI solutions streamlined our document processing. Highly recommend their expertise.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Startups Served' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'AI Experts' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-transparent to-blue-900/80"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl animate-bounce delay-500"></div>
        
        {/* Network Mesh Effect */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="rgba(147, 51, 234, 0.5)"/>
                <line x1="50" y1="50" x2="100" y2="50" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1"/>
                <line x1="50" y1="50" x2="50" y2="100" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6"
              >
                <span className="text-purple-300 text-sm font-medium">🚀 Next-Gen AI Solutions</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">Next-Gen AI</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent relative">
                  Automations.
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse"></div>
                </span>
                <br />
                <span className="text-white">Scalable</span>{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative">
                  Intelligence.
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse delay-500"></div>
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent relative">
                  Real Impact.
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400 animate-pulse delay-1000"></div>
                </span>
              </h1>
              
              <div className="mb-8">
                <p className="text-lg md:text-xl text-purple-300 mb-4 font-medium">
                  ⚡ Power your business with tailored AI agents, automation frameworks, and custom SaaS platforms — all built for scale.
                </p>
                
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At <span className="text-purple-400 font-semibold">Yunara AI</span>, we're more than just an agency — we're your <span className="text-blue-400 font-semibold">AI innovation partner</span>.
                    <br />
                    From smart agent systems to workflow automation, Web3-ready SaaS tools, and on-demand AI talent,
                    <br />
                    we deliver <span className="text-cyan-400 font-semibold">tech that evolves with your vision</span>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 flex items-center space-x-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">⚙️ View Services</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center space-x-2"
                  >
                    <span>🚀 Book Free Strategy Call</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* AI Collaboration Visual */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <img
                  src="/image copy.png"
                  alt="AI Human Collaboration"
                  className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl border border-purple-500/30"
                />
                
                {/* Overlay Tech Elements */}
                <div className="absolute inset-0 z-20 rounded-3xl overflow-hidden">
                  {/* Rotating Mesh Globe */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-cyan-400/50 rounded-full animate-spin">
                    <div className="absolute inset-2 border border-cyan-400/30 rounded-full"></div>
                    <div className="absolute inset-4 bg-cyan-400/20 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Dynamic Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)"/>
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)"/>
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse"/>
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse delay-500"/>
                  </svg>
                  
                  {/* AI Nodes */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center"
              >
                <div className="text-2xl">🤖</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm border border-blue-400/30 flex items-center justify-center"
              >
                <div className="text-xl">⚡</div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+</div>
              <div className="text-purple-300 text-sm">Startups Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">98%</div>
              <div className="text-blue-300 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-green-300 text-sm">AI Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">50+</div>
              <div className="text-yellow-300 text-sm">AI Experts</div>
            </div>
          </div>
        </div>
      </motion.div> 
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects delivered by our full-stack AI consulting agency
            </p>
          </motion.div>

          {/* Featured Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-center text-gray-500 mb-8">Trusted by industry leaders</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[
                'TechStart Inc.', 'StyleHub Fashion', 'MedCare Clinics', 
                'Capital Investments', 'Premier Realty', 'Creative Studios'
              ].map((company, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300">
                    <span className="text-gray-600 font-semibold text-xs group-hover:text-purple-600">{company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                company: 'StyleHub Fashion',
                project: 'AI Shopping Assistant',
                problem: 'Low conversion rates and slow customer response times',
                result: '180% increase in conversion rate',
                description: 'AI chatbot transformed their customer experience with personalized recommendations',
                metric: '180%',
                category: 'E-commerce',
                technologies: ['NLP', 'Machine Learning', 'React', 'API Integration'],
                testimonial: 'The AI chatbot transformed our customer experience completely.',
                author: 'Sarah Johnson, CEO'
              },
              {
                company: 'MedCare Clinics',
                project: 'Patient Automation System',
                problem: 'Manual processes causing long patient wait times',
                result: '40% reduction in wait times',
                description: 'Automated patient intake and triage system streamlined operations',
                metric: '40%',
                category: 'Healthcare',
                technologies: ['Process Automation', 'HIPAA Compliance', 'Mobile App', 'Database'],
                testimonial: 'Our clinic operations were revolutionized overnight.',
                author: 'Dr. Michael Chen, Director'
              },
              {
                company: 'Capital Investments',
                project: 'Financial Analytics Platform',
                problem: 'Time-consuming manual financial analysis processes',
                result: '75% faster risk assessment',
                description: 'AI-powered analytics platform with predictive modeling capabilities',
                metric: '75%',
                category: 'Finance',
                technologies: ['Python', 'Machine Learning', 'Data Visualization', 'Cloud'],
                testimonial: 'We now make faster, more informed investment decisions.',
                author: 'Lisa Rodriguez, Investment Director'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-purple-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                  <div className="text-3xl font-bold text-purple-600">{story.metric}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-3">{story.project}</h4>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Problem:</span>
                    <p className="text-sm text-gray-600">{story.problem}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Result:</span>
                    <p className="text-sm font-semibold text-green-600">{story.result}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{story.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white text-gray-600 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="bg-white/50 rounded-lg p-4 mb-4">
                  <p className="text-sm italic text-gray-700 mb-2">"{story.testimonial}"</p>
                  <p className="text-xs font-medium text-purple-600">— {story.author}</p>
                </div>
                
                <div className="flex items-center text-purple-600 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/our-work"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Startups Served' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '50+', label: 'AI Experts' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 flex items-center space-x-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Book a Free Strategy Call</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                  >
                    View Services
                  </Link>
                </motion.div>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-12 flex items-center space-x-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-purple-300 text-sm">Startups Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-purple-300 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-purple-300 text-sm">AI Support</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Dashboard Visual */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl"></div>
                
                {/* Dashboard Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-purple-400 text-sm font-mono">AI Dashboard</div>
                  </div>
                  
                  {/* Analytics Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 rounded-xl p-4 border border-purple-500/30">
                      <div className="text-purple-300 text-sm mb-1">Active Agents</div>
                      <div className="text-2xl font-bold text-white">24</div>
                      <div className="text-green-400 text-xs">↗ +12%</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl p-4 border border-blue-500/30">
                      <div className="text-blue-300 text-sm mb-1">Automations</div>
                      <div className="text-2xl font-bold text-white">156</div>
                      <div className="text-green-400 text-xs">↗ +28%</div>
                    </div>
                  </div>
                  
                  {/* AI Agent Visualization */}
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-4 border border-cyan-500/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">AI Assistant</div>
                        <div className="text-cyan-400 text-sm">Processing requests...</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="text-gray-300 text-sm">Lead qualification: 94% accuracy</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="text-gray-300 text-sm">Customer support: 2.3s response</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <div className="text-gray-300 text-sm">Data analysis: Real-time insights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 blur-sm"
              ></motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-40 blur-sm"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects delivered by our full-stack AI consulting agency
            </p>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
              {[
                'TechStart Inc.', 'StyleHub Fashion', 'MedCare Clinics', 
                'Capital Investments', 'Premier Realty', 'Creative Studios'
              ].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-gray-500 font-semibold text-sm">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                company: 'StyleHub Fashion',
                result: '180% increase in conversion rate',
                description: 'AI chatbot transformed their customer experience',
                metric: '180%',
                category: 'E-commerce'
              },
              {
                company: 'MedCare Clinics',
                result: '40% reduction in wait times',
                description: 'Automated patient intake and triage system',
                metric: '40%',
                category: 'Healthcare'
              },
              {
                company: 'Capital Investments',
                result: '75% faster risk assessment',
                description: 'AI-powered financial analytics platform',
                metric: '75%',
                category: 'Finance'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                  <div className="text-3xl font-bold text-purple-600">{story.metric}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                <p className="text-purple-600 font-semibold mb-3">{story.result}</p>
                <p className="text-gray-600">{story.description}</p>
                <div className="mt-4 flex items-center text-purple-600 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/our-work"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Original sections continue... */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Yunara AI?</span>
              </h2>
              <div className="space-y-6">
                {[
                  'Fast Deployment - Get solutions live in days, not months',
                  'Pre-Vetted Freelancers - Access to top 1% AI talent worldwide',
                  'Custom AI Solutions - Tailored to your specific business needs',
                  '24/7 Support - Round-the-clock assistance and monitoring',
                  'Proven Results - 98% client satisfaction rate'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <Bot className="w-24 h-24 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our cutting-edge AI solutions are designed to scale with your business, 
                    providing intelligent automation and insights that drive real results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Transform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering AI solutions across diverse industries with proven expertise and measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/solutions"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl relative"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get 5 Free Automation Ideas
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Subscribe to our newsletter and receive actionable AI automation strategies for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ startups that trust Yunara AI for their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hire-experts"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Hire Experts
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Book Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;