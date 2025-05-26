import React from 'react';
import { motion } from 'framer-motion';
import { Emotion } from '../types/emotion';
import { EMOTIONS } from '../constants/emotions';
import { Lightbulb } from 'lucide-react';

interface ExampleSuggestionsProps {
  onSelectExample: (text: string) => void;
}

const ExampleSuggestions: React.FC<ExampleSuggestionsProps> = ({ onSelectExample }) => {
  // List of emotions to display examples for
  const emotionsToShow: Emotion[] = ['joy', 'sadness', 'anger', 'surprise'];
  
  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="flex items-center mb-4">
        <Lightbulb className="w-5 h-5 mr-2 text-amber-500" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Try these examples</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {emotionsToShow.map((emotion) => (
          <motion.div
            key={emotion}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: `${EMOTIONS[emotion].color}10` }}
            onClick={() => {
              // Select a random example from this emotion
              const examples = EMOTIONS[emotion].examples;
              const randomExample = examples[Math.floor(Math.random() * examples.length)];
              onSelectExample(randomExample);
            }}
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{EMOTIONS[emotion].emoji}</span>
              <div>
                <p className="font-medium capitalize text-gray-900 dark:text-white">{emotion}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Click to try an example
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExampleSuggestions;