"use client";

import { useState } from "react";

const advantages = [
  {
    title: "Brand Recognition",
    description: "SCENT is already a well-known name in the beauty industry, recognized for its exceptional quality and customer service. Your salon franchise in Bangalore will benefit from this established reputation, attracting clients from day one.",
  },
  {
    title: "Comprehensive Training",
    description: "We provide extensive training programs for you and your staff, ensuring that your Salon Franchise in Bangalore operates smoothly and meets our high standards. From hair styling and skincare techniques to customer service and management, we cover it all.",
  },
  {
    title: "Marketing and Promotional Support",
    description: "Our marketing team will help you create buzz around your new Salon Franchise in Bangalore through strategic campaigns, social media promotions, and local events. This ensures a steady stream of customers eager to experience SCENT's renowned services.",
  },
  {
    title: "Proven Business Model",
    description: "With years of experience in the industry, we have developed a successful business model that reduces risk and increases profitability. When you choose a Salon Franchise in Bangalore with SCENT, you're leveraging a proven formula that works.",
  },
  {
    title: "Exclusive Access to Premium Products",
    description: "SCENT franchises have access to exclusive, high-quality beauty products that are not available to other salons. This unique offering sets your Salon Franchise in Bangalore apart, ensuring customer loyalty and repeat business.",
  },
];

