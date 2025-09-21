"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, TrendingUp, Users, DollarSign, ArrowLeft } from "lucide-react"

const careerSectors = [
  {
    id: "engineering",
    name: "Engineering & Technology",
    icon: "⚙️",
    careers: [
      {
        name: "Software Engineer",
        description: "Design and develop software applications and systems",
        skills: ["Programming", "Problem Solving", "Logic"],
        growth: "+15%",
        salary: "₹6-25 LPA",
        demand: "High",
      },
      {
        name: "Data Scientist",
        description: "Analyze complex data to help organizations make decisions",
        skills: ["Statistics", "Python", "Machine Learning"],
        growth: "+22%",
        salary: "₹8-30 LPA",
        demand: "Very High",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Medicine",
    icon: "🏥",
    careers: [
      {
        name: "Doctor",
        description: "Diagnose and treat patients, promote health and wellness",
        skills: ["Medical Knowledge", "Empathy", "Decision Making"],
        growth: "+7%",
        salary: "₹10-50 LPA",
        demand: "High",
      },
      {
        name: "Biotechnologist",
        description: "Use biological processes to develop products and technologies",
        skills: ["Biology", "Research", "Laboratory Skills"],
        growth: "+12%",
        salary: "₹4-15 LPA",
        demand: "Growing",
      },
    ],
  },
  {
    id: "creative",
    name: "Creative & Design",
    icon: "🎨",
    careers: [
      {
        name: "UX Designer",
        description: "Design user-friendly digital experiences and interfaces",
        skills: ["Design Thinking", "Creativity", "User Research"],
        growth: "+18%",
        salary: "₹5-20 LPA",
        demand: "High",
      },
      {
        name: "Content Creator",
        description: "Create engaging content for digital platforms and media",
        skills: ["Creativity", "Communication", "Digital Marketing"],
        growth: "+25%",
        salary: "₹3-15 LPA",
        demand: "Very High",
      },
    ],
  },
]

export function CareerExplorerScreen() {
  const [expandedSector, setExpandedSector] = useState<string | null>(null)
  const [selectedCareer, setSelectedCareer] = useState<any>(null)

  const toggleSector = (sectorId: string) => {
    setExpandedSector(expandedSector === sectorId ? null : sectorId)
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Very High":
        return "text-chart-3"
      case "High":
        return "text-secondary"
      case "Growing":
        return "text-chart-2"
      default:
        return "text-muted-foreground"
    }
  }

  if (selectedCareer) {
    return (
      <div className="flex flex-col min-h-screen bg-background p-6 pb-20">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="sm" onClick={() => setSelectedCareer(null)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        {/* Career Details */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">{selectedCareer.name}</h1>
            <p className="text-muted-foreground leading-relaxed">{selectedCareer.description}</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 text-center bg-card border-border">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-chart-3" />
              </div>
              <div className="text-lg font-semibold text-chart-3">{selectedCareer.growth}</div>
              <div className="text-xs text-muted-foreground">Growth Rate</div>
            </Card>

            <Card className="p-4 text-center bg-card border-border">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div className="text-lg font-semibold text-primary">{selectedCareer.salary}</div>
              <div className="text-xs text-muted-foreground">Salary Range</div>
            </Card>

            <Card className="p-4 text-center bg-card border-border">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <div className={`text-lg font-semibold ${getDemandColor(selectedCareer.demand)}`}>
                {selectedCareer.demand}
              </div>
              <div className="text-xs text-muted-foreground">Demand</div>
            </Card>
          </div>

          {/* Required Skills */}
          <Card className="p-4 bg-card border-border">
            <h3 className="font-semibold text-card-foreground mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {selectedCareer.skills.map((skill: string) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/20 text-secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Save to My Interests
            </Button>
            <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5 bg-transparent">
              Find Learning Resources
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background p-6 pb-20">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Career Explorer</h1>
        <p className="text-muted-foreground">Discover career paths that match your interests</p>
      </div>

      {/* Career Tree */}
      <div className="space-y-3">
        {careerSectors.map((sector) => (
          <div key={sector.id}>
            {/* Sector Header */}
            <Card
              className="p-4 cursor-pointer bg-card border-border hover:bg-card/80 transition-colors"
              onClick={() => toggleSector(sector.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{sector.icon}</span>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{sector.name}</h3>
                    <p className="text-sm text-muted-foreground">{sector.careers.length} career paths</p>
                  </div>
                </div>
                {expandedSector === sector.id ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </Card>

            {/* Expanded Careers */}
            {expandedSector === sector.id && (
              <div className="ml-4 mt-2 space-y-2">
                {sector.careers.map((career, index) => (
                  <Card
                    key={index}
                    className="p-4 cursor-pointer bg-muted/50 border-border hover:bg-muted/80 transition-colors"
                    onClick={() => setSelectedCareer(career)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{career.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{career.description}</p>
                        <div className="flex items-center space-x-4 text-xs">
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3 text-chart-3" />
                            <span className="text-chart-3">{career.growth}</span>
                          </span>
                          <span className="text-primary">{career.salary}</span>
                          <Badge variant="outline" className={`text-xs ${getDemandColor(career.demand)}`}>
                            {career.demand}
                          </Badge>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground ml-2" />
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
