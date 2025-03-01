import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const faqData = [
    {
      question: "What is wall printing?",
      answer: "Wall printing is a process that allows images and artwork to be printed directly onto walls using a vertical printer.",
    },
    {
      question: "How does the wall printing process work?",
      answer: "The printer moves along the surface and applies ink layer by layer to create a detailed and durable print.",
    },
    {
      question: "Can you print on any type of wall surface?",
      answer: "Yes, wall printing can be done on various surfaces including concrete, wood, glass, and metal.",
    },
    {
      question: "How is the cost of wall printing determined?",
      answer: "The cost depends on factors such as the size of the wall, complexity of the design, and type of surface.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <h2 className="faq-title">FAQ's</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      {/* <button className="read-more">READ MORE</button> */}
    </section>
  );
};

export default Faq;
