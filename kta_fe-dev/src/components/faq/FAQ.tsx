import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQProps {
  question: string;
  answer: string;
}

function FAQ({ question, answer }: FAQProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isOpen ? 'ring-2 ring-blue-500' : ''}`}>
      <div 
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-700">{question}</h3>
        {isOpen ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
      </div>
      {isOpen && <div className="p-4 bg-white border-t border-gray-200">{answer}</div>}
    </div>
  );
}

export default FAQ;