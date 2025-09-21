"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, Target, Users } from "lucide-react"

interface OnboardingScreenProps {
  onNext: () => void
}

export function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary/5 to-background p-6">
      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
        {/* Government Badge */}
        <div className="bg-primary/10 px-4 py-2 rounded-full">
          <p className="text-sm font-medium text-primary">Government of India Initiative</p>
        </div>

        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto">
            <GraduationCap className="w-10 h-10 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Pragati</h1>
            <p className="text-muted-foreground text-lg">Your Career Guidance Companion</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4 w-full">
          <Card className="p-4 bg-card border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-card-foreground">Personalized Guidance</h3>
                <p className="text-sm text-muted-foreground">AI-powered career recommendations</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-card-foreground">Expert Support</h3>
                <p className="text-sm text-muted-foreground">Connect with career counselors</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Discover your potential and explore career paths tailored just for you
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Button onClick={onNext} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Get Started
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}
