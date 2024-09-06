import { useState } from "react";
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <hr />
    <section className="py-16 bg-purple-50">
        
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          <h1 className="text-3xl font-bold mb-8 md:mb-0 md:w-1/3">Your most popular FAQs</h1>
          <div className="space-y-4 md:w-2/3">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item bg-white p-4 rounded-lg shadow-lg">
                <div
                  className={`faq-question flex justify-between items-center cursor-pointer ${openIndex === index ? 'font-bold' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
                </div>
                {openIndex === index && (
                  <div className="faq-content mt-2 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <hr />
    </>
    
  );
};

const faqData = [
  {
    question: 'Is it safe to use AI therapy notes?',
    answer: 'Yes, it is safe to use AI therapy notes. Our system ensures that all data is encrypted and securely stored.',
  },
  {
    question: 'Will your AI therapist replace Human therapist?',
    answer: 'No, our AI therapist is designed to complement human therapists, not replace them. It provides immediate support and can refer you to professional therapists when needed.',
  },
  {
    question: 'How do you make sure that your client data stays private?',
    answer: 'We use advanced encryption methods to ensure that all client data is kept private and secure. Only authorized personnel have access to the data.',
  },
  {
    question: 'Is MindMend free to use?',
    answer: 'MindMend offers both free and premium plans. The free plan includes basic features, while the premium plan provides additional benefits and services.',
  },
];

export default Faqs;


