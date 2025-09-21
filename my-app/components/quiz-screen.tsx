"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle } from "lucide-react"

interface QuizScreenProps {
  onComplete: () => void
}

const quizQuestions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      "Solving complex problems",
      "Creating and designing",
      "Helping and teaching others",
      "Leading and organizing",
    ],
  },
  {
    id: 2,
    question: "Which environment do you prefer to work in?",
    options: [
      "Quiet, focused spaces",
      "Collaborative team settings",
      "Outdoor or varied locations",
      "High-energy, fast-paced environments",
    ],
  },
  {
    id: 3,
    question: "What motivates you the most?",
    options: [
      "Making a positive impact",
      "Financial success",
      "Personal growth and learning",
      "Recognition and achievement",
    ],
  },
]

export function QuizScreen({ onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, selectedOption]
      setAnswers(newAnswers)

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        onComplete()
      }
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
      setSelectedOption(null)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="sm" onClick={handleBack} disabled={currentQuestion === 0}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="text-center">
          <h1 className="text-lg font-semibold text-foreground">Career Assessment</h1>
          <p className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
        </div>
        <div className="w-8" />
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="flex-1 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-foreground text-balance">
            {quizQuestions[currentQuestion].question}
          </h2>
          <p className="text-sm text-muted-foreground">Choose the option that best describes you</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <Card
              key={index}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedOption === index ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => setSelectedOption(index)}
            >
              <div className="flex items-center justify-between">
                <p className="text-card-foreground font-medium">{option}</p>
                {selectedOption === index && <CheckCircle className="w-5 h-5 text-primary" />}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="pt-6">
        <Button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {currentQuestion === quizQuestions.length - 1 ? "Complete Assessment" : "Next Question"}
        </Button>
      </div>
    </div>
  )
}
