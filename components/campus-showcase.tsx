import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react'
import Image from 'next/image'

const campuses = [
  {
    name: "DBI Abuja",
    location: "Central Business District, Abuja",
    phone: "+234 803 123 4567",
    email: "abuja@dbi.gov.ng",
    hours: "Mon-Fri: 8AM-6PM",
    image: "/assets/dbi-abuja-campus1.jpg",
    description: "Our flagship campus in the heart of Nigeria's capital, offering state-of-the-art facilities and direct access to government and private sector opportunities."
  },
  {
    name: "DBI Lagos",
    location: "Victoria Island, Lagos",
    phone: "+234 803 123 4568",
    email: "lagos@dbi.gov.ng",
    hours: "Mon-Fri: 8AM-6PM",
    image: "/assets/dbi-lagos-campus1.jpg",
    description: "Located in Nigeria's commercial hub, providing access to leading tech companies and international business opportunities."
  },
  {
    name: "DBI Enugu",
    location: "New Haven, Enugu",
    phone: "+234 803 123 4569",
    email: "enugu@dbi.gov.ng",
    hours: "Mon-Fri: 8AM-6PM",
    image: "/assets/dbi-enugu-campus1.jpg",
    description: "Serving the eastern region with modern training facilities and strong connections to local and regional tech ecosystems."
  },
  {
    name: "DBI Kano",
    location: "Nasarawa GRA, Kano",
    phone: "+234 803 123 4570",
    email: "kano@dbi.gov.ng",
    hours: "Mon-Fri: 8AM-6PM",
    image: "/assets/dbi-kano-campus1.jpg",
    description: "Northern Nigeria's premier digital skills training center, fostering innovation and entrepreneurship in the region."
  },
  {
    name: "DBI Yola",
    location: "Jimeta, Yola",
    phone: "+234 803 123 4571",
    email: "yola@dbi.gov.ng",
    hours: "Mon-Fri: 8AM-6PM",
    image: "/assets/dbi-yola-campus1.jpg",
    description: "Empowering the northeast region with digital skills and creating opportunities for sustainable development."
  }
]

export default function CampusShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Campuses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit any of our state-of-the-art campuses across Nigeria and start your journey to digital excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campuses.map((campus, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={campus.image}
                  alt={`${campus.name} Campus`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{campus.name}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#0066cc]" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {campus.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#0066cc]" />
                    <span>{campus.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#0066cc]" />
                    <span>{campus.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-[#0066cc]" />
                    <span>{campus.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#0066cc]" />
                    <span>{campus.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            * Campus photos shown are representative. Actual DBI campus facilities may vary.
          </p>
        </div>
      </div>
    </section>
  )
} 