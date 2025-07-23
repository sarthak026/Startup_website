import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Shield, 
  CheckCircle, 
  Star,
  ArrowRight,
  User,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  FileText,
  MessageSquare
} from 'lucide-react';

const HireExperts = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const processSteps = [
    {
      icon: FileText,
      title: 'Submit Brief',
      description: 'Tell us about your project requirements and goals'
    },
    {
      icon: Users,
      title: 'Expert Matching',
      description: 'We match you with the perfect AI freelancer for your needs'
    },
    {
      icon: MessageSquare,
      title: 'Project Assignment',
      description: 'Connect with your assigned expert and kick off the project'
    },
    {
      icon: CheckCircle,
      title: 'Delivery',
      description: 'Receive your completed project with ongoing support'
    }
  ];

  const expertTypes = [
    {
      title: 'AI/ML Engineers',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
      rate: '$80-150/hr'
    },
    {
      title: 'Chatbot Developers',
      skills: ['Conversational AI', 'Bot Frameworks', 'Integration', 'Training'],
      rate: '$60-120/hr'
    },
    {
      title: 'Automation Specialists',
      skills: ['Workflow Design', 'API Integration', 'Process Optimization', 'Testing'],
      rate: '$70-130/hr'
    },
    {
      title: 'Full-Stack Developers',
      skills: ['React/Node.js', 'Python/Django', 'Cloud Deployment', 'Database Design'],
      rate: '$75-140/hr'
    },
    {
      title: 'Data Scientists',
      skills: ['Data Analysis', 'Predictive Modeling', 'Visualization', 'Statistics'],
      rate: '$85-160/hr'
    },
    {
      title: 'AI Product Managers',
      skills: ['Strategy', 'Roadmapping', 'Stakeholder Management', 'Delivery'],
      rate: '$90-170/hr'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'CTO, StartupX',
      text: 'The AI expert we hired through Yunara delivered exceptional results. Our chatbot is now handling 80% of customer inquiries.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Operations Director, RetailCorp',
      text: 'Quick turnaround and professional delivery. The automation solution saved us 30 hours per week.',
      rating: 5
    },
    {
      name: 'Mark Johnson',
      role: 'Founder, HealthTech Solutions',
      text: 'Outstanding expertise and communication. The ML model exceeded our accuracy expectations.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How does the pricing work?',
      answer: 'We operate on a transparent commission model. You pay the freelancer directly, and we charge a small platform fee for matching and project management services.'
    },
    {
      question: 'Who owns the intellectual property?',
      answer: 'You retain full ownership of all code, designs, and intellectual property created for your project. This is clearly outlined in our contracts.'
    },
    {
      question: 'Do you provide NDAs?',
      answer: 'Yes, all our freelancers sign comprehensive NDAs before accessing any project information. Your confidentiality is our priority.'
    },
    {
      question: 'What are typical project timelines?',
      answer: 'Project timelines vary based on complexity. Simple chatbots: 1-2 weeks, automation workflows: 2-4 weeks, custom AI solutions: 4-12 weeks.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'We offer project milestones and regular check-ins. If you\'re not satisfied, we\'ll work to resolve issues or match you with a different expert.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hire the Best <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Talent</span>, Fast
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We match you with top AI freelancers for any project. From chatbots to machine learning models, 
                get expert-level work delivered on time and within budget.
              </p>
              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700 font-medium">Fast Matching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Vetted Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700 font-medium">Top 1% Talent</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Project Brief</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Customer Service Chatbot"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe your project requirements, goals, and any specific features needed..."
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select budget</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush)</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Submit Project Brief</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get matched with the perfect AI expert quickly and efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Expert Network</span>
            </h2>
            <p className="text-xl text-gray-600">Access to specialized AI talent across all domains</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertTypes.map((expert, index) => (
              <motion.div
                key={expert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{expert.title}</h3>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {expert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{expert.rate}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              Client <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600">What our clients say about working with our experts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-purple-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your AI Expert?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of companies that have successfully hired through our platform
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Submit Project Brief
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HireExperts;