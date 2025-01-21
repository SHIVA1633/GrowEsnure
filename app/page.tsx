import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle, TrendingUp, Shield, Brain, Users } from "lucide-react"
import { GetStartedForm } from "@/components/GetStartedForm"

const emotionalTriggers = [
  {
    title: "The 'Safe' Insurance That's Silently Draining Your Wealth",
    description: "Discover why your traditional life insurance might be your biggest financial mistake.",
    icon: AlertTriangle,
    color: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-500",
    link: "/articles/insurance-traps",
    emotion: "fear",
    stats: "78% of policyholders are losing money without realizing it",
  },
  {
    title: "Is Your Mutual Fund Strategy Secretly Sabotaging Your Dreams?",
    description: "The shocking truth about why your investments might be underperforming right now.",
    icon: TrendingUp,
    color: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    link: "/articles/mutual-fund-mistakes",
    emotion: "concern",
    stats: "7 out of 10 investors are making these wealth-destroying mistakes",
  },
  {
    title: "The Health Insurance Gaps That Could Bankrupt You Overnight",
    description: "Why your current policy might leave you exposed when you need it most.",
    icon: Shield,
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
    link: "/articles/health-insurance-mistakes",
    emotion: "fear",
    stats: "65% of families face financial crisis due to inadequate coverage",
  },
  {
    title: "The Tax-Saving Secrets Your CA Might Not Tell You",
    description: "Learn how the wealthy pay less tax, and why you're probably overpaying.",
    icon: Brain,
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500",
    link: "/articles/tax-planning",
    emotion: "curiosity",
    stats: "The average Indian overpays ₹42,000 in taxes annually",
  },
  {
    title: "Is Your Family One Accident Away from Financial Ruin?",
    description: "The uncomfortable truth about term insurance most agents won't tell you.",
    icon: Shield,
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
    link: "/articles/term-insurance",
    emotion: "concern",
    stats: "94% of Indian families are dangerously underinsured",
  },
  {
    title: "The Hidden Tax Benefits of HUF You're Missing Out On",
    description: "Discover how a Hindu Undivided Family structure could save you lakhs in taxes.",
    icon: Users,
    color: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-500",
    link: "/services/huf",
    emotion: "curiosity",
    stats: "Eligible families can save up to ₹2.5 lakhs annually in taxes with HUF",
  },
]

const services = [
  {
    title: "Mutual Funds",
    problem: "You're probably in the wrong funds, bleeding money silently",
    solution: "Our data-driven approach finds hidden gems other advisors miss",
    icon: "📈",
    color: "bg-blue-100",
  },
  {
    title: "Health Insurance",
    problem: "Your policy has loopholes that could deny your claim",
    solution: "We fight for your rights and ensure you're never left hanging",
    icon: "🏥",
    color: "bg-green-100",
  },
  {
    title: "Term Insurance",
    problem: "You're likely paying too much for too little coverage",
    solution: "We calculate your exact needs, not what pays us the most commission",
    icon: "🛡️",
    color: "bg-yellow-100",
  },
  {
    title: "Algo Trading",
    problem: "Your emotions are costing you money in the stock market",
    solution: "Our algorithms trade 24/7, free from human bias and fear",
    icon: "🤖",
    color: "bg-purple-100",
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center bg-gradient-to-r from-blue-100 to-blue-200 p-2 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Welcome to Futuredge Solutions</h2>
        <p className="text-md mb-8 text-gray-700">
          Discover how Futuredge Solutions turns financial confusion into clarity and confidence
        </p>
      </section>

      <section className="text-center bg-gradient-to-r from-amber-100 to-yellow-200 p-6 rounded-lg shadow-lg">
        <blockquote className="text-md italic font-semibold text-gray-800">
          " If you do what everyone else does, you will get what everyone else gets."
          <footer className="text-md mt-2">― Stephen Richards</footer>
        </blockquote>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">
          Uncomfortable Truths Most Financial Advisors Won't Tell You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emotionalTriggers.map((trigger, index) => (
            <Link href={trigger.link} key={index}>
              <div
                className={`${trigger.color} border-2 ${trigger.borderColor} p-6 rounded-lg shadow-md transition-transform hover:scale-105 space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <trigger.icon className={`w-8 h-8 ${trigger.iconColor}`} />
                  <span className="text-sm font-semibold text-gray-500">Eye-Opening Read</span>
                </div>
                <h3 className="text-xl font-semibold">{trigger.title}</h3>
                <p className="text-gray-600">{trigger.description}</p>
                <div className="bg-white bg-opacity-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">Shocking Fact: {trigger.stats}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-3xl font-semibold mb-6 text-center">How Futuredge Solutions Protects Your Wealth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`${service.color} p-6 rounded-lg shadow-md`}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-red-700">
                    <span className="font-semibold">The Real Problem:</span> {service.problem}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700">
                    <span className="font-semibold">Our Unique Solution:</span> {service.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-teal-100 to-green-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Ready to Secure Your Financial Future?</h2>
        <p className="text-md mb-8">
          Join thousands of smart investors who trust Futuredge Solutions to navigate the complex world of finance.
        </p>
        <div className="max-w-md mx-auto">
          <GetStartedForm />
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Why Smart Investors Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Families Financially Secured</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹20Cr+</div>
            <p className="text-gray-600">Wealth Protected and Grown</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Client Retention Rate</p>
          </div>
        </div>
      </section>
    </div>
  )
}
