export type Emotion = 
  | 'anger'
  | 'disgust'
  | 'fear'
  | 'joy'
  | 'neutral'
  | 'sadness'
  | 'shame'
  | 'surprise';

export interface EmotionResult {
  text: string;
  emotion: Emotion;
  emoji: string;
  confidence: number;
  probabilities: Record<Emotion, number>;
}

export interface EmotionError {
  error: string;
  message: string;
}