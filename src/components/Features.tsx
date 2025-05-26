import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Lock, Sparkles, BarChart3, Lightbulb, Share2 } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + (delay * 0.1) }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Real-time Analysis",
      description: "Detect emotions from text input in milliseconds with high accuracy.",
      icon: <Zap size={24} />,
      delay: 0
    },
    {
      title: "Privacy Focused",
      description: "No data storage, all processing happens in real-time without saving inputs.",
      icon: <Lock size={24} />,
      delay: 1
    },
    {
      title: "8 Emotion Categories",
      description: "Detect joy, anger, sadness, fear, disgust, surprise, shame, and neutral emotions.",
      icon: <Sparkles size={24} />,
      delay: 2
    },
    {
      title: "Confidence Scores",
      description: "Get detailed probability scores for each emotion category.",
      icon: <BarChart3 size={24} />,
      delay: 3
    },
    {
      title: "Context Awareness",
      description: "Advanced algorithm considers context for more accurate predictions.",
      icon: <Lightbulb size={24} />,
      delay: 4
    },
    {
      title: "Easy Integration",
      description: "Simple API for integrating emotion detection into your applications.",
      icon: <Share2 size={24} />,
      delay: 5
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16" id="features">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Features & Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our emotion detection system offers powerful features to help you understand the emotional context of text.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;