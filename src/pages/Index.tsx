import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Camera, Film, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import OpeningSequence from '@/components/OpeningSequence';
import ProjectShowcase from '@/components/ProjectShowcase';
import DirectorNotes from '@/components/DirectorNotes';
import CaseStudy from '@/components/CaseStudy';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showDirectorNotes, setShowDirectorNotes] = useState(false);
  const [directorNotesContent, setDirectorNotesContent] = useState('');
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Designing for Urgency",
      subtitle: "COVID Dashboard, 2020",
      description: "When the world needed clarity in chaos, I crafted an interface that turned overwhelming data into actionable insights.",
      image: "/placeholder.svg",
      year: "2020",
      role: "Lead UX Designer",
      duration: "3 months",
      context: "Emergency response tool used by 50,000+ healthcare workers daily"
    },
    {
      id: 2,
      title: "Signals of Care",
      subtitle: "Mental Health App, 2023",
      description: "A gentle companion for those seeking support, designed with the understanding that healing begins with being truly seen.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      year: "2023",
      role: "Lead UX Designer",
      duration: "6 months",
      context: "Award-winning app with 95% user retention rate",
      caseStudy: true
    },
    {
      id: 3,
      title: "Bridging Digital Divides",
      subtitle: "Financial Inclusion Platform, 2022",
      description: "Breaking down barriers to financial services for underserved communities through intuitive, accessible design.",
      image: "/placeholder.svg",
      year: "2022",
      role: "Senior UX Designer",
      duration: "8 months",
      context: "Serving 200,000+ users across 15 countries"
    }
  ];

  const handleDirectorNotes = (content: string) => {
    setDirectorNotesContent(content);
    setShowDirectorNotes(true);
  };

  const handleProjectClick = (project: any) => {
    if (project.caseStudy) {
      setShowCaseStudy(true);
    }
  };

  if (showCaseStudy) {
    return <CaseStudy onDirectorNotes={handleDirectorNotes} />;
  }

  if (!showContent) {
    return <OpeningSequence />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 film-grain pointer-events-none z-0" />
      
      {/* Director's Notes Toggle */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-6 right-6 z-50 bg-black/50 border border-white/20 text-white hover:bg-white/10"
        onClick={() => setShowDirectorNotes(!showDirectorNotes)}
      >
        <Film className="w-4 h-4 mr-2" />
        Director's Notes
      </Button>

      {/* Main Content */}
      <div className="scroll-snap-container">
        {/* Hero Section - Opening Credits */}
        <section className="scroll-snap-section relative flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8 animate-film-open">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-light tracking-wide font-crimson animate-title-reveal">
                SARAH CHEN
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-widest text-white/80 animate-title-reveal">
                PRODUCT DESIGNER & STORYTELLER
              </p>
            </div>
            
            <div className="space-y-2 text-sm text-white/60 font-light">
              <p>EST. 2018 • SAN FRANCISCO</p>
              <p>CRAFTING EXPERIENCES THAT MOVE PEOPLE</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
            <span className="text-xs text-white/60 tracking-widest">SCROLL TO BEGIN</span>
            <ChevronDown className="w-6 h-6 text-white/40 animate-scroll-pulse" />
          </div>

          <Button
            variant="ghost"
            className="absolute bottom-8 right-8 text-white/60 hover:text-white"
            onClick={() => handleDirectorNotes("This opening sequence was inspired by the minimalist credits of art-house films. The delayed reveal creates anticipation, while the typography choices—serif for emotion, sans-serif for structure—establish the dual nature of design: both feeling and function.")}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </section>

        {/* Philosophy Section */}
        <section className="scroll-snap-section relative flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-light font-crimson text-white/90">
                Why I Design
              </h2>
              <div className="w-24 h-px bg-white/30 mx-auto" />
            </div>
            
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-white/80">
              <p>
                Every interface tells a story. Every interaction is a moment in someone's day. 
                I believe design is not just about solving problems—it's about understanding 
                the human experience that surrounds those problems.
              </p>
              
              <p>
                Like a film director, I orchestrate moments of clarity, surprise, and delight. 
                I direct attention, pace emotions, and create narratives that feel both 
                inevitable and surprising.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white/70" />
                </div>
                <h3 className="text-lg font-medium">Observation</h3>
                <p className="text-sm text-white/60">Seeing what others miss</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white/70" />
                </div>
                <h3 className="text-lg font-medium">Composition</h3>
                <p className="text-sm text-white/60">Framing the perfect moment</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white/70" />
                </div>
                <h3 className="text-lg font-medium">Direction</h3>
                <p className="text-sm text-white/60">Guiding the narrative</p>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            className="absolute bottom-8 right-8 text-white/60 hover:text-white"
            onClick={() => handleDirectorNotes("This section establishes my design philosophy through cinematic metaphors. The three pillars—Observation, Composition, Direction—mirror the director's process while explaining my UX approach. The gradual fade from black to gray creates depth without distraction.")}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </section>

        {/* Projects Section */}
        <section className="scroll-snap-section min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-6xl font-light font-crimson">
                Selected Works
              </h2>
              <div className="w-24 h-px bg-white/30 mx-auto" />
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Each project is a story of transformation—from challenge to solution, 
                from user pain to user joy.
              </p>
            </div>

            <ProjectShowcase 
              projects={projects} 
              onDirectorNotes={handleDirectorNotes}
              onProjectClick={handleProjectClick}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="scroll-snap-section relative flex items-center justify-center min-h-screen bg-gradient-to-t from-black to-gray-900">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-light font-crimson">
              Let's Create Something
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to start your next story? Let's collaborate on experiences 
              that move people and drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Full Portfolio
              </Button>
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-white/90 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Director's Notes Panel */}
      <DirectorNotes 
        isOpen={showDirectorNotes}
        content={directorNotesContent}
        onClose={() => setShowDirectorNotes(false)}
      />
    </div>
  );
};

export default Index;
