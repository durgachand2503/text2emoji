import { Emotion, EmotionResult } from '../types/emotion';
import { EMOTIONS } from '../constants/emotions';

// Mock dataset similar to what the model would use
const MOCK_KEYWORD_MAP: Record<string, Emotion> = {
  // Joy keywords
  'happy': 'joy',
  'wonderful': 'joy',
  'excited': 'joy',
  'delighted': 'joy',
  'joy': 'joy',
  'amazing': 'joy',
  'smile': 'joy',
  'great': 'joy',
  'excellent': 'joy',
  'love': 'joy',

  // Anger keywords
  'angry': 'anger',
  'furious': 'anger',
  'frustrated': 'anger',
  'mad': 'anger',
  'annoyed': 'anger',
  'irritated': 'anger',
  'rage': 'anger',
  'hate': 'anger',

  // Fear keywords
  'scared': 'fear',
  'afraid': 'fear',
  'terrified': 'fear',
  'fearful': 'fear',
  'panic': 'fear',
  'dread': 'fear',
  'nervous': 'fear',
  'anxious': 'fear',

  // Sadness keywords
  'sad': 'sadness',
  'depressed': 'sadness',
  'unhappy': 'sadness',
  'miserable': 'sadness',
  'heartbroken': 'sadness',
  'blue': 'sadness',
  'down': 'sadness',
  'grief': 'sadness',

  // Disgust keywords
  'disgusting': 'disgust',
  'gross': 'disgust',
  'revolting': 'disgust',
  'repulsive': 'disgust',
  'nasty': 'disgust',
  'nauseating': 'disgust',
  'sick': 'disgust',

  // Surprise keywords
  'surprised': 'surprise',
  'shocked': 'surprise',
  'astonished': 'surprise',
  'unexpected': 'surprise',
  'startled': 'surprise',
  'amazed': 'surprise',
  'wow': 'surprise',

  // Shame keywords
  'ashamed': 'shame',
  'embarrassed': 'shame',
  'humiliated': 'shame',
  'guilty': 'shame',
  'regretful': 'shame',
  'remorse': 'shame',

  // Neutral keywords
  'fine': 'neutral',
  'okay': 'neutral',
  'normal': 'neutral',
  'indifferent': 'neutral',
  'neutral': 'neutral',
  'average': 'neutral'
};

const EMOTIONS_LIST = Object.keys(EMOTIONS) as Emotion[];

// Simulates a delay to mimic API response time
const simulateDelay = async (ms: number = 500): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// A simple algorithm to determine emotion based on keywords
const analyzeText = (text: string): Emotion => {
  const words = text.toLowerCase().split(/\s+/);
  const emotionCounts: Record<Emotion, number> = {
    anger: 0,
    disgust: 0,
    fear: 0,
    joy: 0,
    neutral: 0,
    sadness: 0,
    shame: 0,
    surprise: 0
  };

  // Count occurrences of emotion keywords
  words.forEach(word => {
    // Remove punctuation
    const cleanWord = word.replace(/[^\w\s]/gi, '');
    if (cleanWord in MOCK_KEYWORD_MAP) {
      const emotion = MOCK_KEYWORD_MAP[cleanWord];
      emotionCounts[emotion]++;
    }
  });

  // Find the emotion with the highest count
  let maxEmotion: Emotion = 'neutral';
  let maxCount = 0;

  Object.entries(emotionCounts).forEach(([emotion, count]) => {
    if (count > maxCount) {
      maxCount = count;
      maxEmotion = emotion as Emotion;
    }
  });

  // If no emotion is detected, return neutral
  return maxCount > 0 ? maxEmotion : 'neutral';
};

// Generate realistic probabilities
const generateProbabilities = (primaryEmotion: Emotion): Record<Emotion, number> => {
  const probabilities: Record<Emotion, number> = {
    anger: 0,
    disgust: 0,
    fear: 0,
    joy: 0,
    neutral: 0,
    sadness: 0,
    shame: 0,
    surprise: 0
  };

  // Assign a high probability to the primary emotion (between 0.70 and 0.95)
  const primaryProb = 0.7 + Math.random() * 0.25;
  probabilities[primaryEmotion] = primaryProb;

  // Distribute the remaining probability among other emotions
  const remainingProb = 1 - primaryProb;
  const otherEmotions = EMOTIONS_LIST.filter(e => e !== primaryEmotion);
  
  // Assign random probabilities to other emotions
  let assignedProb = 0;
  otherEmotions.forEach((emotion, index) => {
    if (index === otherEmotions.length - 1) {
      // Assign the remaining probability to the last emotion
      probabilities[emotion] = remainingProb - assignedProb;
    } else {
      // Assign a random slice of the remaining probability
      const slice = Math.random() * (remainingProb - assignedProb) * 0.5;
      probabilities[emotion] = slice;
      assignedProb += slice;
    }
  });

  // Round all probabilities to 2 decimal places
  Object.keys(probabilities).forEach(key => {
    probabilities[key as Emotion] = Math.round(probabilities[key as Emotion] * 100) / 100;
  });

  return probabilities;
};

export const predictEmotion = async (text: string): Promise<EmotionResult> => {
  // Validate input
  if (!text || text.trim().length < 3) {
    throw new Error('Text must be at least 3 characters long');
  }

  // Simulate API delay
  await simulateDelay(800);

  // Analyze text to determine primary emotion
  const emotion = analyzeText(text);

  // Generate probabilities
  const probabilities = generateProbabilities(emotion);

  // Get emoji for the emotion
  const emoji = EMOTIONS[emotion].emoji;

  // Return the result
  return {
    text,
    emotion,
    emoji,
    confidence: probabilities[emotion],
    probabilities
  };
};