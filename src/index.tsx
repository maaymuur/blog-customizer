import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { Page } from './components/article-page/Page';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
  const [settings, setSettings] = useState(defaultArticleState);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-family', settings.fontFamilyOption.value);
    document.documentElement.style.setProperty('--font-size', settings.fontSizeOption.value);
    document.documentElement.style.setProperty('--font-color', settings.fontColor.value);
    document.documentElement.style.setProperty('--container-width', settings.contentWidth.value);
    document.documentElement.style.setProperty('--bg-color', settings.backgroundColor.value);
  }, [settings]);

  return (
    <div
      className={clsx(styles.main)}
      style={
        {
          '--font-family': settings.fontFamilyOption.value,
          '--font-size': settings.fontSizeOption.value,
          '--font-color': settings.fontColor.value,
          '--container-width': settings.contentWidth.value,
          '--bg-color': settings.backgroundColor.value,
        } as CSSProperties
      }>
      <Page onSettingsChange={setSettings} />
      <Article />
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
