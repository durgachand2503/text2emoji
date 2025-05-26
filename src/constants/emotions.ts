import { Emotion } from '../types/emotion';

export interface EmotionData {
  emoji: string;
  color: string;
  description: string;
  examples: string[];
}

export const EMOTIONS: Record<Emotion, EmotionData> = {
  anger: {
    emoji: '😠',
    color: '#EF4444',
    description: 'Feeling intense displeasure or hostility',
    examples: [
      'I can\'t stand this situation!',
      'This is absolutely frustrating!',
      'I\'m furious about what happened.',
      'This makes my blood boil!',
      'I\'ve never been so angry in my life!',
      'How dare they treat us like this!',
      'This is completely unacceptable!',
      'I\'m fed up with all of this!',
      'Their behavior is infuriating!',
      'I want to scream right now!',
      'This is the last straw!',
      'I\'m sick and tired of these excuses!',
      'Stop pushing my buttons!',
      'You\'re driving me crazy!',
      'I\'ve had enough of this nonsense!'
    ]
  },
  disgust: {
    emoji: '🤮',
    color: '#10B981',
    description: 'Feeling strong aversion or revulsion',
    examples: [
      'That\'s so gross I can\'t even look at it',
      'The smell was absolutely revolting',
      'I find that behavior completely repulsive',
      'This makes me want to throw up',
      'How disgusting can someone be?',
      'I\'m repulsed by what I just saw',
      'This is utterly nauseating',
      'What a vile and repugnant thing to do',
      'I can\'t stomach this anymore',
      'This is beyond gross',
      'The mere thought of it makes me sick',
      'How can anyone tolerate this filth?',
      'This is absolutely repellent',
      'I\'m grossed out by this whole situation',
      'That\'s the most disgusting thing I\'ve ever seen'
    ]
  },
  fear: {
    emoji: '😨',
    color: '#6366F1',
    description: 'Feeling afraid or anxious about something',
    examples: [
      'I\'m terrified about the upcoming presentation',
      'That scary movie gave me nightmares',
      'I\'m afraid of what might happen next',
      'My heart is racing with fear',
      'I can\'t stop shaking from anxiety',
      'This situation is truly frightening',
      'I\'m paralyzed with fear',
      'The thought of it terrifies me',
      'I\'m scared to death about this',
      'My worst fears are coming true',
      'I\'m having a panic attack',
      'This is absolutely terrifying',
      'I\'m dreading what comes next',
      'The fear is overwhelming me',
      'I\'ve never been so scared in my life'
    ]
  },
  joy: {
    emoji: '😂',
    color: '#F59E0B',
    description: 'Feeling happiness and delight',
    examples: [
      'This vacation is absolutely amazing!',
      'I\'m so happy about the good news!',
      'Spending time with friends brings me so much joy',
      'I can\'t stop smiling today!',
      'This is the happiest day of my life!',
      'My heart is bursting with joy!',
      'Everything is perfect right now!',
      'I\'m on cloud nine!',
      'This feeling is absolutely incredible!',
      'I\'m beaming with happiness!',
      'Life couldn\'t be better!',
      'I\'m overjoyed by this news!',
      'Pure bliss and happiness!',
      'My heart is so full right now!',
      'This moment is absolutely perfect!'
    ]
  },
  neutral: {
    emoji: '😐',
    color: '#6B7280',
    description: 'Feeling neither positive nor negative',
    examples: [
      'I don\'t have strong feelings either way',
      'It is what it is, I guess',
      'I\'m just observing without judgment',
      'Nothing special to report',
      'I\'m feeling pretty neutral about this',
      'It doesn\'t affect me either way',
      'I have no particular opinion on this',
      'I\'m completely indifferent',
      'This doesn\'t move me one way or another',
      'I\'m taking a neutral stance on this',
      'I neither like nor dislike it',
      'It\'s just another ordinary day',
      'I\'m feeling rather impartial',
      'This doesn\'t evoke any strong emotions',
      'I\'m maintaining emotional distance'
    ]
  },
  sadness: {
    emoji: '😔',
    color: '#3B82F6',
    description: 'Feeling unhappy or sorrowful',
    examples: [
      'I miss her so much it hurts',
      'Hearing that news made me feel depressed',
      'I feel so down today for no reason',
      'My heart is breaking right now',
      'I can\'t stop crying today',
      'Everything feels so hopeless',
      'I\'ve never felt so alone',
      'This pain is unbearable',
      'I\'m drowning in sorrow',
      'Life feels so empty without them',
      'I\'m struggling to keep going',
      'The sadness is overwhelming',
      'I feel completely broken inside',
      'Nothing will ever be the same',
      'I\'m lost in this darkness'
    ]
  },
  shame: {
    emoji: '😳',
    color: '#EC4899',
    description: 'Feeling embarrassed or humiliated',
    examples: [
      'I can\'t believe I did that in front of everyone',
      'That was so embarrassing I want to hide',
      'I feel so ashamed of my behavior',
      'I\'ll never live this down',
      'I\'m mortified by what happened',
      'How could I be so stupid?',
      'I\'m dying of embarrassment',
      'I wish the ground would swallow me up',
      'I can\'t face anyone after this',
      'This is the most humiliating moment ever',
      'I\'m so ashamed of myself',
      'My face is burning with embarrassment',
      'I feel like such a fool',
      'I want to disappear right now',
      'The shame is overwhelming'
    ]
  },
  surprise: {
    emoji: '😮',
    color: '#8B5CF6',
    description: 'Feeling astonished or startled by something unexpected',
    examples: [
      'I can\'t believe this is happening!',
      'This came out of nowhere!',
      'What an unexpected turn of events!',
      'I\'m completely shocked!',
      'This has taken me by surprise!',
      'I never saw this coming!',
      'My jaw just dropped!',
      'This is absolutely unbelievable!',
      'I\'m stunned by this news!',
      'What a shocking development!',
      'This has left me speechless!',
      'I\'m totally blown away!',
      'This is beyond surprising!',
      'I\'m in complete disbelief!',
      'This is the biggest surprise ever!'
    ]
  }
};