'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Mail, Phone, MapPin, CheckCircle, ArrowRight, MessageCircle, BarChart, BookOpen, Calculator, CreditCard, PieChart, Users } from 'lucide-react'
import Image from 'next/image'
import { ServiceModal } from './service-modal'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{ name: string; description: string; icon: React.ReactNode } | null>(null)

  const services = [
    {
      name: "Bookkeeping",
      description: "Our comprehensive bookkeeping services ensure your financial records are accurate and up-to-date. We handle everything from transaction recording to reconciliation, giving you a clear picture of your financial health.",
      icon: <BookOpen className="h-8 w-8 mb-4 text-indigo-500" />
    },
    {
      name: "Financial Reporting",
      description: "We provide detailed, easy-to-understand financial reports that give you insights into your business performance. Our reports include balance sheets, income statements, cash flow statements, and customized reports tailored to your needs.",
      icon: <BarChart className="h-8 w-8 mb-4 text-indigo-500" />
    },
    {
      name: "Tax Preparation",
      description: "Our tax experts stay current with the latest tax laws to maximize your deductions and ensure compliance. We handle personal and business tax returns, as well as planning strategies to minimize your tax liability.",
      icon: <Calculator className="h-8 w-8 mb-4 text-indigo-500" />
    },
    {
      name: "Payroll Processing",
      description: "Let us take care of your payroll needs, from calculating wages and deductions to filing payroll taxes. Our service ensures your employees are paid accurately and on time, while keeping you compliant with labor laws.",
      icon: <Users className="h-8 w-8 mb-4 text-indigo-500" />
    },
    {
      name: "Accounts Payable/Receivable",
      description: "We manage your AP/AR processes efficiently, ensuring timely payments to suppliers and prompt collection from customers. This service helps improve your cash flow and maintain good relationships with vendors and clients.",
      icon: <CreditCard className="h-8 w-8 mb-4 text-indigo-500" />
    },
    {
      name: "Financial Analysis",
      description: "Our financial analysis service provides deep insights into your business performance. We analyze trends, ratios, and key performance indicators to help you make informed decisions and strategize for growth.",
      icon: <PieChart className="h-8 w-8 mb-4 text-indigo-500" />
    }
  ]

  const testimonials = [
    { name: "John Doe", company: "Tech Innovators Inc.", quote: "Back Office Solutions has transformed our financial processes. Their expertise is unmatched!" },
    { name: "Jane Smith", company: "Global Traders Ltd.", quote: "We've seen a 30% increase in efficiency since partnering with Back Office Solutions. Highly recommended!" },
    { name: "Mike Johnson", company: "Startup Ventures", quote: "As a growing startup, their scalable solutions have been invaluable to our success." }
  ]

  const teamMembers = [
    { name: "Sarah Thompson", role: "CEO", image: "/placeholder.svg?height=200&width=200" },
    { name: "David Chen", role: "Head of Accounting", image: "/placeholder.svg?height=200&width=200" },
    { name: "Emily Rodriguez", role: "Client Relations Manager", image: "/placeholder.svg?height=200&width=200" }
  ]

  const faqs = [
    { question: "How can outsourcing benefit my business?", answer: "Outsourcing can reduce costs, improve efficiency, and allow you to focus on core business activities." },
    { question: "Is my financial data secure?", answer: "We employ state-of-the-art security measures and adhere to strict confidentiality protocols to protect your data." },
    { question: "How do you ensure accuracy in financial reporting?", answer: "We use advanced software and have a multi-tier review process to ensure the highest level of accuracy." }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-indigo-700 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">Back Office Solutions Services</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-indigo-200">Home</a>
            <a href="#services" className="hover:text-indigo-200">Services</a>
            <a href="#why-us" className="hover:text-indigo-200">Why Us</a>
            <a href="#testimonials" className="hover:text-indigo-200">Testimonials</a>
            <a href="#team" className="hover:text-indigo-200">Our Team</a>
            <a href="#contact" className="hover:text-indigo-200">Contact</a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-indigo-800 text-white p-4">
            <a href="#home" className="block py-2">Home</a>
            <a href="#services" className="block py-2">Services</a>
            <a href="#why-us" className="block py-2">Why Us</a>
            <a href="#testimonials" className="block py-2">Testimonials</a>
            <a href="#team" className="block py-2">Our Team</a>
            <a href="#contact" className="block py-2">Contact</a>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section id="home" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Accounting Outsourcing Solutions</h1>
            <p className="text-xl mb-8">Focus on your core business while we handle your financial back office</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-100">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-lg bg-white border-indigo-200 hover:border-indigo-400"
                  onClick={() => setSelectedService(service)}
                >
                  {service.icon}
                  <span className="text-lg font-semibold text-indigo-700">{service.name}</span>
                  <span className="text-sm text-gray-600 mt-2">Click to learn more</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Expertise</h3>
                <p className="text-gray-700">Our team of certified professionals brings years of experience in accounting and financial management.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Customized Solutions</h3>
                <p className="text-gray-700">We tailor our services to meet the unique needs of your business, ensuring optimal results.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Cutting-edge Technology</h3>
                <p className="text-gray-700">We leverage the latest accounting software and tools to deliver accurate and efficient services.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <p className="mb-4 italic text-gray-600">"{testimonial.quote}"</p>
                  <p className="font-semibold text-indigo-600">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-indigo-600">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Get in Touch</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" className="border-indigo-200 focus:border-indigo-500" />
                  <Input type="email" placeholder="Your Email" className="border-indigo-200 focus:border-indigo-500" />
                  <Input type="text" placeholder="Subject" className="border-indigo-200 focus:border-indigo-500" />
                  <textarea
                    className="w-full p-3 border rounded-md border-indigo-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows={4}
                    placeholder="Your Message"
                  ></textarea>
                  <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">Send Message</Button>
                </form>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Our Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4 text-indigo-500" />
                    <span className="text-gray-700">info@backofficesolutions.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-indigo-500" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-indigo-500" />
                    <span className="text-gray-700">123 Business St, Suite 100, City, State 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Back Office Solutions Services. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4">
        <Button
          size="icon"
          className="bg-indigo-600 text-white rounded-full w-12 h-12 shadow-lg hover:bg-indigo-700"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl p-4">
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">Live Chat</h3>
          <div className="h-48 bg-gray-100 rounded-md mb-2 p-2 overflow-y-auto">
            {/* Chat messages would go here */}
          </div>
          <form className="flex">
            <Input type="text" placeholder="Type your message..." className="flex-grow mr-2 border-indigo-200 focus:border-indigo-500" />
            <Button type="submit" size="icon" className="bg-indigo-600 text-white hover:bg-indigo-700">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService || { name: '', description: '', icon: null }}
      />
    </div>
  )
}