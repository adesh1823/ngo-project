import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, MessageCircle, BookOpen, Baby } from "lucide-react"

const programs = [
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Provide comprehensive trainings to parents, teachers, and other stakeholders to enhance their skills in child development and community engagement.",
    image: "/training.avif",
    impact: "600+ staff trained",
    buttonText: "Book a Training",
  },
  {
    icon: MessageCircle,
    title: "Counselling",
    description:
      "One-on-one counselling sessions with personality and EQ tests, regular follow-ups, and detailed feedback to support individual growth.",
    image: "/councelling.avif",
    impact: "1000+ sessions conducted",
    buttonText: "Book a Session",
  },
  {
    icon: BookOpen,
    title: "Educational Support",
    description:
      "Comprehensive programs for underprivileged children including computer skills, music, art, and essential life skills development.",
    image: "/edu_support.avif",
    impact: "5000+ children supported",
    buttonText: "Get Involved",
  },
  {
    icon: Baby,
    title: "Early Childhood Care",
    description:
      "Specialized activities for children aged 0–6 including 'Parent-Child Play', 'Pre School Skill-Development', and 'Free Play' programs.",
    image: "/childhood_care.avif",
    impact: "2000+ families engaged",
    buttonText: "Get Involved",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive services to empower parents, teachers, and communities in creating a child-centered
            environment for holistic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                    <program.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{program.impact}</span>
                  <Button variant="outline" size="sm">
                    {program.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
