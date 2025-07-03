
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play, Eye, ExternalLink, Home } from 'lucide-react';

interface CaseStudyProps {
  onDirectorNotes: (content: string) => void;
}

const CaseStudy = ({ onDirectorNotes }: CaseStudyProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 film-grain pointer-events-none z-0" />
      
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/0 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm tracking-widest text-white/60">
            CASE STUDY
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-white"
              onClick={handleBackToHome}
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/60 hover:text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
          </div>
        </div>
      </header>

      {/* Section 1: Opening Frame */}
      <section 
        data-section="0"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center max-w-5xl mx-auto px-6 space-y-8">
          <h1 className="text-5xl md:text-7xl font-light font-crimson leading-tight animate-title-reveal">
            Signals of Care
          </h1>
          <div className="w-24 h-px bg-white/30 mx-auto" />
          <h2 className="text-xl md:text-2xl font-light tracking-wide text-white/80 animate-title-reveal">
            Designing for Emotion in a Mental Health App
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto font-crimson italic">
            A UX approach to building empathy through digital design
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-xs text-white/60 tracking-widest">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-6 h-6 text-white/40 animate-scroll-pulse" />
        </div>

        <Button
          variant="ghost"
          className="absolute bottom-8 right-8 text-white/60 hover:text-white"
          onClick={() => onDirectorNotes("The opening frame uses cinematic typography hierarchy - large serif for emotion, clean sans-serif for structure. The gradient backdrop creates depth while maintaining focus on the title. The delayed reveal animation mimics film opening credits.")}
        >
          <Eye className="w-4 h-4" />
        </Button>
      </section>

      {/* Section 2: The Setup (Context) */}
      <section 
        data-section="1"
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-light font-crimson">
                The Setup
              </h3>
              <div className="w-16 h-px bg-white/30" />
            </div>
            
            <div className="space-y-6 text-lg font-light leading-relaxed text-white/80">
              <p>
                In 2023, mental health apps flooded the market, but users complained about 
                feeling overwhelmed by features, notifications, and clinical language that 
                felt cold and impersonal.
              </p>
              <p>
                Our challenge was to create a digital companion that felt genuinely caring—
                one that could provide support without adding to the user's stress.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden film-still">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=600&fit=crop" 
                alt="Person in contemplative moment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: My Role */}
      <section 
        data-section="2"
        className="min-h-screen flex items-center py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h3 className="text-3xl md:text-4xl font-light font-crimson">
              My Role
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-medium">Lead UX Designer</h4>
                <p className="text-white/70 font-light">
                  I led the end-to-end design process, from initial user research 
                  through final implementation, working closely with a team of 
                  developers and a clinical psychologist.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/80">Duration</h4>
                <p className="text-white/60">6 months (Jan - Jun 2023)</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/80">Tools Used</h4>
                <div className="flex flex-wrap gap-3">
                  {['Figma', 'Miro', 'Zoom', 'Notion', 'Principle'].map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/80">Key Responsibilities</h4>
                <ul className="space-y-2 text-white/60 font-light">
                  <li>• User research and empathy mapping</li>
                  <li>• Information architecture</li>
                  <li>• Interaction design and prototyping</li>
                  <li>• Usability testing and iteration</li>
                  <li>• Design system development</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white/80">Team</h4>
                <p className="text-white/60 font-light">
                  3 developers, 1 clinical psychologist, 1 product manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Challenge */}
      <section 
        data-section="3"
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h3 className="text-3xl md:text-4xl font-light font-crimson">
              The Challenge
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 aspect-square rounded-lg p-6 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="text-sm text-white/70">User Journey Wireframes</p>
              </div>
            </div>
            
            <div className="bg-gray-800 aspect-square rounded-lg p-6 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <p className="text-sm text-white/70">Empathy Mapping</p>
              </div>
            </div>
            
            <div className="bg-gray-800 aspect-square rounded-lg p-6 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-sm text-white/70">Information Architecture</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-light font-crimson italic text-white/90 max-w-4xl mx-auto">
              "How do we design for care without overwhelming the user?"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 5: The Storyboard (Process) */}
      <section 
        data-section="4"
        className="min-h-screen py-20 bg-black"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h3 className="text-3xl md:text-4xl font-light font-crimson">
              The Storyboard
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto" />
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              The design process unfolded like a narrative, each stage building upon the last
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              { step: "01", title: "Research", desc: "Deep user interviews with 15 mental health app users" },
              { step: "02", title: "Empathy Maps", desc: "Understanding user emotions and pain points" },
              { step: "03", title: "Low-Fi Prototypes", desc: "Rapid iteration on core user flows" },
              { step: "04", title: "User Feedback", desc: "Testing with target users for validation" },
              { step: "05", title: "High-Fi Design", desc: "Polished interfaces with emotional design language" }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-light text-white/30">{item.step}</span>
                    <div>
                      <h4 className="text-2xl font-light">{item.title}</h4>
                      <p className="text-white/60 mt-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden film-still">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/40 text-sm">Process Visual {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: The Scene (Final Design) */}
      <section 
        data-section="5"
        className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h3 className="text-3xl md:text-4xl font-light font-crimson">
              The Final Scene
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden film-still relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Play className="w-12 h-12 text-white/60 mx-auto" />
                    <p className="text-white/40 text-sm">Interaction Demo</p>
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-center">
                Gentle onboarding flow with micro-interactions
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden film-still">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/40 text-sm">Main Dashboard</span>
                </div>
              </div>
              <p className="text-white/70 text-center">
                Calming interface with emotional check-ins
              </p>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <h4 className="text-xl font-medium">Key Design Decisions</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <h5 className="font-medium text-white/90">Warm Colors</h5>
                <p className="text-sm text-white/60">Soft blues and greens to evoke calm</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-white/90">Gentle Language</h5>
                <p className="text-sm text-white/60">Conversational, non-clinical tone</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-white/90">Minimal Notifications</h5>
                <p className="text-sm text-white/60">User-controlled engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Reflections */}
      <section 
        data-section="6"
        className="min-h-screen flex items-center py-20 bg-black"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-light font-crimson">
              Reflections
            </h3>
            <div className="w-16 h-px bg-white/30 mx-auto" />
          </div>
          
          <div className="space-y-8 text-lg font-light leading-relaxed text-white/80">
            <p>
              This project taught me that designing for mental health requires a delicate balance—
              being supportive without being intrusive, helpful without being overwhelming.
            </p>
            <p>
              The biggest insight was that emotional design isn't just about aesthetics; 
              it's about understanding the user's mental state and designing interactions 
              that respect their vulnerability.
            </p>
            <p>
              If I were to do this again, I would spend even more time with users post-launch, 
              understanding how their relationship with the app evolved over time.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden film-still">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=450&fit=crop" 
                alt="Peaceful moment representing user success"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Credits */}
      <section 
        data-section="7"
        className="py-20 bg-gradient-to-t from-black to-gray-900"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-light font-crimson">
              Credits
            </h3>
            <div className="w-12 h-px bg-white/30 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-white/60">
            <div className="space-y-4">
              <h4 className="text-white/80 font-medium">Team</h4>
              <div className="space-y-1">
                <p>Sarah Chen - Lead UX Designer</p>
                <p>Dr. Maria Santos - Clinical Psychologist</p>
                <p>Alex Kim - Product Manager</p>
                <p>Development Team - TechCorp</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white/80 font-medium">Project Details</h4>
              <div className="space-y-1">
                <p>Duration: 6 months</p>
                <p>Year: 2023</p>
                <p>Platform: iOS & Android</p>
                <p>Users: 10,000+ beta testers</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <Button
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
              asChild
            >
              <a href="https://your-document-link.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Full Research Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
