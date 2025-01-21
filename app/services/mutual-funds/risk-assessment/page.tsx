'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const questions = [
  {
    id: 1,
    question: "What is your primary investment objective?",
    options: [
      { value: "1", label: "Capital preservation (low risk)" },
      { value: "2", label: "Regular income with moderate growth" },
      { value: "3", label: "Balance of growth and stability" },
      { value: "4", label: "Long-term capital appreciation" },
      { value: "5", label: "Aggressive growth (high risk)" }
    ]
  },
  {
    id: 2,
    question: "How long do you plan to stay invested?",
    options: [
      { value: "1", label: "Less than 1 year" },
      { value: "2", label: "1-3 years" },
      { value: "3", label: "3-5 years" },
      { value: "4", label: "5-10 years" },
      { value: "5", label: "More than 10 years" }
    ]
  },
  {
    id: 3,
    question: "How would you react if your investment dropped by 20% in a month?",
    options: [
      { value: "1", label: "Sell everything immediately" },
      { value: "2", label: "Sell some investments" },
      { value: "3", label: "Hold and wait for recovery" },
      { value: "4", label: "Buy more if funds available" },
      { value: "5", label: "Significantly increase investment" }
    ]
  },
  {
    id: 4,
    question: "What percentage of your monthly income can you save?",
    options: [
      { value: "1", label: "Less than 10%" },
      { value: "2", label: "10-20%" },
      { value: "3", label: "20-30%" },
      { value: "4", label: "30-40%" },
      { value: "5", label: "More than 40%" }
    ]
  },
  {
    id: 5,
    question: "What is your experience with financial investments?",
    options: [
      { value: "1", label: "No experience" },
      { value: "2", label: "Some knowledge of basic investments" },
      { value: "3", label: "Regular mutual fund investor" },
      { value: "4", label: "Experienced in various investments" },
      { value: "5", label: "Professional investment experience" }
    ]
  },
  {
    id: 6,
    question: "Which statement best describes your knowledge of Indian financial markets?",
    options: [
      { value: "1", label: "I'm not familiar with market terminology" },
      { value: "2", label: "I understand basic concepts like equity and debt" },
      { value: "3", label: "I follow market news regularly" },
      { value: "4", label: "I actively track multiple market indicators" },
      { value: "5", label: "I have professional market knowledge" }
    ]
  },
  {
    id: 7,
    question: "How do you view market volatility in Indian stock markets?",
    options: [
      { value: "1", label: "It makes me very uncomfortable" },
      { value: "2", label: "I prefer to avoid it" },
      { value: "3", label: "I understand it's part of investing" },
      { value: "4", label: "I see it as an opportunity" },
      { value: "5", label: "I actively seek volatile investments" }
    ]
  },
  {
    id: 8,
    question: "What percentage of your total savings are you planning to invest?",
    options: [
      { value: "1", label: "Less than 10%" },
      { value: "2", label: "10-25%" },
      { value: "3", label: "25-50%" },
      { value: "4", label: "50-75%" },
      { value: "5", label: "More than 75%" }
    ]
  },
  {
    id: 9,
    question: "How important is liquidity in your investments?",
    options: [
      { value: "1", label: "I need immediate access to all my investments" },
      { value: "2", label: "I need quick access to most of my investments" },
      { value: "3", label: "I can lock some portion for medium term" },
      { value: "4", label: "I can lock substantial amount for long term" },
      { value: "5", label: "Liquidity is not a concern" }
    ]
  },
  {
    id: 10,
    question: "What is your preferred investment style in Indian markets?",
    options: [
      { value: "1", label: "Only fixed deposits and government schemes" },
      { value: "2", label: "Mostly debt funds with some equity" },
      { value: "3", label: "Balanced mix of equity and debt" },
      { value: "4", label: "Primarily equity with some debt" },
      { value: "5", label: "Pure equity including mid and small caps" }
    ]
  }
]

export default function RiskAssessment() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showForm, setShowForm] = useState(true)

  const progress = (Object.keys(answers).length / questions.length) * 100

  const calculateRiskProfile = async () => {
    const total = Object.values(answers).reduce((sum, value) => sum + parseInt(value), 0)
    const average = total / questions.length

    let profile = ''
    let description = ''

    if (average <= 1.5) {
      profile = "Conservative"
      description = "You prefer stability and are comfortable with lower returns in exchange for capital protection."
    }
    else if (average <= 2.5) {
      profile = "Moderately Conservative"
      description = "You seek modest growth while maintaining a good degree of capital protection."
    }
    else if (average <= 3.5) {
      profile = "Moderate"
      description = "You balance growth and stability, accepting moderate volatility for better returns."
    }
    else if (average <= 4.5) {
      profile = "Moderately Aggressive"
      description = "You prioritize growth and can handle significant market fluctuations."
    }
    else {
      profile = "Aggressive"
      description = "You seek maximum growth potential and are comfortable with high market volatility."
    }

    setResult({ profile, description })
    setShowForm(false)

    // Send email with results
    try {
      await fetch('/api/send-risk-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          profile,
          description,
          answers,
        }),
      })
    } catch (error) {
      console.error('Error sending assessment results:', error)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2 border-blue-100">
        <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl text-blue-800">Investment Risk Profile Assessment</CardTitle>
          <CardDescription className="text-lg">
            Discover your investment risk tolerance and get personalized recommendations
          </CardDescription>
        </CardHeader>
        
        {showForm ? (
          <CardContent className="space-y-6">
            <div className="mb-6">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-gray-500 mt-2">Question {Object.keys(answers).length + 1} of {questions.length}</p>
            </div>

            {currentQuestion === 0 && (
              <div className="space-y-4 mb-6">
                <Label htmlFor="email">Your Email Address</Label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-medium text-blue-900">{questions[currentQuestion].question}</h3>
              <RadioGroup
                onValueChange={(value) => {
                  setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: value }))
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(prev => prev + 1)
                  }
                }}
                value={answers[questions[currentQuestion].id]}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <RadioGroupItem value={option.value} id={`q${questions[currentQuestion].id}-${option.value}`} />
                    <Label htmlFor={`q${questions[currentQuestion].id}-${option.value}`} className="flex-grow cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </motion.div>
          </CardContent>
        ) : (
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Your Risk Profile: {result?.profile}</h3>
              <p className="text-gray-700 mb-4">{result?.description}</p>
              <p className="text-sm text-gray-600">
                We have sent a detailed analysis to your email address. Our team will contact you soon to discuss investment options that match your risk profile.
              </p>
            </div>
          </CardContent>
        )}

        <CardFooter className="flex justify-between">
          {showForm && (
            <>
              {currentQuestion > 0 && (
                <Button 
                  variant="outline"
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                >
                  Previous
                </Button>
              )}
              {currentQuestion === questions.length - 1 && (
                <Button 
                  onClick={calculateRiskProfile}
                  disabled={!email || Object.keys(answers).length !== questions.length}
                  className="ml-auto"
                >
                  Calculate Risk Profile
                </Button>
              )}
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

