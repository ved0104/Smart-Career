"use client"

import { Home, BookOpen, Compass, User } from "lucide-react"

interface BottomNavigationProps {
  currentScreen: string
  onScreenChange: (screen: string) => void
}

export function BottomNavigation({ currentScreen, onScreenChange }: BottomNavigationProps) {
  const navItems = [
    { id: "feed", label: "Home", icon: Home },
    { id: "journal", label: "Journal", icon: BookOpen },
    { id: "explorer", label: "Explore", icon: Compass },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-background border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id

          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
