
import React, { useState, useCallback } from 'react';
import { BOOK_DATA } from './constants';
import PageComponent from './components/PageComponent';

const App: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handlePrevPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.min(BOOK_DATA.length - 1, prevIndex + 1));
  }, []);

  const currentPageData = BOOK_DATA[currentPageIndex];

  return (
    <div className="bg-gradient-to-br from-blue-200 to-purple-200 min-h-screen flex flex-col items-center justify-center p-4 text-gray-800">
      <header className="mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-700 shadow-text">
          Jake the Rat's Adventure
        </h1>
        <p className="text-center text-purple-600">Click on a word to hear it!</p>
      </header>
      
      <main className="w-full max-w-2xl flex-grow flex flex-col">
        <div className="bg-amber-50 rounded-lg shadow-2xl p-6 md:p-10 flex-grow border-4 border-white">
          <PageComponent page={currentPageData} />
        </div>
      </main>

      <footer className="w-full max-w-2xl mt-4 flex items-center justify-between">
        <button
          onClick={handlePrevPage}
          disabled={currentPageIndex === 0}
          className="px-6 py-2 bg-yellow-400 text-yellow-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
        >
          Previous
        </button>
        <span className="text-lg font-bold text-purple-700">
          Page {currentPageData.pageNumber} / {BOOK_DATA.length}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPageIndex === BOOK_DATA.length - 1}
          className="px-6 py-2 bg-green-400 text-green-900 font-bold rounded-full shadow-lg hover:bg-green-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default App;
