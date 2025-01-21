import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = {
  "mutual-funds": {
    title: "Mutual Funds",
    description: "Diversify your portfolio with expert-picked mutual funds.",
    content:
      "Our mutual fund services offer a wide range of investment options tailored to your financial goals and risk tolerance. We provide expert guidance on fund selection, regular portfolio reviews, and rebalancing to ensure your investments stay on track. With our deep market knowledge and analytical tools, we help you navigate the complex world of mutual funds to maximize your returns while managing risk effectively.",
    icon: "📈",
    color: "bg-blue-100",
  },
  "health-insurance": {
    title: "Health Insurance",
    description: "Secure your health with comprehensive coverage plans.",
    content:
      "Our health insurance services are designed to provide you and your family with comprehensive medical coverage. We offer a range of plans from top insurers, covering hospitalization, critical illnesses, and preventive care. Our experts will help you understand policy terms, compare options, and choose the best plan that fits your needs and budget. We also assist with claim processes to ensure you get the care you need without financial stress.",
    icon: "🏥",
    color: "bg-green-100",
  },
  "term-insurance": {
    title: "Term Insurance",
    description: "Protect your family's future with our term life policies.",
    content:
      "Our term insurance services provide financial security for your loved ones in case of unforeseen events. We offer a variety of term life policies with flexible coverage amounts and terms. Our experts will help you determine the right coverage based on your financial obligations, lifestyle, and future goals. We ensure transparent policy terms and assist with easy claim settlements, giving you peace of mind about your family's financial future.",
    icon: "🛡️",
    color: "bg-yellow-100",
  },
  "algo-trading-services": {
    title: "Algo Trading Services",
    description: "Maximize returns with our cutting-edge trading algorithms.",
    content:
      "Our algorithmic trading services leverage advanced technology and financial expertise to optimize your trading strategy. We develop and implement customized trading algorithms based on your investment goals and risk profile. Our systems analyze market data in real-time, executing trades at optimal prices and timings. We constantly monitor and refine our algorithms to adapt to changing market conditions, aiming to maximize your returns while minimizing risks.",
    icon: "🤖",
    color: "bg-purple-100",
  },
  "itr-filing-services": {
    title: "ITR Filing Services",
    description: "Simplify your taxes with our expert filing assistance.",
    content:
      "Our Income Tax Return (ITR) filing services take the stress out of tax season. We stay up-to-date with the latest tax laws and regulations to ensure accurate and timely filing of your returns. Our experts will help you identify all applicable deductions and credits, minimizing your tax liability while ensuring full compliance. We handle all types of ITRs, from simple salaried returns to complex business and capital gains filings, providing you with peace of mind and potentially significant tax savings.",
    icon: "📊",
    color: "bg-red-100",
  },
  "huf-registration": {
    title: "HUF Registration",
    description: "Streamline your family finances with HUF registration.",
    content:
      "Our Hindu Undivided Family (HUF) registration services help you optimize your family's financial structure. We guide you through the process of creating and registering an HUF, explaining the benefits and legal implications. Our experts assist with documentation, PAN card application, and setting up separate bank accounts. We also provide ongoing support for HUF compliance, including income tax returns and wealth management, helping you maximize tax benefits and efficiently manage your family's assets.",
    icon: "👪",
    color: "bg-orange-100",
  },
  "personal-finance": {
    title: "Personal Finance",
    description: "Tailor-made solutions for your unique financial goals.",
    content:
      "Our personal finance solutions are designed to help you achieve your financial goals, whether it's saving for a home, planning for retirement, or building wealth. We start with a comprehensive assessment of your current financial situation and future objectives. Based on this, we create a personalized financial plan that may include budgeting strategies, investment recommendations, debt management, and retirement planning. Our experts provide ongoing support and adjustments to your plan as your life circumstances change, ensuring you stay on track to financial success.",
    icon: "💰",
    color: "bg-indigo-100",
  },
  "portfolio-review": {
    title: "Portfolio Review",
    description: "Optimize your investments with our expert analysis.",
    content:
      "Our portfolio review service provides a comprehensive analysis of your current investments. Our financial experts examine your portfolio's performance, risk profile, and alignment with your financial goals. We identify potential areas of improvement, such as overexposure to certain sectors or underperforming assets. Based on this analysis, we provide recommendations to optimize your portfolio, which may include rebalancing, diversification strategies, or suggestions for new investment opportunities. Regular reviews ensure your portfolio remains aligned with your evolving financial objectives and market conditions.",
    icon: "🔍",
    color: "bg-pink-100",
  },
  "tax-planning": {
    title: "Tax Planning",
    description: "Maximize your savings with strategic tax planning.",
    content:
      "Our tax planning services are designed to help you navigate the complex world of taxation efficiently. We work closely with you to understand your financial situation and goals, then develop a comprehensive strategy to minimize your tax liability while ensuring full compliance with tax laws. Our experts stay up-to-date with the latest tax regulations and use this knowledge to identify all possible deductions, credits, and exemptions you're eligible for. We help you make informed decisions about investments, retirement planning, and other financial matters with tax implications in mind.",
    icon: "💹",
    color: "bg-green-100",
  },
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className={`${service.color} p-8 rounded-lg shadow-lg`}>
      <div className="text-6xl mb-6">{service.icon}</div>
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-xl mb-6">{service.description}</p>
      <div className="bg-white bg-opacity-75 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our {service.title} Services?</h2>
        <p className="text-lg mb-6">{service.content}</p>
        <Button asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}

