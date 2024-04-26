import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer: "Yes, education flashcards can be customized to suit learners of any age, making them versatile tools for learning and revision."
    },
    {
      question: "How do education flashcards work?",
      answer: "Education flashcards work by promoting active recall, a cognitive process where the mind is prompted to remember a fact or concept without contextual clues."
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer: "Absolutely, flashcards are an effective method for memorizing key facts, dates, vocabulary, and concepts to enhance test readiness."
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col p-20'>
      <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 mb-8'>FAQ</h1>
      {faqData.map((item, index) => (
        <div key={index} className="border border-blue-500 p-3 rounded-lg mb-8 w-3/4 ">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClick(index)}>
            <p className='text-xl font-medium'>{item.question}</p>
            <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
          </div>
          {activeIndex === index && (
            <div className="mt-2">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;



