import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Code, Server, Database, LineChart } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface DocSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const DocSection: React.FC<DocSectionProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4">
      <motion.button
        className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 text-left"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
      >
        <div className="flex items-center">
          <div className="mr-3 text-indigo-600 dark:text-indigo-400">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
        <div>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </motion.button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-white dark:bg-gray-900">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const DocumentationSection: React.FC = () => {
  const requestCode = `fetch('/api/predict-emotion', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'I am so excited about this new project!'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`;

  const responseCode = `{
  "text": "I am so excited about this new project!",
  "emotion": "joy",
  "emoji": "😂",
  "confidence": 0.92,
  "probabilities": {
    "anger": 0.01,
    "disgust": 0.00,
    "fear": 0.02,
    "joy": 0.92,
    "neutral": 0.01,
    "sadness": 0.00,
    "shame": 0.00,
    "surprise": 0.04
  }
}`;

  const modelCode = `# Load the pre-trained model
pipe_lr = joblib.load(open("model/text_emotion.pkl", "rb"))

# Prediction function
def predict_emotions(text):
    results = pipe_lr.predict([text])
    return results[0]

# Probability function
def get_prediction_proba(text):
    results = pipe_lr.predict_proba([text])
    return results`;

  return (
    <div className="w-full max-w-4xl mx-auto py-12" id="documentation">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Technical Documentation
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learn how our AI emotion detection system works and how to integrate it into your applications.
        </p>
      </motion.div>

      <div className="space-y-6">
        <DocSection 
          title="API Reference" 
          icon={<Server size={24} />}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-lg mb-2">Endpoint</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">POST /api/predict-emotion</code>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Analyzes text input and returns detected emotion with confidence scores.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-2">Request Example</h4>
              <SyntaxHighlighter language="javascript" style={tomorrow} className="rounded-lg">
                {requestCode}
              </SyntaxHighlighter>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-2">Response Example</h4>
              <SyntaxHighlighter language="json" style={tomorrow} className="rounded-lg">
                {responseCode}
              </SyntaxHighlighter>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-2">Error Codes</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">400</code> - Invalid input (text too short or too long)</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">429</code> - Rate limit exceeded (max 100 requests/min)</li>
                <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">500</code> - Server error</li>
              </ul>
            </div>
          </div>
        </DocSection>

        <DocSection 
          title="Model Specifications" 
          icon={<Database size={24} />}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-lg mb-2">Algorithm</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Multinomial Naive Bayes
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Vectorization</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  TF-IDF (Term Frequency-Inverse Document Frequency)
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Feature Engineering</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Bigrams, Stop Word Removal, Lemmatization
                </p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Accuracy</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  88-92% (Depending on training data)
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-2">Model Implementation</h4>
              <SyntaxHighlighter language="python" style={tomorrow} className="rounded-lg">
                {modelCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </DocSection>

        <DocSection 
          title="Performance Metrics" 
          icon={<LineChart size={24} />}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Emotion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Precision</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Recall</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">F1-Score</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Anger</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.91</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.89</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.90</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Joy</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.93</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.96</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.95</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Sadness</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.86</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.88</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.87</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Fear</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.85</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.81</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0.83</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection 
          title="Integration Code" 
          icon={<Code size={24} />}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-lg mb-2">Frontend Integration (React)</h4>
              <SyntaxHighlighter language="jsx" style={tomorrow} className="rounded-lg">
{`import { useState } from 'react';

function EmotionAnalyzer() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/predict-emotion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to analyze"
      />
      <button onClick={analyzeText} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
      
      {result && (
        <div>
          <h3>Detected Emotion: {result.emotion} {result.emoji}</h3>
          <p>Confidence: {result.confidence * 100}%</p>
        </div>
      )}
    </div>
  );
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </DocSection>
      </div>
    </div>
  );
};

export default DocumentationSection;