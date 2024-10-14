/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef, useEffect } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { ArticleParamsForm } from 'components/article-params-form';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { OptionType, defaultArticleState } from 'src/constants/articleProps';

export const Page = ({ onSettingsChange }: { onSettingsChange: (settings: typeof defaultArticleState) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Переименовали переменные
  const [formSettings, setFormSettings] = useState(defaultArticleState);
  const formRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleIsMenuOpen = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (!isMenuOpen) return;
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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
        <ArrowButton onClick={handleIsMenuOpen} isOpen={isMenuOpen} />
      </div>
      <div ref={formRef}>
        <ArticleParamsForm 
          isOpen={isMenuOpen}
          onApply={applySettings}
          onReset={resetSettings}
          settings={formSettings}
        />
      </div>
    </div>
  );
};
