"use client";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import CardNav from "./components/CardNav/CardNav";
import LightRays from "./components/LightRays/LightRays";
import DotGrid from "./components/DotGrid/DotGrid";
import SplitText from "./components/SplitText/SplitText";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Scroll to contact section function
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // EmailJS form submission
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS Configuration
    const PUBLIC_KEY = 'vFApeiVt7jiLsqRfZ';
    const TEMPLATE_ID = 'template_xn5vqbr';
    const SERVICE_ID = 'service_ahdja8a';

    console.log('Attempting to send email with:', {
      SERVICE_ID,
      TEMPLATE_ID,
      PUBLIC_KEY: PUBLIC_KEY.substring(0, 5) + '...' // Log partial key for debugging
    });

    try {
      // Initialize EmailJS with your public key
      emailjs.init(PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
      
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      if (form.current) {
        form.current.reset(); // Clear the form
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Error details:', {
        name: (error as Error)?.name,
        message: (error as Error)?.message,
        status: (error as { status?: number })?.status,
        text: (error as { text?: string })?.text
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Card navigation data
  const cardNavItems = [
    {
      label: "Projects",
      bgColor: "#c27aff",
      textColor: "#FFFFFF",
      links: [
        { label: "View Projects", href: "/projects", ariaLabel: "View web applications" },
        { label: "Home", href: "/", ariaLabel: "Go to home page" }
      ]
    },
    {
      label: "About",
      bgColor: "#c27aff",
      textColor: "#FFFFFF",
      links: [
        { label: "Resume", href: "/Priyanshu_Prajapati_Resume.pdf", target: "_blank", download: true, ariaLabel: "Download resume" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#c27aff",
      textColor: "#FFFFFF",
      links: [
        { label: "Email", href: "mailto:priyanshuprajapati13@gmail.com", ariaLabel: "Send email" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-prajapati-8a5b5b282/", target: "_blank", ariaLabel: "View LinkedIn profile" },
        { label: "GitHub", href: "https://github.com/Priyanshu13104", target: "_blank", ariaLabel: "View GitHub profile" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black lg:bg-gradient-to-br lg:from-gray-900 lg:via-gray-800 lg:to-black lg:bg-none lg:bg-black relative overflow-hidden">
      {/* Mobile Background - DotGrid */}
      <div className="fixed inset-0 z-0 lg:hidden w-full h-full">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          speedTrigger={100}
          shockRadius={200}
          shockStrength={5}
          maxSpeed={200}
          resistance={750}
          returnDuration={0.8}
          className="w-full h-full px-0.5"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Desktop Background - Light Rays */}
      <div className="fixed inset-0 z-0 hidden lg:block">
        <LightRays
          raysOrigin="top-center"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={3}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0}
          distortion={0}
          className="opacity-30"
        />
      </div>

      {/* Card Navigation */}
      <div className="relative z-50">
        <CardNav
          logoAlt="Priyanshu Logo"
          items={cardNavItems}
          baseColor="rgba(0, 0, 0, 0.2)"
          menuColor="#FFFFFF"
          buttonBgColor="#8B5CF6"
          buttonTextColor="#FFFFFF"
          className="backdrop-blur-md"
        />
      </div>

      {/* Hero Section */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 sm:px-6 md:px-8 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div>
              {/* Main Heading */}
              <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <SplitText
                    text="Hey, I'm"
                    className="inline"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                  />
                  <span className="inline"> </span>
                  <SplitText
                    text="Priyanshu"
                    className="inline text-purple-400"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                  />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">A </span>
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                    Software Developer
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="mb-6 sm:mb-8">
                <p className="text-white text-xl sm:text-xl font-medium mb-2">
                  A fullstack developer with solid foundations in <span className="font-bold">design</span>.
                </p>
                <p className="text-gray-300 text-xl sm:text-xl leading-relaxed">
                  passionate about crafting seamless user experiences I thrive at the intersection
                  <span className="hidden sm:inline"><br /></span>
                  <span className="sm:hidden"> </span>of creativity and functionality.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
                <div className="flex flex-row gap-3 w-full md:w-auto md:gap-4">
                  <button 
                    onClick={scrollToContact}
                    className="flex items-center justify-center space-x-2 bg-black/30 hover:bg-black/40 text-white px-4 md:px-5 py-2.5 rounded-md border border-gray-600/30 transition-all duration-300 flex-1 md:flex-none md:w-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <span className="text-sm">Contact Me</span>
                  </button>

                  <button className="flex items-center justify-center space-x-2 bg-black/30 hover:bg-black/40 text-white px-4 md:px-5 py-2.5 rounded-md border border-gray-600/30 transition-all duration-300 flex-1 md:flex-none md:w-auto">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <a href="/projects" className="text-sm">View Projects</a>
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 md:ml-4">
                  <div className="hidden md:block w-px h-5 bg-gray-500"></div>
                  <div className="flex items-center gap-4">
                    <a href="https://github.com/Priyanshu13104" target="_blank" className="text-gray-400 hover:text-white transition-colors p-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/priyanshu-prajapati-8a5b5b282/" target="_blank" className="text-gray-400 hover:text-white transition-colors p-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="max-w-full mx-auto px-2 sm:px-10 lg:px-32">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Building Digital Experiences
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
              I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* What I can do Card */}
            <div className="bg-black/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">What I can do</h3>
              </div>
              <p className="text-gray-300 mb-6">
                I can help develop solutions that will help you grow your business:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Fullstack Web Development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Database Design
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  API Integration
                </li>
              </ul>
            </div>

            {/* Tools I Use Card */}
            <div className="bg-black/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Tools I Use</h3>
              </div>
              <p className="text-gray-300 mb-6">
                I use the latest tools and technologies to build functional and scalable products:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Frontend:</h4>
                  <p className="text-gray-300 text-sm">Tailwind CSS, React, Node, Next</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Backend:</h4>
                  <p className="text-gray-300 text-sm">Node.js, MongoDB</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Design:</h4>
                  <p className="text-gray-300 text-sm">Figma</p>
                </div>
              </div>
            </div>

            {/* UI/UX Design Card */}
            <div className="bg-black/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
              </div>
              <p className="text-gray-300 mb-6">
                I am a designer first, developer second. I can help design clean and modern interfaces:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  User-Centered Design
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Modern & Clean UI
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Responsive Layouts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Wireframes & Prototypes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="max-w-full mx-auto px-2 sm:px-10 lg:px-32 xl:px-40 2xl:px-48">
          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  <span className="text-purple-400">Bringing your ideas to life.</span>
                  <br />
                  <span className="text-white">Let&apos;s turn your vision into reality</span>
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  Have a project in mind or just want to chat? Let&apos;s connect!
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-4/5 xl:w-4/5 lg:ml-auto">
              <div className="bg-black/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 sm:p-8">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full bg-black/40 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      placeholder="contact@example.com"
                      className="w-full bg-black/40 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full bg-black/40 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 resize-none"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-300 text-sm">
                      ✅ Message sent successfully! I&apos;ll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">
                      ❌ Failed to send message. Please try again or contact me directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black/50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

