import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmotionResult } from '../types/emotion';
import { EMOTIONS } from '../constants/emotions';
import { Info } from 'lucide-react';

interface ResultsDisplayProps {
  result: EmotionResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  if (!result) return null;

  const { emotion, emoji, confidence, text } = result;
  const emotionData = EMOTIONS[emotion];
  
  // Format confidence as percentage
  const confidencePercent = Math.round(confidence * 100);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={text.substring(0, 20)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto mt-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div 
            className="p-6 border-b border-gray-200 dark:border-gray-700"
            style={{ backgroundColor: `${emotionData.color}20` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Emotion Analysis Result
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Text analyzed: <span className="italic">{text.length > 100 ? `${text.substring(0, 100)}...` : text}</span>
                </p>
              </div>
              <motion.div 
                className="text-4xl"
                initial={{ scale: 0.5, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
              >
                {emoji}
              </motion.div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold flex items-center">
                  <span className="capitalize">{emotion}</span> 
                  <span 
                    className="ml-2 text-sm font-normal px-2 py-1 rounded-full" 
                    style={{ 
                      backgroundColor: `${emotionData.color}20`,
                      color: emotionData.color
                    }}
                  >
                    {confidencePercent}% confidence
                  </span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {emotionData.description}
                </p>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Info size={16} className="mr-1" />
                <span>Based on machine learning analysis</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Emotion Probabilities</h4>
              {Object.entries(result.probabilities)
                .sort(([, a], [, b]) => b - a)
                .map(([emotionName, probability]) => {
                  const currentEmotion = emotionName as keyof typeof EMOTIONS;
                  const emotionColor = EMOTIONS[currentEmotion].color;
                  const percent = Math.round(probability * 100);
                  
                  return (
                    <div key={emotionName} className="flex items-center">
                      <div className="w-24 md:w-32 text-sm">
                        <span className="mr-2">{EMOTIONS[currentEmotion as keyof typeof EMOTIONS].emoji}</span>
                        <span className="capitalize">{emotionName}</span>
                      </div>
                      <div className="relative flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: emotionColor }}
                        />
                      </div>
                      <div className="w-12 text-right text-sm font-medium">{percent}%</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResultsDisplay;