import { useState } from "react";
import { Link } from "wouter";

type SurveyOption = 'spiritually-strong' | 'curious-questioning' | 'struggling-doubt' | 'one-foot-out' | 'deconstructed';

export default function Survey() {
  const [selectedOption, setSelectedOption] = useState<SurveyOption | null>(null);
  const [showResult, setShowResult] = useState(false);

  const surveyOptions = [
    {
      value: 'spiritually-strong' as SurveyOption,
      title: 'Spiritually strong',
      description: 'I have a strong faith and am growing in my relationship with God'
    },
    {
      value: 'curious-questioning' as SurveyOption,
      title: 'Curious but questioning',
      description: 'I\'m interested in faith but have many questions and uncertainties'
    },
    {
      value: 'struggling-doubt' as SurveyOption,
      title: 'Struggling with doubt',
      description: 'I have faith but I\'m wrestling with significant doubts and questions'
    },
    {
      value: 'one-foot-out' as SurveyOption,
      title: 'One foot out the door',
      description: 'I\'m seriously considering stepping away from faith'
    },
    {
      value: 'deconstructed' as SurveyOption,
      title: 'Deconstructed/left faith',
      description: 'I\'ve stepped away from faith or am in the process of deconstructing'
    }
  ];

  const messages: Record<SurveyOption, string> = {
    'spiritually-strong': "That's wonderful! Stay rooted and keep growing. Explore our latest messages for deeper insights and encouragement.",
    'curious-questioning': "Your curiosity is valuable. Honest questions lead to deeper understanding. You'll find resources here that honor your journey.",
    'struggling-doubt': "You're not alone. Many people of faith wrestle with doubt. We've gathered stories and resources for those walking through tough seasons.",
    'one-foot-out': "We understand it's not easy. We're here to listen, not judge. Take your time—there's a place for honest struggle here.",
    'deconstructed': "Thank you for your honesty. Wherever you are, you matter. Our hope is to offer understanding, not pressure. Explore freely and know you're welcome."
  };

  const selectOption = (option: SurveyOption) => {
    setSelectedOption(option);
    setTimeout(() => {
      setShowResult(true);
    }, 500);
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Where are you on your spiritual journey?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No matter where you're at, you're not alone. Select the option that best describes you.
          </p>
        </div>
        
        {!showResult ? (
          <div className="space-y-4 mb-8">
            {surveyOptions.map((option) => (
              <div
                key={option.value}
                className={`survey-option bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border-2 ${
                  selectedOption === option.value 
                    ? 'border-blue-500 bg-blue-50 selected' 
                    : 'border-transparent hover:border-blue-200'
                }`}
                onClick={() => selectOption(option.value)}
              >
                <div className="p-6 flex items-center">
                  <input 
                    type="radio" 
                    name="spiritual-journey" 
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => selectOption(option.value)}
                    className="mr-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-green-600 text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you for sharing</h2>
              <div className="text-lg text-gray-700 leading-relaxed">
                {selectedOption && messages[selectedOption]}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/latest-messages">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  <i className="fas fa-book-open mr-2"></i>
                  Latest Messages
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
