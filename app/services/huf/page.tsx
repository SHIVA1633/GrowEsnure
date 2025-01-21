import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HUFPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Hindu Undivided Family (HUF): A Powerful Tax Planning Tool
      </h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <p className="text-blue-800 font-semibold text-lg mb-4">
          Did you know? An HUF can provide an additional ₹2.5 lakhs of tax-free income annually, yet it remains
          underutilized by most eligible families.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">What is a Hindu Undivided Family (HUF)?</h2>
        <p>
          A Hindu Undivided Family (HUF) is a unique tax entity recognized under the Indian Income Tax Act. It consists
          of all lineal descendants of a common ancestor, including their wives and unmarried daughters. HUF is not just
          limited to Hindus; it's also applicable to Sikhs, Jains, and Buddhists.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Benefits of Creating an HUF</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Additional tax-free income up to ₹2.5 lakhs per year</li>
          <li>Separate ₹1.5 lakh deduction under Section 80C</li>
          <li>Ability to split income and reduce overall family tax liability</li>
          <li>Potential for better wealth management and succession planning</li>
          <li>Can invest in various instruments including mutual funds, fixed deposits, and real estate</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">How Futuredge Solutions Helps You Leverage HUF</h2>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Our Comprehensive HUF Services:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Assessment of eligibility and potential benefits for your family</li>
            <li>Guidance on HUF formation and necessary documentation</li>
            <li>Assistance with PAN card application and bank account opening</li>
            <li>Strategic advice on asset allocation and income distribution within HUF</li>
            <li>Ongoing support for HUF tax filing and compliance</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">The HUF Creation Process</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Initial Consultation:</strong> We assess your family structure and financial situation to determine
            if an HUF is beneficial for you.
          </li>
          <li>
            <strong>Documentation:</strong> We help you prepare the HUF declaration, which includes details of the Karta
            (usually the eldest male member) and other coparceners.
          </li>
          <li>
            <strong>PAN Application:</strong> We assist in applying for a separate PAN card for the HUF.
          </li>
          <li>
            <strong>Bank Account Opening:</strong> We guide you through the process of opening a separate bank account
            for the HUF.
          </li>
          <li>
            <strong>Asset Transfer:</strong> We advise on how to transfer or acquire assets in the name of the HUF.
          </li>
          <li>
            <strong>Investment Strategy:</strong> We help develop an investment strategy aligned with your family's
            goals and tax objectives.
          </li>
          <li>
            <strong>Ongoing Management:</strong> We provide continuous support for tax filing, compliance, and
            optimization of the HUF structure.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>HUF comes into existence by operation of law, not by contract</li>
            <li>Proper documentation is crucial for tax benefits</li>
            <li>HUF can be created even with a small capital contribution</li>
            <li>Regular income or asset partition is necessary to maintain HUF status</li>
            <li>Careful planning required to avoid future family disputes</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Optimize Your Family's Finances with HUF?</h3>
        <p className="mb-6">
          Let our experts guide you through the process and help you maximize the benefits of an HUF structure.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule Your HUF Consultation</Link>
        </Button>
      </div>
    </div>
  )
}

