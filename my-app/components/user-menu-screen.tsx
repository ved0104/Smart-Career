import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Settings, BookmarkCheck, Award, HelpCircle, LogOut, Shield } from "lucide-react"

const savedCareers = [
  { name: "Software Engineer", sector: "Technology" },
  { name: "Biotechnologist", sector: "Healthcare" },
  { name: "UX Designer", sector: "Creative" },
]

const achievements = [
  { name: "Quiz Completed", description: "Finished career assessment", earned: true },
  { name: "First Journal Entry", description: "Started your reflection journey", earned: true },
  { name: "Career Explorer", description: "Explored 5+ career paths", earned: false },
  { name: "Active Learner", description: "7 days of consistent journaling", earned: false },
]

export function UserMenuScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-background p-6 pb-20">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back!</h1>
        <p className="text-muted-foreground">Continue your career journey</p>

        {/* Government Badge */}
        <div className="flex items-center justify-center mt-3">
          <Badge className="bg-primary/10 text-primary border-primary/30">
            <Shield className="w-3 h-3 mr-1" />
            Government Verified
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="p-3 text-center bg-card border-border">
          <div className="text-lg font-semibold text-primary">12</div>
          <div className="text-xs text-muted-foreground">Journal Entries</div>
        </Card>
        <Card className="p-3 text-center bg-card border-border">
          <div className="text-lg font-semibold text-secondary">8</div>
          <div className="text-xs text-muted-foreground">Careers Explored</div>
        </Card>
        <Card className="p-3 text-center bg-card border-border">
          <div className="text-lg font-semibold text-chart-3">2</div>
          <div className="text-xs text-muted-foreground">Achievements</div>
        </Card>
      </div>

      {/* Saved Careers */}
      <Card className="p-4 mb-6 bg-card border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-card-foreground">Saved Careers</h3>
          <BookmarkCheck className="w-4 h-4 text-secondary" />
        </div>
        <div className="space-y-2">
          {savedCareers.map((career, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div>
                <div className="font-medium text-card-foreground">{career.name}</div>
                <div className="text-sm text-muted-foreground">{career.sector}</div>
              </div>
              <Badge variant="outline" className="text-xs">
                Saved
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-4 mb-6 bg-card border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-card-foreground">Achievements</h3>
          <Award className="w-4 h-4 text-chart-2" />
        </div>
        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-3 py-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  achievement.earned ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground"
                }`}
              >
                <Award className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className={`font-medium ${achievement.earned ? "text-card-foreground" : "text-muted-foreground"}`}>
                  {achievement.name}
                </div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Menu Options */}
      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start border-border hover:bg-muted/50 bg-transparent">
          <Settings className="w-4 h-4 mr-3" />
          Settings & Preferences
        </Button>

        <Button variant="outline" className="w-full justify-start border-border hover:bg-muted/50 bg-transparent">
          <HelpCircle className="w-4 h-4 mr-3" />
          Help & Support
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start border-border hover:bg-muted/50 text-destructive hover:text-destructive bg-transparent"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
