import React from 'react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const [faqs, setFaqs] = useState([
    {
      question: 'O que é a competição de lógica e programação?',
      answer: 'É uma competição onde você pode testar suas habilidades em lógica e programação, resolver problemas desafiadores e competir com outros participantes.',
      open: false
    },
    {
      question: 'Quem pode participar?',
      answer: 'Qualquer pessoa interessada em lógica e programação, desde iniciantes até programadores experientes, pode participar.',
      open: false
    },
    {
      question: 'Como faço para me inscrever?',
      answer: 'Você pode se inscrever através do nosso site, preenchendo o formulário de inscrição e seguindo as instruções fornecidas.',
      open: false
    },
    {
      question: 'Quais são os prêmios?',
      answer: 'Os prêmios variam de acordo com a categoria e o nível da competição. Detalhes específicos podem ser encontrados na página de prêmios do site.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Tem alguma dúvida?</h2><h3>Que tal sobre</h3>
                  <div className="faq-list">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className={"faq-item" + (faq.open ? " open" : "")}
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="faq-question">
                          {faq.question}
                        </div>
                        <div className="faq-answer">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
