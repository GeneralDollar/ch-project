import React, { useState } from 'react';
import PageHeader from '../components/PageHeader.tsx';
import SectionTitle from '../components/SectionTitle.tsx';

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: 'What are your shipping options?',
    answer: 'We offer a variety of shipping options to meet your needs, including standard ground, expedited, and overnight shipping. Costs and delivery times vary depending on the option selected and your location. You can see all available options at checkout.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee on most items. If you are not completely satisfied with your purchase, you can return it for a full refund or exchange. Please visit our Shipping & Returns page for full details and instructions.',
  },
  {
    question: 'How do I know if a part will fit my vehicle?',
    answer: 'We recommend using our vehicle selection tool at the top of the page to filter for parts that are compatible with your specific make, model, and year. For further assistance, our team of experts is happy to help you confirm fitment via phone or email.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to many countries worldwide. International shipping rates and times vary. Please proceed to checkout and enter your address to see available shipping options and costs for your location.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), as well as PayPal and other secure payment methods. All transactions are encrypted for your security.',
  },
];

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-light-gray transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-poppins font-medium text-primary">{faq.question}</h3>
        <span className="text-accent text-xl transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
          <i className="fas fa-plus"></i>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="p-6 text-gray text-base leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};


const FAQPage: React.FC = () => {
  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <PageHeader title="Frequently Asked Questions" breadcrumb="FAQ" />
      <section className="py-20">
        <div className="container mx-auto px-4">
            <SectionTitle>Your Questions, Answered</SectionTitle>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {faqData.map((faq, index) => (
                    <FAQItem key={index} faq={faq} />
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
