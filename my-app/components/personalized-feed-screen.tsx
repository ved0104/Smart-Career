import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, BookOpen, Video, ExternalLink, Sparkles } from "lucide-react"

const feedItems = [
  {
    id: 1,
    type: "career-suggestion",
    title: "Biotechnology: A Growing Field",
    description:
      "Based on your journal entries about science and helping others, biotechnology might be perfect for you.",
    successRate: "85%",
    avgSalary: "₹8-15 LPA",
    growth: "+12%",
    tags: ["Science", "Healthcare", "Research"],
    isPersonalized: true,
  },
  {
    id: 2,
    type: "article",
    title: "Top 10 Skills for Future Careers",
    description: "Essential skills that will be in high demand in the next decade.",
    readTime: "5 min read",
    tags: ["Skills", "Future", "Career Planning"],
  },
  {
    id: 3,
    type: "video",
    title: "Day in the Life: Software Engineer",
    description: "Follow Priya as she shares her typical day working at a tech startup in Bangalore.",
    duration: "8 min",
    tags: ["Technology", "Day in Life", "Engineering"],
  },
  {
    id: 4,
    type: "opportunity",
    title: "Free Coding Bootcamp",
    description: "Government-sponsored 3-month coding bootcamp starting next month. Applications open now!",
    deadline: "15 days left",
    tags: ["Programming", "Free", "Government"],
  },
]

export function PersonalizedFeedScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-background p-6 pb-20">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Good morning! 👋</h1>
        <p className="text-muted-foreground">Here's what we found for you today</p>
      </div>

      {/* Personalized Banner */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">AI Insights</h3>
            <p className="text-sm text-muted-foreground">
              Based on your interests in science and helping others, we've curated these recommendations for you.
            </p>
          </div>
        </div>
      </Card>

      {/* Feed Items */}
      <div className="space-y-4">
        {feedItems.map((item) => (
          <Card key={item.id} className="p-4 bg-card border-border">
            {item.isPersonalized && (
              <Badge className="mb-3 bg-secondary/20 text-secondary border-secondary/30">Personalized for you</Badge>
            )}

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-card-foreground mb-1 text-balance">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>

              {/* Career Suggestion Metrics */}
              {item.type === "career-suggestion" && (
                <div className="grid grid-cols-3 gap-3 py-2">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-secondary">{item.successRate}</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-primary">{item.avgSalary}</div>
                    <div className="text-xs text-muted-foreground">Avg Salary</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-chart-3 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {item.growth}
                    </div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                </div>
              )}

              {/* Article/Video Meta */}
              {(item.type === "article" || item.type === "video") && (
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  {item.type === "article" && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  )}
                  {item.type === "video" && (
                    <div className="flex items-center space-x-1">
                      <Video className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Opportunity Deadline */}
              {item.type === "opportunity" && (
                <div className="flex items-center space-x-1 text-sm text-destructive">
                  <Clock className="w-4 h-4" />
                  <span>{item.deadline}</span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-3 border-primary/30 hover:bg-primary/5 bg-transparent"
              >
                {item.type === "career-suggestion" && "Explore Career"}
                {item.type === "article" && (
                  <>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Article
                  </>
                )}
                {item.type === "video" && (
                  <>
                    <Video className="w-4 h-4 mr-2" />
                    Watch Video
                  </>
                )}
                {item.type === "opportunity" && (
                  <>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apply Now
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
