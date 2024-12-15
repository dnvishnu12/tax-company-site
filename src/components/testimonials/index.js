"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    text: "Thank you very much for the awesome job. They did an amazing job. I'm glad I picked you as my tax consultant. I don't have much knowledge on filing Tax in US. I consulted them to get an Amendment done. These guys really know their stuff. Gangaraju/Swarna team was very professional in their approach, very attentive and always available to clarify any doubts I had in the process. I simply had nothing to worry about. They handled all the inquiries from IRS in the best possible manner. I highly recommend them and will work with them in future.",
    author: "- Vishwa Seneviratne",
  },
  {
    text: "My personal experience with the team during my tax filing process in US since 2017. The team is really awesome and provided great assistance each time to file US Tax promptly. RightTaxMate new portal is robust, fast, easy. During '2019 US Tax filing', I have observed security factors are increased and this implementation boosts my confidence to the next level. I am so happy. Portal displays the user-friendly interactive short and clear questions, easy to follow for me and complete the process in a few clicks. I appreciate team members are so polite, good listeners and promptly provided incredible support as and when needed. Keep up the great work and service as always.",
    author: "- Hariharasudhan",
  },
  {
    text: "We had a wonderful and seamless experience filing our tax return with Janaki's help. She is aware of the nuances of tax returns given my wife was on a non W2 and moved states, etc. She also gives suggestions on future tax return optimization when asked. They also have a nice secure website to upload documents and interact with the team. The process from beginning to end was a breeze and we would recommend Janaki and the Right Tax Mate team anytime!",
    author: "- Barath Venkatesh",
  },
  {
    text: "My personal tax returns were completed, and filed. I have also paid the fee involved. Siddesh did a great job. He communicated with me clearly, received and reviewed the supporting documents quickly, followed up with me on my questions, and completed the return in a short period of time. He was thorough and professional in his interactions with me. This was my first experience with you guys, but based on Siddesh's work, I am fully inclined to recommend you guys for tax related work to my friends and others in my network.",
    author: "- Atma Ram",
  },
  {
    text: "I have been working with Nirmala for the last 2 years and she has been spot on when helping me with tax returns. She ensures that I have a hassle-free process and has been very prompt in answering any queries that I had. Quick turnaround, knowledgeable and very efficient. Highly recommended! Gangaraju has the right team in place.",
    author: "- Nasar Shammasi",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) =>
        prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === testimonials.length - 1 ? 0 : prevTestimonial + 1
    );
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">

        <h2 className="text-pretty text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Our Testimonials
        </h2>

        <figure className="mt-10 h-100 sm:h-96 flex flex-col justify-center items-center overflow-hidden">
          <blockquote className="text-center text-lg font-medium text-gray-900">
            <p>{testimonials[currentTestimonial].text}</p>
          </blockquote>
          <figcaption className="mt-4 text-center">
            <div className="text-sm font-semibold text-gray-900">{testimonials[currentTestimonial].author}</div>
          </figcaption>
        </figure>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={goToPreviousTestimonial}
            className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={goToNextTestimonial}
            className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
