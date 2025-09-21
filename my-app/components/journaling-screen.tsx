"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, BookOpen, Calendar, Sparkles } from "lucide-react"

const journalEntries = [
  {
    id: 1,
    date: "Today",
    content:
      "Had an interesting conversation with my computer science teacher about AI and machine learning. It got me thinking about how technology could help solve real-world problems...",
    mood: "Excited",
    tags: ["Technology", "Learning"],
  },
  {
    id: 2,
    date: "Yesterday",
    content:
      "Volunteered at the local community center today. Really enjoyed helping kids with their homework. There's something fulfilling about teaching and seeing that 'aha' moment...",
    mood: "Fulfilled",
    tags: ["Teaching", "Community"],
  },
]

const moodOptions = ["Excited", "Curious", "Motivated", "Thoughtful", "Inspired", "Confident"]
const tagOptions = ["Technology", "Learning", "Teaching", "Community", "Creativity", "Leadership", "Problem-solving"]

export function JournalingScreen() {
  const [isWriting, setIsWriting] = useState(false)
  const [newEntry, setNewEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleSaveEntry = () => {
    if (newEntry.trim()) {
      // In a real app, this would save to a database
      setNewEntry("")
      setSelectedMood("")
      setSelectedTags([])
      setIsWriting(false)
    }
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  if (isWriting) {
    return (
      <div className="flex flex-col min-h-screen bg-background p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => setIsWriting(false)}>
            Cancel
          </Button>
          <h1 className="text-lg font-semibold text-foreground">New Entry</h1>
          <Button
            onClick={handleSaveEntry}
            disabled={!newEntry.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Save
          </Button>
        </div>

        {/* Writing Area */}
        <div className="flex-1 space-y-6">
          <Card className="p-4 bg-card border-border">
            <Textarea
              placeholder="What's on your mind today? Reflect on your experiences, interests, or any career thoughts..."
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              className="min-h-[200px] border-0 p-0 resize-none focus-visible:ring-0 bg-transparent"
            />
          </Card>

          {/* Mood Selection */}
          <div className="space-y-3">
            <h3 className="font-medium text-foreground">How are you feeling?</h3>
            <div className="flex flex-wrap gap-2">
              {moodOptions.map((mood) => (
                <Badge
                  key={mood}
                  variant={selectedMood === mood ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedMood === mood ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/20"
                  }`}
                  onClick={() => setSelectedMood(mood)}
                >
                  {mood}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tag Selection */}
          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Add tags (optional)</h3>
            <div className="flex flex-wrap gap-2">
              {tagOptions.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedTags.includes(tag) ? "bg-primary text-primary-foreground" : "hover:bg-primary/20"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* AI Hint */}
          <Card className="p-3 bg-muted border-border">
            <div className="flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-secondary mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Your journal entries help our AI understand your interests and suggest personalized career paths.
              </p>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background p-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Journal</h1>
          <p className="text-sm text-muted-foreground">Reflect on your journey</p>
        </div>
        <Button onClick={() => setIsWriting(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <PlusCircle className="w-4 h-4 mr-2" />
          Write
        </Button>
      </div>

      {/* Journal Entries */}
      <div className="space-y-4">
        {journalEntries.map((entry) => (
          <Card key={entry.id} className="p-4 bg-card border-border">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-card-foreground">{entry.date}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {entry.mood}
                </Badge>
              </div>

              <p className="text-card-foreground leading-relaxed">{entry.content}</p>

              <div className="flex flex-wrap gap-1">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {journalEntries.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
          <BookOpen className="w-12 h-12 text-muted-foreground" />
          <div>
            <h3 className="font-semibold text-foreground mb-2">Start Your Journey</h3>
            <p className="text-muted-foreground text-sm">
              Begin journaling to help our AI understand your interests and provide better career guidance.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
