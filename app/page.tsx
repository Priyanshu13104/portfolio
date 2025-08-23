import Image from "next/image";
import CardNav from "./components/CardNav/CardNav";
import LightRays from "./components/LightRays/LightRays";

export default function Home() {
  // Card navigation data
  const cardNavItems = [
    {
      label: "Projects",
      bgColor: "#8B5CF6",
      textColor: "#FFFFFF",
      links: [
        { label: "View Projects", href: "#", ariaLabel: "View web applications" },
      ]
    },
    {
      label: "About",
      bgColor: "#1E293B",
      textColor: "#FFFFFF",
      links: [
        { label: "Resume", href: "#", ariaLabel: "Download resume" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#059669",
      textColor: "#FFFFFF",
      links: [
        { label: "Email", href: "mailto:priyanshuprajapati13@gmail.com", ariaLabel: "Send email" },
        { label: "LinkedIn", href: "#", ariaLabel: "View LinkedIn profile" },
        { label: "GitHub", href: "#", ariaLabel: "View GitHub profile" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black lg:bg-none lg:bg-black relative overflow-hidden">
      {/* Light Rays Background */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={3}
          pulsating={true}
          fadeDistance={0.9}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0.05}
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
      <main className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-8 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center">
            {/* Content */}
            <div className="flex-1">
              {/* Main Heading */}
              <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hey, I'm <span className="text-purple-400">Priyanshu</span>
                </h1>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">A </span>
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                    Software Developer
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="mb-6 sm:mb-8">
                <p className="text-white text-lg sm:text-xl font-medium mb-2">
                  A fullstack developer with solid foundations in <span className="font-bold">design</span>.
                </p>
                <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
                  passionate about crafting seamless user experiences I thrive at the intersection
                  <span className="hidden sm:inline"><br /></span>
                  <span className="sm:hidden"> </span>of creativity and functionality.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
                <div className="flex flex-row gap-3 w-full md:w-auto md:gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-black/30 hover:bg-black/40 text-white px-4 md:px-5 py-2.5 rounded-md border border-gray-600/30 transition-all duration-300 flex-1 md:flex-none md:w-auto">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <span className="text-sm">Contact Me</span>
                  </button>

                  <button className="flex items-center justify-center space-x-2 bg-black/30 hover:bg-black/40 text-white px-4 md:px-5 py-2.5 rounded-md border border-gray-600/30 transition-all duration-300 flex-1 md:flex-none md:w-auto">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-sm">View Projects</span>
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 md:ml-4">
                  <div className="hidden md:block w-px h-5 bg-gray-500"></div>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors p-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    
                    <a href="#" className="text-gray-400 hover:text-white transition-colors p-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
