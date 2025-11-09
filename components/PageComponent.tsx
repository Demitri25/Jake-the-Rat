
import React from 'react';
import { Page } from '../types';
import Word from './Word';

interface PageComponentProps {
  page: Page;
}

const PageComponent: React.FC<PageComponentProps> = ({ page }) => {
  return (
    <div className="text-2xl md:text-3xl leading-relaxed space-y-4">
      {page.content.map((line, lineIndex) => (
        <p key={lineIndex}>
          {line.split(' ').map((word, wordIndex, words) => (
            <React.Fragment key={wordIndex}>
              <Word text={word} />
              {wordIndex < words.length - 1 && ' '}
            </React.Fragment>
          ))}
        </p>
      ))}
    </div>
  );
};

export default PageComponent;
