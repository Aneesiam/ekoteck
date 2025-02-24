"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Recycle,
  Package,
  Handshake,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full p-3 sm:p-4 md:p-6 z-30">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl sm:text-3xl font-bold">EkoTeck</h1>

        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <nav
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-2 sm:gap-4 p-4 md:p-0 text-white text-base sm:text-lg">
            {["About", "Services", "Why Us", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block py-2 md:py-0 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Page = () => {
  // About section data
  const aboutCards = [
    {
      title: "Our Mission",
      description:
        "To revolutionize plastic recycling through innovative technology and sustainable practices, creating a cleaner future for generations to come.",
    },
    {
      title: "Materials We Handle",
      description:
        "Specialized in processing PP, LD, HD, and Raffia materials, ensuring optimal recycling solutions for various plastic types.",
    },
    {
      title: "Our Values",
      description:
        "Committed to environmental responsibility, quality excellence, and continuous innovation in plastic recycling solutions.",
    },
  ];

  // Services section data
  const services = [
    {
      title: "Collection Services",
      description:
        "Efficient and responsible collection of plastic waste from businesses, with streamlined logistics and tracking.",
      icon: <Recycle className="w-6 h-6 text-primary" />,
    },
    {
      title: "Trading Platform",
      description:
        "A dynamic marketplace connecting suppliers and buyers of recycled plastic materials, ensuring optimal value.",
      icon: <Package className="w-6 h-6 text-primary" />,
    },
    {
      title: "Strategic Partnerships",
      description:
        "Long-term collaboration opportunities for sustainable waste management and circular economy solutions.",
      icon: <Handshake className="w-6 h-6 text-primary" />,
    },
  ];

  // Process section data
  const process = [
    {
      title: "Collection",
      description: "Efficient gathering of plastic waste from designated collection points.",
    },
    {
      title: "Sorting & Processing",
      description: "Advanced segregation and preparation of materials by type and quality.",
    },
    {
      title: "Quality Control",
      description: "Rigorous testing to ensure materials meet recycling standards.",
    },
    {
      title: "Transformation",
      description: "Converting waste into valuable recycled products.",
    },
  ];

  // Impact section data
  const impactStats = [
    {
      value: "50,000+",
      title: "Tons Recycled",
      description: "Plastic waste successfully processed and recycled",
    },
    {
      value: "45%",
      title: "Water Saved",
      description: "Reduction in water usage through efficient processes",
    },
    {
      value: "30,000",
      title: "CO₂ Reduced",
      description: "Metric tons of carbon emissions prevented",
    },
  ];

  // Why Us section data
  const advantages = [
    "Industry-leading expertise in plastic recycling and material processing",
    "Eco-friendly solutions that reduce environmental impact and costs",
    "Transparent operations with real-time tracking and reporting",
    "Advanced technology for optimal material recovery",
    "Comprehensive support and consultation services",
  ];

  const testimonials = [
    {
      quote:
        '"EkoTeck has transformed our approach to plastic waste management. Their efficient solutions have significantly reduced our environmental impact while saving costs."',
      name: "Anees",
      title: "Sustainability Director, Omnity Industries",
    },
    {
      quote:
        '"The level of professionalism and commitment to sustainability at EkoTeck is outstanding. They\'re not just a service provider, but a true partner in our environmental journey."',
      name: "John",
      title: "Operations Manager, EcoSolutions Corp",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Recycling Visual"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-70 z-10" />
        </div>

        <Header />

        <div className="container mx-auto max-w-6xl relative z-20 pt-20 md:pt-0">
          <div className="text-center animate-fade-up">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 text-white rounded-full bg-white/10">
              Transforming Plastic Waste into Value
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white px-4">
              Revolutionizing
              <br className="hidden sm:block" />
              Plastic Recycling
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 text-white/90 px-4">
              Your trusted marketplace for sustainable plastic recycling solutions. We connect businesses to create a
              circular economy for plastic materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="button-primary w-full sm:w-auto">Join the Movement</button>
              <button className="button-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 rounded-full bg-secondary">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
              Committed to a Sustainable Future
            </h2>
            <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto px-4">
              We are revolutionizing plastic recycling through innovation and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {aboutCards.map((card, index) => (
              <div
                key={card.title}
                className="glass-panel p-6 sm:p-8 rounded-xl sm:rounded-2xl hover-scale animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{card.title}</h3>
                <p className="text-sm sm:text-base text-textSecondary">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 rounded-full bg-secondary">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
              Comprehensive Recycling Solutions
            </h2>
            <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto px-4">
              End-to-end solutions for your plastic recycling needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-panel p-6 sm:p-8 rounded-xl sm:rounded-2xl hover-scale animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 sm:mb-6 inline-block p-2 sm:p-3 bg-accent rounded-lg sm:rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-textSecondary mb-4 sm:mb-6">{service.description}</p>
                <button className="flex items-center text-primary font-medium hover:gap-2 transition-all text-sm sm:text-base">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 rounded-full bg-secondary">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">How We Work</h2>
            <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto px-4">
              Our efficient process ensures maximum value from plastic waste
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="glass-panel p-6 sm:p-8 rounded-xl sm:rounded-2xl hover-scale animate-fade-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 sm:mb-6 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-textSecondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 rounded-full bg-secondary">
              Our Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">Making a Difference</h2>
            <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto px-4">
              Together, we are creating measurable environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={stat.title}
                className="glass-panel p-6 sm:p-8 rounded-xl sm:rounded-2xl hover-scale animate-fade-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">{stat.value}</p>
                <p className="text-base sm:text-lg font-medium mb-2">{stat.title}</p>
                <p className="text-sm sm:text-base text-textSecondary">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 sm:py-20 md:py-24 px-4 bg-accent/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 rounded-full bg-secondary">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">The EkoTeck Advantage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 mb-8 sm:mb-16">
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-up p-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-textSecondary">{advantage}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6 sm:space-y-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-sm sm:text-base text-textSecondary italic mb-3 sm:mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-textSecondary">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 rounded-full bg-secondary">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">Let&apos;s Work Together</h2>
            <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto px-4">
              Ready to start your sustainability journey? We&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
            <div className="glass-panel p-6 sm:p-8 rounded-xl sm:rounded-2xl animate-fade-up order-2 md:order-1">
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                  <textarea
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 h-24 sm:h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="button-primary w-full py-2.5 sm:py-3 text-sm sm:text-base">Send Message</button>
              </form>
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div className="flex items-start gap-3 sm:gap-4 p-2">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-base sm:text-lg mb-0.5 sm:mb-1">Email Us</h3>
                  <p className="text-sm sm:text-base text-textSecondary">ekoteck32@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-2">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-base sm:text-lg mb-0.5 sm:mb-1">Call Us</h3>
                  <p className="text-sm sm:text-base text-textSecondary">+91 999-812-6775</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-2">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-base sm:text-lg mb-0.5 sm:mb-1">Visit Us</h3>
                  <p className="text-sm sm:text-base text-textSecondary">
                    Dungra, Vapi, Gujarat
                    <br />
                    India - 396193
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
