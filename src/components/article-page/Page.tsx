import { useState, useRef, useEffect } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { ArticleParamsForm } from 'components/article-params-form';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';

export const Page = ({ onSettingsChange }: { onSettingsChange: (settings: typeof defaultArticleState) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formSettings, setFormSettings] = useState(defaultArticleState);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleIsOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const applySettings = (settings: typeof defaultArticleState) => {
    setFormSettings(settings);
    onSettingsChange(settings);
  };

  const resetSettings = () => {
    setFormSettings(defaultArticleState);
    onSettingsChange(defaultArticleState);
  };

  return (
    <div>
      <div ref={buttonRef}>
        <ArrowButton onClick={handleIsOpen} isOpen={isOpen} />
      </div>
      <div ref={formRef}>
        <ArticleParamsForm 
          isOpen={isOpen}
          onApply={applySettings}
          onReset={resetSettings}
          settings={formSettings}
        />
      </div>
    </div>
  );
};
