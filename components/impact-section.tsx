import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Heart, Home } from "lucide-react"

const impactStats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Lives Transformed",
    description: "Individuals directly impacted by our programs",
  },
  {
    icon: GraduationCap,
    number: "12,500",
    label: "Students Educated",
    description: "Children given access to quality education",
  },
  {
    icon: Heart,
    number: "8,200",
    label: "Medical Treatments",
    description: "Healthcare services provided to communities",
  },
  {
    icon: Home,
    number: "450",
    label: "Homes Built",
    description: "Safe housing constructed for families",
  },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every donation, every volunteer hour, and every partnership creates ripples of positive change that
            transform entire communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
