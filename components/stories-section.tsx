import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const stories = [
  {
    name: "Maria Santos",
    location: "Guatemala",
    story:
      "Thanks to the education program, I became the first in my family to graduate from university. Now I'm a teacher helping other children in my community.",
    image: "/young-latina-woman-teacher-smiling.png",
    program: "Education Initiative",
  },
  {
    name: "James Ochieng",
    location: "Kenya",
    story:
      "The clean water project changed everything for our village. Our children are healthier, and we can focus on education instead of walking hours for water.",
    image: "/african-man-standing-near-water-well.png",
    program: "Clean Water Project",
  },
  {
    name: "Priya Sharma",
    location: "India",
    story:
      "The healthcare program saved my daughter's life. The mobile clinic reached our remote village just in time, and now she's healthy and thriving.",
    image: "/indian-mother-holding-healthy-child.png",
    program: "Healthcare Access",
  },
]

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Stories of Hope</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every person we help has a unique story. Here are just a few examples of how your support creates lasting
            change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{story.story}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{story.name}</div>
                    <div className="text-sm text-muted-foreground">{story.location}</div>
                    <div className="text-xs text-primary font-medium">{story.program}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
