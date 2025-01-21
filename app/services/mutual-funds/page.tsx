import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from 'next/link'

export default function MutualFunds() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Mutual Fund Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>
              Understand your risk tolerance and get personalized investment recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Take our comprehensive risk assessment questionnaire to:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Determine your risk tolerance level</li>
              <li>Get personalized investment strategies</li>
              <li>Receive a detailed risk profile report</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/services/mutual-funds/risk-assessment">Start Risk Assessment</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Client Registration</CardTitle>
            <CardDescription>
              Begin your investment journey with Futuredge Solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Complete our registration process to:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Open your mutual fund account</li>
              <li>Access personalized investment options</li>
              <li>Get started with your investment journey</li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/services/mutual-funds/register">Register Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Mutual Fund Services?</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            Expert guidance and personalized recommendations
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            Wide range of fund options across different categories
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            Regular portfolio monitoring and rebalancing
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span>
            Dedicated support throughout your investment journey
          </li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Futuredge Solutions Mutual Fund Guidance</h2>
        <p className="mb-4">Choosing the right mutual funds can be challenging. Here's how Futuredge Solutions helps you navigate common pitfalls:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Avoid Chasing Past Performance: We focus on consistent performers rather than funds with occasional high returns.</li>
          <li>Diversification: We help you build a well-diversified portfolio to manage risk effectively.</li>
          <li>Cost Consideration: We factor in expense ratios and other costs to maximize your returns.</li>
          <li>Regular Monitoring: We keep track of your investments and suggest rebalancing when necessary.</li>
          <li>Tax Efficiency: We consider tax implications to optimize your after-tax returns.</li>
        </ul>
      </div>
    </div>
  )
}

