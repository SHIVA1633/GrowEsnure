import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Mutual Funds",
    description: "Diversify your portfolio with expert-picked mutual funds.",
    icon: "📈",
    color: "bg-blue-100",
  },
  {
    title: "Health Insurance",
    description: "Secure your health with comprehensive coverage plans.",
    icon: "🏥",
    color: "bg-green-100",
  },
  {
    title: "Term Insurance",
    description: "Protect your family's future with our term life policies.",
    icon: "🛡️",
    color: "bg-yellow-100",
  },
  {
    title: "Algo Trading Services",
    description: "Maximize returns with our cutting-edge trading algorithms.",
    icon: "🤖",
    color: "bg-purple-100",
  },
  {
    title: "ITR Filing Services",
    description: "Simplify your taxes with our expert filing assistance.",
    icon: "📊",
    color: "bg-red-100",
  },
  {
    title: "HUF Registration",
    description: "Optimize your family finances with HUF registration and management.",
    icon: "👪",
    color: "bg-orange-100",
  },
  {
    title: "Personal Finance",
    description: "Tailor-made solutions for your unique financial goals.",
    icon: "💰",
    color: "bg-indigo-100",
  },
  {
    title: "Portfolio Review",
    description: "Optimize your investments with our expert analysis.",
    icon: "🔍",
    color: "bg-pink-100",
  },
]

export default function Services() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
            <Card className={`${service.color} hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Futuredge Solutions Guidance</h2>
        <p className="mb-4">
          At Futuredge Solutions, we understand that choosing the right financial services can be overwhelming. Here's
          how we work to address common challenges:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Personalized Approach: We don't believe in one-size-fits-all solutions. Our team takes the time to
            understand your unique financial situation and goals.
          </li>
          <li>
            Continuous Education: We keep you informed about market trends and financial strategies, empowering you to
            make confident decisions.
          </li>
          <li>
            Risk Management: We help you understand and manage your risk tolerance, ensuring your investments align with
            your comfort level.
          </li>
          <li>
            Regular Reviews: We conduct periodic portfolio reviews to ensure your investments remain aligned with your
            evolving financial goals.
          </li>
          <li>
            Transparent Communication: We believe in clear, jargon-free communication to help you understand every
            aspect of your financial journey.
          </li>
        </ul>
      </div>
    </div>
  )
}

