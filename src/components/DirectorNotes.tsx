
import React from 'react';
import { Button } from '@/components/ui/button';
import { X, Film } from 'lucide-react';

interface DirectorNotesProps {
  isOpen: boolean;
  content: string;
  onClose: () => void;
}

const DirectorNotes = ({ isOpen, content, onClose }: DirectorNotesProps) => {
  return (
    <div className={`director-notes ${isOpen ? 'active' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Film className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-medium text-foreground tracking-wide">
            DIRECTOR'S NOTES
          </h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground p-1 h-auto"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="w-full h-px bg-border mb-4" />
      
      <div className="text-sm text-muted-foreground leading-relaxed font-light">
        {content || "Click on the eye icon next to any section to reveal the creative process behind the design decisions."}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground italic">
          "Every design choice tells a story. This is mine."
        </p>
      </div>
    </div>
  );
};

export default DirectorNotes;
