import { Users, GraduationCap, Briefcase, Award } from 'lucide-react'

const stats = [
  {
    icon: <Users className="w-8 h-8 text-[#0066cc]" />,
    number: "500+",
    label: "Students Enrolled",
    description: "Successfully trained and placed"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#0066cc]" />,
    number: "95%",
    label: "Employment Rate",
    description: "Graduates employed within 6 months"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#0066cc]" />,
    number: "50+",
    label: "Partner Companies",
    description: "Leading employers across Nigeria"
  },
  {
    icon: <Award className="w-8 h-8 text-[#0066cc]" />,
    number: "100%",
    label: "Certification Rate",
    description: "Industry-recognized certifications"
  }
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how ICBM is transforming lives and creating opportunities in the digital economy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 