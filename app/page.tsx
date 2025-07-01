'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, GraduationCap, MapPin, Rocket, CheckCircle, Users, Calendar, Building2, Phone, ArrowRight } from 'lucide-react'
import HeroSlider from '@/components/hero-slider'
import StatsSection from '@/components/stats-section'
import TestimonialsSection from '@/components/testimonials-section'
import FeaturesSection from '@/components/features-section'
import CampusShowcase from '@/components/campus-showcase'

export default function Home() {
  const handleApplyNow = () => {
    // Open the Google Forms registration link in a new tab
    window.open('https://forms.gle/eWF1Z9RmoFX1F8ZVA', '_blank')
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Slider Background */}
      <section className="relative">
        <HeroSlider />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Globe className="w-5 h-5" />
              <span className="font-semibold">Unlock Your Future with ICBM at DBI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Enroll Today. Classes Start July 14th.
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center gap-2">
                <GraduationCap className="w-8 h-8" />
                The Intelligent Capacity Building Model (ICBM)
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Powered by SBTS Group in partnership with Digital Bridge Institute (DBI)
              </p>
              <div className="flex items-center justify-center gap-2 text-lg">
                <MapPin className="w-5 h-5" />
                <span>Available at DBI Campuses: Abuja • Lagos • Enugu • Kano • Yola</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="dbi-primary"
                className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={handleApplyNow}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* What Is ICBM Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <Rocket className="w-10 h-10 text-[#0066cc]" />
              What Is ICBM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The ICBM is a globally recognized, job-ready training program designed to make you future-ready for the digital economy. Our training prepares you for real jobs in:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              'Business Process Outsourcing (BPO)',
              'Cybersecurity & SOC (Security Operations Center)',
              'Artificial Intelligence (AI)',
              'Software Development & Digital Skills'
            ].map((track, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0066cc] to-[#0052a3] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-center text-lg">{track}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <blockquote className="text-2xl italic text-gray-800 border-l-4 border-[#0066cc] pl-6 max-w-2xl mx-auto">
              "Training doesn't cost. It pays." – That's not just our motto; it's your new reality.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Why Choose ICBM Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 flex items-center justify-center gap-3">
            <CheckCircle className="w-10 h-10 text-[#0066cc]" />
            Why Choose ICBM?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-[#0066cc]" />,
                title: 'Job Placement Focus',
                description: 'We connect training to hiring partners across Nigeria, the U.S., U.K., and Canada'
              },
              {
                icon: <GraduationCap className="w-12 h-12 text-[#0066cc]" />,
                title: 'AI-Powered Career Mapping',
                description: 'Every student gets a personalized "LifePlan GPS" career guide'
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-[#0066cc]" />,
                title: 'Affordable Training',
                description: 'Payment plans, student loans, and sponsorships available'
              },
              {
                icon: <Phone className="w-12 h-12 text-[#0066cc]" />,
                title: 'Tools Included',
                description: 'Laptops, data, meals, and even medical support in select programs'
              },
              {
                icon: <Globe className="w-12 h-12 text-[#0066cc]" />,
                title: 'Hybrid & On-Campus',
                description: 'Learn in-person or online with full support'
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Program Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 flex items-center justify-center gap-3">
            <Calendar className="w-10 h-10 text-[#0066cc]" />
            Program Details
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Next Intake', detail: 'Starting July 14, 2025' },
              { title: 'Registration Opens', detail: 'July 1, 2025' },
              { title: 'Rolling Admissions', detail: 'Multiple cohorts throughout the year' },
              { title: 'Duration', detail: '3 to 6 months, full-time and weekend options' },
              { title: 'Available at', detail: 'DBI Abuja, Lagos, Enugu, Kano, Yola' }
            ].map((detail, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#0066cc] to-[#0052a3] text-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{detail.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg opacity-90">{detail.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 flex items-center justify-center gap-3">
            <Users className="w-10 h-10 text-[#0066cc]" />
            Who Should Apply?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Youth seeking job-ready skills',
              'Graduates or undergraduates seeking certification',
              'Women, social registrants, IDPs, and persons with disabilities',
              'Diaspora returnees looking to reintegrate with new career paths'
            ].map((applicant, index) => (
              <Card key={index} className="bg-white border-l-4 border-[#0066cc] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-x-2">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-gray-800">{applicant}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Enroll Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 flex items-center justify-center gap-3">
            <CheckCircle className="w-10 h-10 text-[#0066cc]" />
            How to Enroll
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {[
              'Click the "Apply Now" Button Below',
              'Complete the ICBM Registration Form',
              'Select Your Career Track',
              'Submit Required Documents',
              'Confirm Payment or Sponsorship'
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066cc] to-[#0052a3] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-lg font-medium text-gray-800">{step}</p>
              </div>
            ))}
          </div>
          
          <Card className="bg-gradient-to-br from-[#0066cc] to-[#0052a3] text-white border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <p className="text-xl font-semibold">
                🎯 Need help? Call our admissions line or visit your nearest DBI campus.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Campus Showcase Section */}
      <CampusShowcase />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066cc] via-[#0052a3] to-[#004080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center gap-3">
            <CheckCircle className="w-10 h-10" />
            Apply Now
          </h2>
          <p className="text-xl mb-12 opacity-90">
            👉 Join the waiting list and start your journey to digital excellence
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="dbi-primary"
              className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleApplyNow}
            >
              Join Waiting List
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg opacity-80">
            &copy; 2025 ICBM at DBI. Powered by SBTS Group.
          </p>
        </div>
      </footer>
    </div>
  )
} 