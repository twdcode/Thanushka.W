
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  year: string;
  role: string;
  duration: string;
  context: string;
  caseStudy?: boolean;
}

interface ProjectShowcaseProps {
  projects: Project[];
  onDirectorNotes: (content: string) => void;
  onProjectClick: (project: Project) => void;
}

const ProjectShowcase = ({ projects, onDirectorNotes, onProjectClick }: ProjectShowcaseProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="space-y-20">
      {projects.map((project, index) => (
        <div key={project.id} className="group">
          <Card 
            className="bg-transparent border-white/10 overflow-hidden cursor-pointer transition-all duration-700 hover:border-white/30"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Image Section */}
              <div className={`relative overflow-hidden letterbox ${
                index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover film-still"
                />
                
                {/* Film Caption Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-end p-8 transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-white space-y-2">
                    <p className="text-sm font-crimson italic">"{project.context}"</p>
                    <div className="flex items-center space-x-4 text-xs text-white/70">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                      <span>•</span>
                      <span>{project.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`p-8 lg:p-12 flex flex-col justify-center space-y-6 ${
                index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <div className="space-y-4">
                  <div className="text-sm text-white/60 tracking-widest">
                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-light font-crimson leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-white/80 font-light italic">
                    {project.subtitle}
                  </p>
                  
                  <div className="w-16 h-px bg-white/30" />
                </div>

                <p className="text-white/70 leading-relaxed text-lg">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-6">
                  <Button 
                    variant="ghost" 
                    className="text-white/60 hover:text-white p-0 h-auto"
                    onClick={() => onProjectClick(project)}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/40 hover:text-white/60 p-2"
                    onClick={() => onDirectorNotes(`This project showcased my approach to ${project.title.toLowerCase()}. The design challenge was to ${project.context.toLowerCase()}. I used a narrative structure to guide users through complex information, treating each screen as a scene in a larger story. The ${project.duration} timeline allowed for extensive user research and iterative testing.`)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
