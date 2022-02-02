import Footer from "components/Footer";
import LearnMore from "components/LearnMore";
import Navbar from "components/Navbar";
import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";

const data = [
  {
    question: "What are the documents needed to qualify for a home?",
    answer: "Put your answer here",
  },
  {
    question: "How old do I have to be to apply for a home?",
    answer: "Put your answer here",
  },
  {
    question: "How can I finance my new home?",
    answer: "Put your answer here",
  },
  {
    question: "Am I able to purchase a reposed home?",
    answer: "Put your answer here",
  },
  {
    question: "How can I track my application? ",
    answer: "Put your answer here",
  },
  {
    question: "What can I do if my application is rejected?",
    answer: "Put your answer here",
  },
  {
    question: "What are the next steps if my application is approved?",
    answer: "Put your answer here",
  },
];

export default function Faq() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient text-center py-5">
        <h4>FAQ&apos;s - Frequently Asked Questions</h4>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <Accordion defaultActiveKey="0">
                {data.map((item, i) => (
                  <Accordion.Item className="mb-2" key={i} eventKey={i}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="d-none d-lg-block col-lg-4">
              <Link href="/contact">
                <a className="btn btn-green w-100 mb-3">Ask A Question</a>
              </Link>
              <LearnMore />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
