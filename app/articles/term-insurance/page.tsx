import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermInsuranceArticle() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg">
      <h1 className="text-3xl font-bold mb-6">Term Insurance: The Unsung Hero of Financial Planning</h1>

      <div className="bg-yellow-50 p-6 rounded-lg mb-8">
        <p className="text-yellow-800 font-semibold">
          Critical Information: 94% of Indian families are dangerously underinsured. Is your family at risk?
        </p>
      </div>

      <h2>The Harsh Reality of Financial Protection in India</h2>
      <p>
        In a country where the average household saves diligently for the future, there's a glaring gap in financial
        planning that puts millions of families at risk. Term insurance, the most efficient and affordable form of life
        insurance, remains largely misunderstood and underutilized.
      </p>

      <div className="grid gap-6 my-8">
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">The Protection Gap</h3>
          <p>
            The average Indian household is insured for less than 10% of what they actually need. This means that in the
            event of an unexpected tragedy, most families are left with a fraction of the financial support required to
            maintain their lifestyle and achieve long-term goals.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">The Misconception of Cost</h3>
          <p>
            Many believe that adequate life insurance is expensive. In reality, term insurance offers substantial
            coverage at a fraction of the cost of traditional policies. For instance, a 30-year-old non-smoking male can
            secure a 1 crore cover for as little as ₹700 per month.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">The Illusion of Employer Coverage</h3>
          <p>
            Relying solely on employer-provided life insurance is a risky gamble. These policies often offer inadequate
            coverage and cease the moment you change jobs or retire, leaving you vulnerable precisely when you might
            need protection the most.
          </p>
        </div>
      </div>

      <h2>Why Term Insurance is the Smartest Choice</h2>
      <ul>
        <li>Highest coverage at the lowest cost</li>
        <li>Flexibility to choose coverage amount and term length</li>
        <li>Tax benefits under Section 80C</li>
        <li>Peace of mind knowing your family is financially secure</li>
        <li>Option to add riders for comprehensive protection</li>
      </ul>

      <h2>Common Pitfalls in Choosing Term Insurance</h2>
      <div className="bg-red-50 p-6 rounded-lg my-8 shadow-md">
        <h3 className="font-semibold text-red-800">Watch Out for These Mistakes:</h3>
        <ul className="text-red-700">
          <li>Underestimating coverage needs</li>
          <li>Choosing the cheapest policy without considering claim settlement ratio</li>
          <li>Not disclosing medical history accurately</li>
          <li>Ignoring inflation when calculating coverage</li>
          <li>Failing to review and update coverage as life circumstances change</li>
        </ul>
      </div>

      <h2>The Futuredge Solutions Advantage</h2>
      <div className="bg-green-50 p-6 rounded-lg my-8 shadow-md">
        <h3 className="font-semibold text-green-800">How We Ensure You Get the Right Coverage:</h3>
        <ul className="text-green-700">
          <li>Comprehensive needs analysis to determine optimal coverage</li>
          <li>Comparison of policies from top insurers to find the best fit</li>
          <li>Guidance on riders and additional benefits for holistic protection</li>
          <li>Assistance with accurate disclosure to prevent claim rejections</li>
          <li>Regular policy reviews to keep your coverage aligned with life changes</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg my-8 shadow-md">
        <h3 className="font-semibold">Take Action Now</h3>
        <p>
          Don't leave your family's financial future to chance. Our experts are ready to help you secure the right term
          insurance coverage tailored to your needs.
        </p>
        <div className="mt-6">
          <Button asChild className="w-full">
            <Link href="/contact">Get Your Personalized Term Insurance Plan</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

