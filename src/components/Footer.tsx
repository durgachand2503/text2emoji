import React from 'react';
import { Brain, Github, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Text<span className="text-indigo-600 dark:text-indigo-400">2</span>Emoji
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              An advanced AI-powered emotion detection system that analyzes text and provides emotional insights with high accuracy.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/durgachand2503" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/_durga_chand_/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                <Instagram size={20} />
              </a>
              <a href="mailto:gorantladurgachand@gmail.com" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#demo" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                  Demo
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:7675008718" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                  API Status
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Text2Emoji. All rights reserved.<br/> Created by  <a href='https://durgachand2503.github.io/portfolio/' className='creater'>Gorantla Durga Chand</a> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;