"use client"

import { useState } from "react"
import { OnboardingScreen } from "@/components/onboarding-screen"
import { QuizScreen } from "@/components/quiz-screen"
import { JournalingScreen } from "@/components/journaling-screen"
import { PersonalizedFeedScreen } from "@/components/personalized-feed-screen"
import { CareerExplorerScreen } from "@/components/career-explorer-screen"
import { UserMenuScreen } from "@/components/user-menu-screen"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function PragatiApp() {
  const [currentScreen, setCurrentScreen] = useState<string>("onboarding")
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false)

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true)
    setCurrentScreen("feed")
  }

  const renderScreen = () => {
    if (!isOnboardingComplete) {
      switch (currentScreen) {
        case "onboarding":
          return <OnboardingScreen onNext={() => setCurrentScreen("quiz")} />
        case "quiz":
          return <QuizScreen onComplete={handleOnboardingComplete} />
        default:
          return <OnboardingScreen onNext={() => setCurrentScreen("quiz")} />
      }
    }

    switch (currentScreen) {
      case "feed":
        return <PersonalizedFeedScreen />
      case "journal":
        return <JournalingScreen />
      case "explorer":
        return <CareerExplorerScreen />
      case "profile":
        return <UserMenuScreen />
      default:
        return <PersonalizedFeedScreen />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-sm mx-auto bg-background min-h-screen relative">
        {renderScreen()}
        {isOnboardingComplete && <BottomNavigation currentScreen={currentScreen} onScreenChange={setCurrentScreen} />}
      </div>
    </div>
  )
}