const steps = [
  {
    number: "1",
    title: "Initial Consultation",
    description: "Our team will discuss your goals, budget, and location preferences to determine the best strategy for your salon franchise.",
  },
  {
    number: "2",
    title: "Franchise Agreement",
    description: "Once the terms are agreed upon, we will sign a franchise agreement that outlines your responsibilities, the support you will receive, and other key details.",
  },
  {
    number: "3",
    title: "Site Selection and Setup",
    description: "Our experts will help you choose the ideal location for your Salon Franchise in Bangalore, ensuring maximum visibility and foot traffic. We will also assist with the interior design, layout, and equipment setup to create a space that reflects the SCENT brand.",
  },
  {
    number: "4",
    title: "Training and Staffing",
    description: "Comprehensive training will be provided for you and your staff, covering all aspects of salon management, customer service, and beauty treatments.",
  },
  {
    number: "5",
    title: "Grand Opening",
    description: "We will support you with a grand opening event to create buzz and attract your first clients. From there, you will have ongoing support from our marketing, operations, and training teams.",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [advantagesIndex, setAdvantagesIndex] = useState(0);
  const [stepsIndex, setStepsIndex] = useState(0);

  const itemsPerView = {
    advantages: { mobile: 1, tablet: 2, desktop: 3 },
    steps: { mobile: 1, tablet: 1, desktop: 2 },
  };

  const handleAdvantagesPrev = () => {
    setAdvantagesIndex((prev) => {
      const maxIndex = Math.max(0, advantages.length - itemsPerView.advantages.desktop);
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const handleAdvantagesNext = () => {
    setAdvantagesIndex((prev) => {
      const maxIndex = Math.max(0, advantages.length - itemsPerView.advantages.desktop);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handleStepsPrev = () => {
    setStepsIndex((prev) => {
      const maxIndex = Math.max(0, steps.length - itemsPerView.steps.desktop);
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const handleStepsNext = () => {
    setStepsIndex((prev) => {
      const maxIndex = Math.max(0, steps.length - itemsPerView.steps.desktop);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: "Franchise Inquiry",
          message: formData.details,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({ name: "", email: "", phone: "", details: "" });
        setSubmitMessage("Thank you! We'll contact you soon.");
        setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitMessage(`Error: ${data.error || "Failed to send message. Please try again."}`);
        setTimeout(() => setSubmitMessage(""), 8000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("Something went wrong. Please try again later or contact us directly.");
      setTimeout(() => setSubmitMessage(""), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f7f7f7] text-[#1f1f2e]">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-black via-[#1a1a1a] to-black py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 text-center text-white">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 sm:w-20 bg-white/30" />
            <span className="text-pink-400 text-xl sm:text-2xl">❀</span>
            <span className="h-px w-12 sm:w-20 bg-white/30" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.1em] mb-4" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
            We'd love to hear from you. Reach out to us and let's start a conversation.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-16 py-12 sm:py-16 md:py-20">
        {/* GET IN TOUCH Section - Form Left, Contact Info Right */}
        <div className="mb-12 sm:mb-16 grid gap-8 md:grid-cols-2">
          {/* Contact Form - Left Column */}
          <div className="order-2 md:order-1 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.05)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)] transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1f1f2e] mb-2 tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                Get in Touch
                  </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-[#1f1f2e]" />
                <span className="text-pink-400 text-lg">❀</span>
                <span className="h-px w-12 bg-[#1f1f2e]" />
              </div>
              <p className="text-sm sm:text-base text-[#555]">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-light text-[#1f1f2e] mb-2 tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                  Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-[#1f1f2e] focus:border-[#1f1f2e] focus:outline-none focus:ring-2 focus:ring-[#1f1f2e]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-light text-[#1f1f2e] mb-2 tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                  Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-[#1f1f2e] focus:border-[#1f1f2e] focus:outline-none focus:ring-2 focus:ring-[#1f1f2e]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                    placeholder="your.email@example.com"
                  />
              </div>
                <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-light text-[#1f1f2e] mb-2 tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-[#1f1f2e] focus:border-[#1f1f2e] focus:outline-none focus:ring-2 focus:ring-[#1f1f2e]/10 transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                  placeholder="+91 1234567890"
                  />
              </div>
              <div>
                <label htmlFor="details" className="block text-xs sm:text-sm font-light text-[#1f1f2e] mb-2 tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base text-[#1f1f2e] focus:border-[#1f1f2e] focus:outline-none focus:ring-2 focus:ring-[#1f1f2e]/10 transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                  style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                  placeholder="Tell us about your interest in franchising..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-black px-6 py-3.5 text-sm sm:text-base font-light uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitMessage && (
                <div className={`rounded-lg p-4 ${submitMessage.includes("Error") ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"}`}>
                  <p className={`text-sm font-medium ${submitMessage.includes("Error") ? "text-red-800" : "text-green-800"}`} style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                    {submitMessage}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information - Right Column */}
          <div className="order-1 md:order-2 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)] transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1f1f2e] mb-2 tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                Contact Information
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-[#1f1f2e]" />
                <span className="text-pink-400 text-lg">❀</span>
                <span className="h-px w-12 bg-[#1f1f2e]" />
              </div>
            </div>
            <div className="space-y-6 mb-8">
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:scale-110">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-light text-gray-500 mb-1 tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'uppercase' }}>
                    Email
                  </p>
                  <a href="mailto:franchisee@scentlifestyle.com" className="text-base sm:text-lg font-light text-[#1f1f2e] hover:text-black transition-colors" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                    franchisee@scentlifestyle.com
                  </a>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:scale-110">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                </div>
                <div>
                  <p className="text-xs font-light text-gray-500 mb-1 tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'uppercase' }}>
                    Phone
                  </p>
                  <a href="tel:+919591522700" className="text-base sm:text-lg font-light text-[#1f1f2e] hover:text-black transition-colors" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                    +91 9591522700
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg sm:text-xl font-light text-[#1f1f2e] mb-4 tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-sm font-light text-[#1f1f2e]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>Monday - Tuesday</span>
                  <span className="text-sm text-[#555] font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-sm font-light text-[#1f1f2e]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>Wednesday - Friday</span>
                  <span className="text-sm text-[#555] font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-sm font-light text-[#1f1f2e]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>Saturday</span>
                  <span className="text-sm text-[#555] font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-[#1f1f2e]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>Sunday</span>
                  <span className="text-sm text-[#555] font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The SCENT Advantage Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#1f1f2e] mb-4 tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
              The SCENT Advantage for Your Salon Franchise in Bangalore
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#555] max-w-3xl mx-auto font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              When you decide to open a Salon Franchise in Bangalore with SCENT, you're not just opening a salon; you're becoming part of a brand that is synonymous with luxury, style, and cutting-edge beauty trends. Our franchise model comes with numerous benefits:
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${advantagesIndex * (100 / itemsPerView.advantages.desktop)}%)` }}
              >
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)] flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                  >
                    <div className="absolute top-0 right-0 h-32 w-32 bg-pink-50/50 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150 group-hover:bg-pink-100/50" />
                    <div className="relative">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-black text-white transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:scale-110">
                          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-light text-[#1f1f2e] tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                          {advantage.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-[#555] font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleAdvantagesPrev}
                aria-label="Previous advantage"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl font-light text-black transition-all hover:border-black hover:bg-gray-50"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleAdvantagesNext}
                aria-label="Next advantage"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl font-light text-black transition-all hover:border-black hover:bg-gray-50"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#1f1f2e] mb-4 tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
              Steps to Open Your Salon Franchise in Bangalore with SCENT
            </h2>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
              <span className="text-pink-400 text-lg sm:text-xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-[#1f1f2e]" />
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-[#555] max-w-3xl mx-auto font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              Opening a Salon Franchise in Bangalore with SCENT is a straightforward process designed to get you up and running quickly:
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${stepsIndex * (100 / itemsPerView.steps.desktop)}%)` }}
              >
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="group flex gap-6 sm:gap-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_35px_90px_rgba(0,0,0,0.12)] hover:-translate-y-1 flex-shrink-0 w-full lg:w-[calc(50%-0.75rem)]"
                  >
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 items-center justify-center rounded-full bg-black text-2xl sm:text-3xl font-light text-white transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:scale-110" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-light text-[#1f1f2e] mb-3 tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-[#555] font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleStepsPrev}
                aria-label="Previous step"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl font-light text-black transition-all hover:border-black hover:bg-gray-50"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleStepsNext}
                aria-label="Next step"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-xl font-light text-black transition-all hover:border-black hover:bg-gray-50"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Find Us Section - Hidden */}
        {/* <div className="mb-12 sm:mb-16 bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              Find Us
            </h3>
            <div className="mb-6">
              <p className="text-sm sm:text-base text-[#555] mb-2">
                <span className="font-semibold text-[#1f1f2e]">Address:</span>
              </p>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                Scent Salon | Lavelle Road, No. 67/2, 1st Floor, Opposite. 3rd Cross Lavelle Road, Bengaluru, Karnataka 560001
              </p>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-6 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=12.968992,77.59714&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, margin: 0, padding: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="SCENT Salon Location - Lavelle Road, Bengaluru"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Scent+Salon+Lavelle+Road+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-6 py-3 text-sm sm:text-base font-semibold text-black transition-all hover:bg-black hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
            <a
              href="https://maps.apple.com/?q=Scent+Salon+Lavelle+Road+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#1f1f2e] transition-all hover:border-black hover:bg-gray-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Open in Apple Maps
            </a>
          </div>
        </div> */}

        {/* Final CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-[#1a1a1a] to-black p-8 sm:p-12 md:p-16 text-center text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 sm:w-20 bg-white/30" />
              <span className="text-pink-400 text-xl sm:text-2xl">❀</span>
              <span className="h-px w-12 sm:w-20 bg-white/30" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              How to Get Started
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8 font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              If you're ready to take the first step toward owning a Salon Franchise in Bangalore, contact us today! Our team will provide you with all the information you need to make an informed decision and guide you through the process of becoming a SCENT franchisee. Don't miss this opportunity to be part of a brand that is redefining the beauty industry.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:franchisee@scentlifestyle.com"
                className="rounded-lg bg-white px-8 py-3.5 text-sm sm:text-base font-light uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
                style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
              >
                Contact Us Now
              </a>
              <a
                href="tel:+919591522700"
                className="rounded-lg border-2 border-white px-8 py-3.5 text-sm sm:text-base font-light uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
