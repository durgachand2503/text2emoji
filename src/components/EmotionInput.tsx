import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

interface EmotionInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const EmotionInput: React.FC<EmotionInputProps> = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSubmit(text);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.form 
        onSubmit={handleSubmit} 
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to analyze emotions (e.g. 'I'm so excited about this new project!')"
          className="w-full p-4 pr-16 h-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:border-transparent text-gray-700 dark:text-gray-200 resize-none transition-all"
          disabled={isLoading}
        />
        <motion.button
          type="submit"
          className={`absolute right-3 bottom-3 p-3 rounded-full ${
            text.trim() && !isLoading
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          } transition-colors`}
          whileHover={text.trim() && !isLoading ? { scale: 1.1 } : {}}
          whileTap={text.trim() && !isLoading ? { scale: 0.9 } : {}}
          disabled={!text.trim() || isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default EmotionInput;