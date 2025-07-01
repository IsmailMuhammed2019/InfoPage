'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Cybersecurity Analyst",
    company: "TechCorp Nigeria",
    image: "/assets/image1.jpeg",
    quote: "ICBM transformed my career. The hands-on training and industry connections helped me land my dream job within 3 months of graduation."
  },
  {
    name: "Michael Adebayo",
    role: "AI Developer",
    company: "InnovateTech Solutions",
    image: "/assets/image2.jpg",
    quote: "The AI program at ICBM was incredible. I learned cutting-edge technologies and now work on exciting projects that impact millions."
  },
  {
    name: "Fatima Hassan",
    role: "Software Engineer",
    company: "DigitalBridge Africa",
    image: "/assets/image3.jpg",
    quote: "Coming from a non-tech background, ICBM made the transition seamless. The support and mentorship were invaluable to my success."
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers through ICBM training
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-[#0066cc] to-[#0052a3] flex items-center justify-center">
                    <Quote className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>
                      <div className="font-semibold text-lg text-gray-900">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4 md:mt-0">
                      <button
                        onClick={prevTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#0066cc] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 