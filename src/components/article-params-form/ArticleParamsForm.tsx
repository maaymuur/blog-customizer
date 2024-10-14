/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { OptionType, fontFamilyOptions, fontSizeOptions, backgroundColors, fontColors, contentWidthArr, defaultArticleState } from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import { Separator } from '../separator';
import { Text } from '../text';

export type ArticleParamsFormProps = {
  isOpen: boolean;
  settings: typeof defaultArticleState;
  onApply: (settings: typeof defaultArticleState) => void;
  onReset: () => void;
};

export const ArticleParamsForm = ({ isOpen, settings, onApply, onReset }: ArticleParamsFormProps) => {
  const [selectedFont, setSelectedFont] = useState<OptionType | null>(settings.fontFamilyOption);
  const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(settings.fontSizeOption);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<OptionType>(settings.backgroundColor);
  const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(settings.fontColor);
  const [selectedWidthArrSize, setWidthArrSize] = useState<OptionType>(settings.contentWidth);

  useEffect(() => {
    setSelectedFont(settings.fontFamilyOption);
    setSelectedFontSize(settings.fontSizeOption);
    setSelectedBackgroundColor(settings.backgroundColor);
    setSelectedFontColor(settings.fontColor);
    setWidthArrSize(settings.contentWidth);
  }, [settings]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onApply({
      fontFamilyOption: selectedFont || settings.fontFamilyOption,
      fontSizeOption: selectedFontSize,
      backgroundColor: selectedBackgroundColor,
      fontColor: selectedFontColor,
      contentWidth: selectedWidthArrSize,
    });
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <aside className={`${styles.container} ${isOpen ? styles.container_open : ''}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.title}>
          <Text family="open-sans" weight={800} size={25}>
            Задайте параметры
          </Text>
        </div>
        <div className={styles.fontSelector}>
          <Select
            selected={selectedFont}
            options={fontFamilyOptions}
            placeholder="Выберите шрифт"
            onChange={setSelectedFont}
            title="Шрифт"
          />
        </div>
        <div className={styles.fontSizeSelector}>
          <RadioGroup
            name="fontSize"
            options={fontSizeOptions}
            selected={selectedFontSize}
            onChange={setSelectedFontSize}
            title="Размер шрифта"
          />
        </div>
        <div className={styles.fontColors}>
          <Select
            selected={selectedFontColor}
            options={fontColors}
            placeholder='Выберите цвет шрифта'
            onChange={setSelectedFontColor}
            title='Цвет шрифта'
          />
        </div>
        <div className={styles.separator}>
          <Separator />
        </div>
        <div className={styles.backgroundColorSelector}>
          <Select
            selected={selectedBackgroundColor}
            options={backgroundColors}
            placeholder="Выберите цвет фона"
            onChange={setSelectedBackgroundColor}
            title="Цвет фона"
          />
        </div>
        <div className={styles.contentWidthArr}>
          <Select
            selected={selectedWidthArrSize}
            options={contentWidthArr}
            placeholder='Выберите тип экрана'
            onChange={setWidthArrSize}
            title='Ширина экрана'
          />
        </div>
        <div className={styles.bottomContainer}>
          <Button title='Сбросить' type='reset' onClick={handleReset} />
          <Button title='Применить' type='submit' />
        </div>
      </form>
    </aside>
  );
};
