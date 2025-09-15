import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Empowering Children Through
              <span className="text-primary"> Community</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Creating a child-centered community by increasing effective participation of parents, teachers, and
              communities in the development of children from birth to 18 years of age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Watch Our Story
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">120+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">600+</div>
                <div className="text-sm text-muted-foreground">Staff</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1.2L+</div>
                <div className="text-sm text-muted-foreground">Stakeholders</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/check.avif"
              alt="Children learning with parents and teachers in community setting"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">18</div>
              <div className="text-sm">Years Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
