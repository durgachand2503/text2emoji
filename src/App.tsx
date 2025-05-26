import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmotionInput from './components/EmotionInput';
import ResultsDisplay from './components/ResultsDisplay';
import ExampleSuggestions from './components/ExampleSuggestions';
import Features from './components/Features';
import DocumentationSection from './components/DocumentationSection';
import Footer from './components/Footer';
import { EmotionResult } from './types/emotion';
import { predictEmotion } from './services/mockApi';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EmotionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Check system preference for dark mode on load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle text submission
  const handleTextSubmit = async (text: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await predictEmotion(text);
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle example selection
  const handleExampleSelect = (text: string) => {
    handleTextSubmit(text);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 py-12" id="demo">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Try It Yourself</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Enter any text below to analyze its emotional content
            </p>
          </div>
          
          <EmotionInput onSubmit={handleTextSubmit} isLoading={isLoading} />
          
          {error && (
            <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg text-red-800 dark:text-red-300 max-w-3xl mx-auto">
              <p><strong>Error:</strong> {error}</p>
            </div>
          )}
          
          <ResultsDisplay result={result} />
          
          <ExampleSuggestions onSelectExample={handleExampleSelect} />
        </div>
        
        <Features />
        
        <DocumentationSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;