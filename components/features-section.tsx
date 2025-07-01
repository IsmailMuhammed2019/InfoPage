import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Brain, Laptop, Users, Globe, Award } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: <Shield className="w-8 h-8 text-[#0066cc]" />,
    title: "Industry-Standard Security",
    description: "Learn cybersecurity with real-world tools and techniques used by top companies worldwide.",
    image: "/assets/security.jpg"
  },
  {
    icon: <Brain className="w-8 h-8 text-[#0066cc]" />,
    title: "AI & Machine Learning",
    description: "Master cutting-edge AI technologies and build intelligent solutions for tomorrow's challenges.",
    image: "/assets/aiml.jpg"
  },
  {
    icon: <Laptop className="w-8 h-8 text-[#0066cc]" />,
    title: "Hands-On Development",
    description: "Code real projects using modern frameworks and best practices from day one.",
    image: "/assets/development.png"
  },
  {
    icon: <Users className="w-8 h-8 text-[#0066cc]" />,
    title: "Expert Mentorship",
    description: "Learn from industry professionals with years of experience in leading tech companies.",
    image: "/assets/mentor.png"
  },
  {
    icon: <Globe className="w-8 h-8 text-[#0066cc]" />,
    title: "Global Opportunities",
    description: "Connect with international employers and expand your career horizons worldwide.",
    image: "/assets/global.jpeg"
  },
  {
    icon: <Award className="w-8 h-8 text-[#0066cc]" />,
    title: "Certified Training",
    description: "Earn recognized certifications that validate your skills and boost your employability.",
    image: "/assets/training.png"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why ICBM Stands Out
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique features that make ICBM the preferred choice for digital skills training
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 