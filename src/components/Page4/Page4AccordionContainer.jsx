import React, { useState, useEffect } from 'react';

const Page4AccordionContainer = () => {

  // Med hjälp av ChatGPT
  const [faqs, setFaqs] = useState([]);
  const [open, setOpen] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
      const data = await res.json();
      setFaqs(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div id="accordion">
      <div className="accordion-wrapper">
        {faqs.map((faq, index) => (
          <div key={faq.id} className={`accordion-container middle-accordion ${open === index ? 'open' : ''}`}>
            <label className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h4>{faq.title}</h4>
              <div>
                <span className="img-span-container">
                  <i className={`fa-solid fa-chevron-down ${open === index ? 'rotated' : ''}`}></i>
                </span>
              </div>
            </label>
            <div className="content">
              <p>{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4AccordionContainer;
